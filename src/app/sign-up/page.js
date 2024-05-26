"use client"
import {createUserWithEmailAndPassword, useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth"
import {auth} from '../firebase/config'
import { useState } from "react";


export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            const res = await createUserWithEmailAndPassword(email, password)
            console.log(res);
            setEmail('')
            setPassword('')
        } catch(e){
            console.log(error)
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <form className="bg-black-100 p-8 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSignUp}>
                <h2 className="text-2xl font-semibold mb-6 text-center">Login I Sign up</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password:</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="w-full ml-2 py-2 px-4 bg-white hover:bg-green-600 text-black font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    );
}