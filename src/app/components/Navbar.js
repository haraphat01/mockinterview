"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation'
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from "../firebase/config"

const Navbar = () => {
    const [user, setUser] = useState("")
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    
        return () => unsubscribe();
    }, []);

    const signInWithGoogle = async (event) => {
        event.preventDefault();

        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            alert("Sign-in successful!"); // Alert the user
            router.push("/dashboard"); // Redirect to the dashboard page
        } catch (error) {
            console.log("Error signing in", error.message);
        }
    }

    return (
        <div className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold">
                            MockInterview
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                                Home
                            </Link>
    
                            <Link href="/features" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                                Features
                            </Link>
    
                            {user ? (
                                <button onClick={() => signOut(auth)} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                                    Log out
                                </button>
                            ) : (
                                <button onClick={signInWithGoogle} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                                    Log in
                                </button>
                            )}
    
                            <Link href="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium bg-white text-blue-600 hover:bg-gray-100">
                                Dashboard
                            </Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
    
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                            Home
                        </Link>
    
                        <Link href="/features" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                            Features
                        </Link>
                        <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                            Contact
                        </Link>
                        <Link href="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium bg-white text-blue-600 hover:bg-gray-100">
                            Dashboard
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
