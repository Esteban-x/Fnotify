import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="bg p-4">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <Image src="/fnotify-logo.png" width={34} height={6} className="h-8 mr-3 rounded" alt="Fnotify Logo" />
                        <span className="text-2xl fnotify-title font-semibold text-white">Fnotify</span>
                    </a>
                </div>

                {/* Menu hamburger - visible pour les écrans plus petits */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white cursor-pointer"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Boutons de connexion et d'inscription - visibles pour les écrans plus grands */}
                <div className="hidden md:flex space-x-4">
                    <button className="text-white bg-gray-500 hover:bg-gray-400 py-2 px-4 font-medium rounded-full">
                        Se connecter
                    </button>
                    <button className="blue-btn text-white font-medium py-2 px-4 rounded-full">
                        S'inscrire
                    </button>
                </div>
            </div>

            {/* Menu déroulant - visible pour les écrans plus petits */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col  mt-4">
                    <button className="text-white bg-gray-500 hover:bg-gray-400 mt-2 py-2 px-4 font-medium rounded">
                        Se connecter
                    </button>
                    <button className="blue-btn text-white font-medium py-2 mt-2 px-4 rounded">
                        S'inscrire
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
