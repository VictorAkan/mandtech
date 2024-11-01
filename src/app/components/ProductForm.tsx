"use client";

// pages/addProduct.js
import { useState } from 'react';
import { db, storage } from '../firebase/firebaseConfig'; // Import Firestore
import { collection, addDoc } from 'firebase/firestore'; // Firestore methods
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const AddProduct = () => {
    const [category, setCategory] = useState('');
    const [tag, setTag] = useState('');
    const [productName, setProductName] = useState('');
    const [referencePrice, setReferencePrice] = useState('');
    const [brand, setBrand] = useState('');
    const [pnID, setPnID] = useState('');
    const [origin, setOrigin] = useState('');
    const [image, setImage] = useState<File | null>(null); // Store the image file
    const [imageURL, setImageURL] = useState('');
    const [uploadProgress, setUploadProgress] = useState(0);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const validateForm = () => {
        if (!category || !tag || !productName || !referencePrice || !brand || !pnID || !origin || !image) {
            setError('All fields are required');
            return false;
        }
        // if (isNaN(referencePrice)) {
        //     setError('Reference price must be a number');
        //     return false;
        // }
        return true;
    };

    const handleImageUpload = () => {
        return new Promise((resolve, reject) => {
            if (!image) {
                reject(new Error("No image file selected"));
                return;
            }
            const storageRef = ref(storage, `productImages/${image.name}`);
            const uploadTask = uploadBytesResumable(storageRef, image);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setUploadProgress(progress);
                },
                (error) => {
                    reject(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setImageURL(downloadURL);
                        resolve(downloadURL);
                    });
                }
            );
        });
    };
    

    // const handleImageUpload = () => {
    //     return new Promise((resolve, reject) => {
    //         const storageRef = ref(storage, `productImages/${image.name}`);
    //         const uploadTask = uploadBytesResumable(storageRef, image);

    //         uploadTask.on(
    //             'state_changed',
    //             (snapshot) => {
    //                 const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //                 setUploadProgress(progress);
    //             },
    //             (error) => {
    //                 reject(error);
    //             },
    //             () => {
    //                 getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //                     setImageURL(downloadURL);
    //                     resolve(downloadURL);
    //                 });
    //             }
    //         );
    //     });
    // };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!validateForm()) return;

        try {
            const imageUrl = await handleImageUpload();

            await addDoc(collection(db, 'products'), {
                category,
                tag,
                productName,
                // referencePrice: parseFloat(referencePrice), // Store price as number
                referencePrice,
                brand,
                pnID,
                origin,
                imageUrl,
                createdAt: new Date(),
            });
            setSuccess('Product added successfully');
            // Reset form fields
            setCategory('');
            setTag('');
            setProductName('');
            setReferencePrice('');
            setBrand('');
            setPnID('');
            setOrigin('');
            setImage(null);
            setUploadProgress(0);
        } catch (error: any) {
            setError('Error adding product: ' + error.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-full py-10 dark:bg-black bg-gray-100">
            <div className="bg-white dark:bg-gray-950 p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 light:text-black text-center">Add Product</h2>

                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                {success && <p className="text-green-500 text-center mb-4">{success}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Category</label>
                        <input
                            type="text"
                            className="w-full border dark:text-white text-black dark:bg-gray-900 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            placeholder='Make this lowercase please'
                            required
                        />
                    </div>

                    {/* Tag */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Tag</label>
                        <input
                            type="text"
                            className="w-full border dark:text-white text-black dark:bg-gray-900 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={tag}
                            onChange={(e) => setTag(e.target.value)}
                            required
                        />
                    </div>

                    {/* Product Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Product Name</label>
                        <input
                            type="text"
                            className="w-full border dark:text-white text-black dark:bg-gray-900 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            required
                        />
                    </div>

                    {/* Reference Price */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Reference Price</label>
                        <input
                            type="text"
                            className="w-full border dark:text-white text-black dark:bg-gray-900 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={referencePrice}
                            onChange={(e) => setReferencePrice(e.target.value)}
                            required
                        />
                    </div>

                    {/* Brand */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Brand</label>
                        <input
                            type="text"
                            className="w-full border dark:text-white text-black dark:bg-gray-900 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            required
                        />
                    </div>

                    {/* PN/ID */}
                    <div>
                        <label className="block text-sm font-medium mb-1">PN</label>
                        <input
                            type="text"
                            className="w-full border dark:text-white text-black dark:bg-gray-900 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={pnID}
                            onChange={(e) => setPnID(e.target.value)}
                            required
                        />
                    </div>

                    {/* Origin */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Origin</label>
                        <input
                            type="text"
                            className="w-full border dark:text-white text-black dark:bg-gray-900 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={origin}
                            onChange={(e) => setOrigin(e.target.value)}
                            required
                        />
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Product Image</label>
                        <input
                            type="file"
                            className="w-full border dark:text-white text-black dark:bg-gray-900 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            onChange={(e) => {
                                if (e.target.files && e.target.files.length > 0) {
                                    setImage(e.target.files[0]); // Set image to first file
                                } else {
                                    setImage(null); // Reset if no file selected
                                }
                            }} 
                            required
                        />
                        {uploadProgress > 0 && (
                            <div className="w-full bg-gray-200 rounded-full mt-2">
                                <div className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${uploadProgress}%` }}>
                                    {uploadProgress}%
                                </div>
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
