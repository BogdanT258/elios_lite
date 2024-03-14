import React from 'react'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

function Navbar() {
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
    ]

    return (
        <div>

            <nav class="bg-gradient-to-r from-primary to-secondary w-100 px-8 md:px-auto">
                <div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                    <div class="text-indigo-500 md:order-1">
                        <img src={logo} alt="" className='w-60 h-60 object-cover' />
                    </div>
                    <div class="text-gray-500 order-3 w-full md:w-auto md:order-2">
                        <ul class="flex font-semibold justify-between">
                            {menuItems.map((item) => {
                                return (
                                    <li className="md:px-4 md:py-2 text-white hover:text-blue-800" key={item.path}>
                                        <Link to={item.path}>{item.title}</Link>
                                    </li>
                                );
                            })}

                        </ul>
                    </div>
                    <div class="order-2 md:order-3">
                        <button class="px-4 py-2  rounded-xl flex items-center gap-2">
                            <a href="#_" class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="white">
                                    <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Sign out</span>
                                <span class="absolute inset-0 border-2 border-white rounded-full"></span>
                            </a>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
