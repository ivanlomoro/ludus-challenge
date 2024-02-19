interface ModalDetailsProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const ModalDetails: React.FC<ModalDetailsProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-start max-w-lg w-full">
                {children}
                <button
                    className="mt-4 self-end px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300"
                    onClick={onClose}
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};
