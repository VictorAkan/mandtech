const Modal = ({ children, onClose }:any) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white dark:bg-gray-950 p-4 rounded shadow-lg max-w-lg w-full">
                <button onClick={onClose} className="absolute top-2 right-2">X</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;