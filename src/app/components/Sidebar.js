"use client"
import Link from 'next/link';
import { useState } from 'react';
import UploadCVModal from "../components/UploadCVModal"
const Sidebar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleUploadCVClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="h-screen w-64 bg-gray-900 text-white flex flex-col">
            <div className="flex items-center justify-center h-16 border-b border-white">

            </div>
            <nav className="flex flex-col flex-grow p-4">
                <button
                    onClick={handleUploadCVClick}
                    className="mt-4 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 text-left"
                >
                    Upload CV
                </button>
                <Link href="/buy-credits" className="mt-4 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                    Buy Credits
                </Link>
                <Link href="/logout" className="mt-4 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                    Log Out
                </Link>
            </nav>
            {isModalOpen && <UploadCVModal closeModal={closeModal} />}
        </div>
    );
};

export default Sidebar;
