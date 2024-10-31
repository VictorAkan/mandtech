"use client";

// pages/signin.js
import { useState } from 'react';
import Link from 'next/link';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig'; // import Firebase auth

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [redirect, setRedirect] = useState('');

    const validateForm = () => {
        if (!email.includes('@')) {
            setError('Please enter a valid email');
            return false;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            if (email === "admin248@gmail.com" && password === "mandtechsupersecret") {
                setRedirect('/addProduct'); // Set redirection for admin
            } else {
                setRedirect('/someOtherPage'); // Set redirection for other users
            }
        } catch (error) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen dark:bg-black bg-gray-100">
            <div className="bg-white dark:bg-gray-950 p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 light:text-black text-center">Sign In</h2>

                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm light:text-black font-medium mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full border dark:text-white text-black dark:bg-gray-900 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm light:text-black font-medium mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full border dark:text-white text-black dark:bg-gray-900 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
                    >
                        Sign In
                    </button>
                </form>

                {/* Conditional Rendering for Redirection Links */}
                {redirect && (
                    <div className="mt-6 text-center">
                        <Link href={redirect}>
                            <p className="text-green-500 underline">Continue</p>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SignIn;
