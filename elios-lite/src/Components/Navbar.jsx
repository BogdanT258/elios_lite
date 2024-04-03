import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const menuItems = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Add Post',
            path: '/addpost'
        },
        {
            title: 'Shares',
            path: '/shares'
        },
        {
            title: 'Profile',
            path: '/profile'
        },
    ];

    return (
        <div className=''>
            <nav className="py-5">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <a href="/" className="flex items-center">
                        <span className="self-center font-semibold whitespace-nowrap text-white text-4xl">Elios Lite</span>
                    </a>
                    <div className="flex items-center lg:order-2">
                        {/* Sign out button in the future below */}
                        <div className="hidden mt-2 mr-4 sm:inline-block">
                            <span></span>
                        </div>
                        <button
                            onClick={() => setIsNavOpen(!isNavOpen)} 
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center w-full lg:flex lg:w-auto lg:order-1 ${isNavOpen ? 'block' : 'hidden'}`} id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ">
                            {menuItems.map((item) => (
                                <li key={item.path}>
                                    <Link className='text-white font-semibold text-xl hover:[text-shadow:2px_2px_2px_var(--tw-shadow-color)] shadow-purple-500' to={item.path}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
            <hr />
        </div>
    );
}

export default Navbar;
