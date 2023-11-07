import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
    return (
        <nav className="bg p-4">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <Image src="/fnotify-logo.png" width={34} height={6} className="h-8 mr-3 rounded" alt="Fnotify Logo" />
                        <span className="text-2xl font-semibold text-white">Fnotify</span>
                    </a>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="relative">
                        <input type="text" id="search-navbar" className="block search-input text-center w-full p-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400" />
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="hidden md:flex space-x-4">
                    <button className="text-white bg-gray-500 hover:bg-gray-400 py-2 px-4 font-medium rounded-full">Se connecter</button>
                    <button className="blue-btn text-white font-medium py-2 px-4 rounded-full">S'inscrire</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
