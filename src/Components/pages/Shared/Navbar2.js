import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

const Navbar2 = () => {
    const [visiable, setvisiable] = useState(false)
    const handler = () => {
        setvisiable(visiable ? false : true)
    }


    const [open, setOpen] = React.useState(false);
    const [flyer, setFlyer] = React.useState(false);
    const [flyerTwo, setFlyerTwo] = React.useState(false);

    let activeStyle = {
        textDecoration: "bule",
    };


    return (
        <>
            <div className="relative bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <NavLink to="/">
                                <span className="sr-only">Workflow</span>
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                    alt=""
                                />
                            </NavLink>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <button
                                type="button"
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                onClick={() => setOpen(!open)}
                            >
                                <span className="sr-only">Open menu</span>
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                        <nav className="hidden md:flex space-x-10">
                            <NavLink
                                className=" navbar-nav text-base font-medium text-gray-500 hover:text-gray-900"
                                to="/"
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className="navbar-nav text-base font-medium text-gray-500 hover:text-gray-900"
                                to="/services"
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                                Services
                            </NavLink>
                            <NavLink
                                className="navbar-nav text-base font-medium text-gray-500 hover:text-gray-900"
                                to="/aboutUs"
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                                Protfolio
                            </NavLink>
                            <NavLink
                                className="navbar-nav text-base font-medium text-gray-500 hover:text-gray-900"
                                to="/contactUs"
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                                Contact Us
                            </NavLink>

                            {/* <div className="relative">
                                <button
                                    type="button"
                                    className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none "
                                    onClick={() => (setFlyerTwo(!flyerTwo), setFlyer(false))}
                                >
                                    <span>More</span>

                                    <svg
                                        className={
                                            flyerTwo === true
                                                ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                                                : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                        }
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>

                                <div
                                    onMouseLeave={() => setFlyerTwo(false)}
                                    className={
                                        flyerTwo
                                            ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-48 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                            : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2  w-48 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                    }
                                >
                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="relative grid gap-6 bg-white px-2 py-6 sm:gap-8 sm:p-8">
                                            <p className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                <svg
                                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                                    />
                                                </svg>
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        <NavLink
                                                            className="navbar-nav text-base font-medium text-gray-500 hover:text-gray-900"
                                                            to="/aboutUs"
                                                            style={({ isActive }) =>
                                                                isActive ? activeStyle : undefined
                                                            }
                                                        >
                                                            About Us
                                                        </NavLink>
                                                    </p>
                                                </div>
                                            </p>
                                            <p className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">

                                                <svg
                                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    />
                                                </svg>
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        <NavLink
                                                            className="navbar-nav text-base font-medium text-gray-500 hover:text-gray-900"
                                                            to="/ourteam"
                                                            style={({ isActive }) =>
                                                                isActive ? activeStyle : undefined
                                                            }
                                                        >
                                                            Our team
                                                        </NavLink>
                                                    </p>
                                                </div>
                                            </p>
                                            <p className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">

                                                <svg
                                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    />
                                                </svg>
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        <NavLink
                                                            className="navbar-nav text-base font-medium text-gray-500 hover:text-gray-900"
                                                            to="/aboutUs"
                                                            style={({ isActive }) =>
                                                                isActive ? activeStyle : undefined
                                                            }
                                                        >
                                                            Blogs
                                                        </NavLink>
                                                    </p>
                                                </div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div class="relative" x-data="{ open: false}">
                                <button onClick={handler} class="flex flex-row items-center px-3 py-2 ml-4 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
                                    <span class="mx-2">Pages</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mt-1 transform feather feather-chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </button>
                                {
                                    visiable
                                        ?
                                        <div class="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg">
                                            <div class="py-1 bg-white rounded-md shadow-xs">
                                                <a href="#" class="flex flex-row items-center px-4 py-2 text-sm text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100">
                                                    Pages-1
                                                </a>
                                                <a href="#" class="flex flex-row items-center px-4 py-2 text-sm text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100">
                                                    Pages-2
                                                </a>
                                                <a href="#" class="flex flex-row items-center px-4 py-2 text-sm text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100">
                                                    Pages-3
                                                </a>
                                            </div>
                                        </div>
                                        :
                                        <></>
                                }
                            </div>
                        </nav>
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <a
                                href="https://calendly.com/niharmonirulislam/project-idea"
                                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Talk to Expert
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        open
                            ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                            : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    }
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <button
                                        type="button"
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                        onClick={() => setOpen(!open)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        {/* Heroicon name: outline/x */}
                                        <svg
                                            className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6 ">
                                <nav className="grid gap-y-8">
                                    <p className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                        {/* Heroicon name: outline/chart-bar */}
                                        <svg
                                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            <NavLink
                                                className=" navbar-nav text-base font-medium text-gray-500 hover:text-gray-900"
                                                to="/"
                                                style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                }
                                            >
                                                Home
                                            </NavLink>
                                        </span>
                                    </p>
                                    <p className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                        {/* Heroicon name: outline/cursor-click */}
                                        <svg
                                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                            />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            <NavLink
                                                className="navbar-nav text-base font-medium text-gray-500 hover:text-gray-900"
                                                to="/services"
                                                style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                }
                                            >
                                                Services
                                            </NavLink>
                                        </span>
                                    </p>
                                    <p className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                        {/* Heroicon name: outline/shield-check */}
                                        <svg
                                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                            />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            <NavLink
                                                className="navbar-nav text-base font-medium text-gray-500 hover:text-gray-900"
                                                to="/aboutUs"
                                                style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                }
                                            >
                                                Protfolio
                                            </NavLink>
                                        </span>
                                    </p>
                                    <p className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                        {/* Heroicon name: outline/view-grid */}
                                        <svg
                                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                            />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            <NavLink
                                                className="navbar-nav text-base font-medium text-gray-500 hover:text-gray-900"
                                                to="/contactUs"
                                                style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                }
                                            >
                                                Contact Us
                                            </NavLink>
                                        </span>
                                    </p>
                                    <p className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                        {/* Heroicon name: outline/refresh */}
                                        <svg
                                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                            />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            <div class="relative" x-data="{ open: false}">
                                                <button onClick={handler} class="flex flex-row items-center px-3 py-2 ml-4 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
                                                    <span class="mx-2">Pages</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mt-1 transform feather feather-chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                                </button>
                                                {
                                                    visiable
                                                        ?
                                                        <div class="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg">
                                                            <div class="py-1 bg-white rounded-md shadow-xs">
                                                                <a href="#" class="flex flex-row items-center px-4 py-2 text-sm text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100">
                                                                    Pages-1
                                                                </a>
                                                                <a href="#" class="flex flex-row items-center px-4 py-2 text-sm text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100">
                                                                    Pages-2
                                                                </a>
                                                                <a href="#" class="flex flex-row items-center px-4 py-2 text-sm text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100">
                                                                    Pages-3
                                                                </a>
                                                            </div>
                                                        </div>
                                                        :
                                                        <></>
                                                }
                                            </div>
                                            {/* <div className="relative">
                                                <button
                                                    type="button"
                                                    className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none "
                                                    onClick={() => (
                                                        setFlyerTwo(!flyerTwo), setFlyer(false)
                                                    )}
                                                >
                                                    <span>More</span>

                                                    <svg
                                                        className={
                                                            flyerTwo === true
                                                                ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                                                                : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                        }
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>

                                                <div
                                                    onMouseLeave={() => setFlyerTwo(false)}
                                                    className={
                                                        flyerTwo
                                                            ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-48 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                                            : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-48 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                                    }
                                                >
                                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                        <div className="relative grid gap-6 bg-white px-2 py-6 sm:gap-8 sm:p-8">
                                                            <p className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                                <svg
                                                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                                                    />
                                                                </svg>
                                                                <div className="ml-4">
                                                                    <p className="text-base font-medium text-gray-900">
                                                                        <NavLink
                                                                            className="navbar-nav text-base font-medium text-gray-500 hover:text-gray-900"
                                                                            to="/aboutUs"
                                                                            style={({ isActive }) =>
                                                                                isActive ? activeStyle : undefined
                                                                            }
                                                                        >
                                                                            About Us
                                                                        </NavLink>
                                                                    </p>
                                                                </div>
                                                            </p>
                                                            <p className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                                <svg
                                                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                                    />
                                                                </svg>
                                                                <div className="ml-4">
                                                                    <p className="text-base font-medium text-gray-900">
                                                                        <NavLink
                                                                            className="navbar-nav text-base font-medium text-gray-500 hover:text-gray-900"
                                                                            to="/ourteam"
                                                                            style={({ isActive }) =>
                                                                                isActive ? activeStyle : undefined
                                                                            }
                                                                        >
                                                                            Our team
                                                                        </NavLink>
                                                                    </p>
                                                                </div>
                                                            </p>
                                                            <p className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                                <svg
                                                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                                    />
                                                                </svg>
                                                                <div className="ml-4">
                                                                    <p className="text-base font-medium text-gray-900">
                                                                        <NavLink
                                                                            className="navbar-nav text-base font-medium text-gray-500 hover:text-gray-900"
                                                                            to="/aboutUs"
                                                                            style={({ isActive }) =>
                                                                                isActive ? activeStyle : undefined
                                                                            }
                                                                        >
                                                                            Blogs
                                                                        </NavLink>
                                                                    </p>
                                                                </div>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </span>
                                    </p>
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div>
                                <a
                                    href="https://calendly.com/niharmonirulislam/project-idea"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Talk to Expert
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar2;