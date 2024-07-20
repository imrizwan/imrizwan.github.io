"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Navbar = ({ homeRef, scroll, data }) => {
    const {
        scrollToHome,
        scrollToAbout,
        scrollToProjects,
        scrollToSkills,
        scrollToContact
    } = scroll;
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const drawerRef = useRef(null);
    // const dropdownRef = useRef(null);

    const menu = [
        {
            title: "Home",
            link: "/",
            scroll: scrollToHome
        },
        {
            title: "About",
            link: "/about",
            scroll: scrollToAbout
        },
        {
            title: "Projects",
            link: "/projects",
            scroll: scrollToProjects
        },
        {
            title: "Contact",
            link: "/contact",
            scroll: scrollToContact
        },
    ]

    const handleClickOutside = (event) => {
        if (drawerRef.current && !drawerRef.current.contains(event.target)) {
            setIsDrawerOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleToggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleMenuItemClick = () => {
        setIsDrawerOpen(false); // Close drawer when a menu item is clicked
    };

    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDropdownItemClick = () => {
        setIsDropdownOpen(false); // Close dropdown when a menu item is clicked
    };

    return (
        <header className="bg-gray-900 bg-opacity-50 background-image" ref={homeRef}>
            <nav className="max-w-7xl mx-auto p-4 flex justify-between items-center sticky top-0 z-50">
                <div className="flex items-center">
                    <Image src="/muhammad-rizwan.jpeg" alt="Muhammad Rizwan" width={80} height={80} />
                    <h1 className="ml-4 text-white text-2xl">Muhammad Rizwan</h1>
                </div>
                <div className="lg:hidden">
                    <button
                        className="text-white text-xl"
                        onClick={handleToggleDrawer} // Toggle drawer visibility
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex items-center space-x-4">
                    {menu.map((item, index) => <a key={index} href="#" className="text-white text-xl" onClick={() => {
                        item.scroll();
                    }}>{item.title}</a>)}
                    {/* <div className="hidden md:block">
                        <div className="relative" ref={dropdownRef}>
                            <button
                                className="text-white text-xl"
                                onClick={handleToggleDropdown} // Toggle dropdown visibility
                            >
                                Projects
                            </button>
                            {isDropdownOpen && (
                                <div
                                    className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg
                                transition-opacity duration-300 ease-in-out opacity-100"
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    onMouseLeave={() => setIsDropdownOpen(false)}
                                >
                                    <a href="#" className="block px-4 py-2" onClick={handleDropdownItemClick}>Project 1</a>
                                    <a href="#" className="block px-4 py-2" onClick={handleDropdownItemClick}>Project 2</a>
                                    <a href="#" className="block px-4 py-2" onClick={handleDropdownItemClick}>Project 3</a>
                                </div>
                            )}
                        </div>

                    </div> */}

                </div>
                {isDrawerOpen && (
                    <div
                        className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-end z-50"
                        onClick={handleClickOutside}
                    >
                        <div
                            ref={drawerRef}
                            className="bg-gray-800 w-64 h-full p-4 flex flex-col space-y-4 text-white"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="self-end"
                                onClick={handleToggleDrawer} // Close drawer
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            {menu.map((item, index) => <a key={index} href="#" className="block px-4 py-2" onClick={() => {
                                item.scroll();
                            }}>{item.title}</a>)}
                            {/* <div className="block px-4 py-2">
                                <button
                                    className="text-white text-xl"
                                    onClick={handleToggleDrawer} 
                                >
                                    Projects
                                </button>
                                {isDrawerOpen && (
                                    <div
                                        className="mt-2 bg-gray-800 text-white rounded-md shadow-lg transition-opacity duration-300 ease-in-out opacity-100"
                                    >
                                        <a href="#" className="block px-4 py-2" onClick={handleMenuItemClick}>Project 1</a>
                                        <a href="#" className="block px-4 py-2" onClick={handleMenuItemClick}>Project 2</a>
                                        <a href="#" className="block px-4 py-2" onClick={handleMenuItemClick}>Project 3</a>
                                    </div>
                                )}
                            </div> */}

                        </div>
                    </div>
                )}
            </nav>
            <div className="max-w-7xl mx-auto p-4 text-center min-h-screen flex flex-col justify-center items-center">
                <h2 className="text-white text-3xl mb-2">Muhammad Rizwan</h2>
                <h3 className="text-white text-2xl mb-4">Full-Stack Developer</h3>
                <a href={data.cv_link} className="bg-blue-500 text-white px-4 py-2 rounded-md" target='_blank'>Download my CV</a>
            </div>
        </header>
    );
};

export default Navbar;
