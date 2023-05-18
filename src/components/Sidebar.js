import React, { useState } from "react";
import { AiFillCalendar, AiFillCar } from 'react-icons/ai'
import { HiCog, HiOutlineUser, HiOutlineUsers, HiUsers } from "react-icons/hi";
import { FaFileInvoice } from "react-icons/fa";

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    return (
        <div
            className={` ${open ? "w-15 " : "w-60 "
                } flex flex-col p-3 bg-gray-800 shadow duration-300 h-[calc(100vh_-_8rem)]`}
            // style={{ maxHeight: '100%' }}
        >

            <div className="space-y-3">
                <div className="flex items-center">
                    <button onClick={() => setOpen(!open)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                        
                    </button>
                </div>
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li className="rounded-sm">
                            <a
                                href="/user"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg> */}
                                <HiUsers className="w-6 h-6 white-block "/>
                                {!open ? <span className="text-gray-100">User</span> : null}
                            </a>
                        </li>
                        <li className="rounded-sm">
                            <a
                                href="/vehicle"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                    />
                                </svg> */}
                                <AiFillCar className="w-6 h-6"/>
                                {!open ? <span className="text-gray-100">Vehicle</span> : null}
                            </a>
                        </li>
                        <li className="rounded-sm">
                            <a
                                href="/appointment"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                    />
                                </svg> */}
                                <AiFillCalendar className="w-6 h-6"/>
                                {!open ? <span className="text-gray-100">Appointments</span> : null}
                            </a>
                        </li>
                        <li className="rounded-sm">
                            <a
                                href="/workshop"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg> */}
                                <HiCog className="w-6 h-6"/>
                                {!open ? <span className="text-gray-100">Workshops</span> : null}
                            </a>
                        </li>
                        <li className="rounded-sm">
                            <a
                                href="/report"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                    />
                                </svg> */}
                                <FaFileInvoice className="w-6 h-6"/>
                                {!open ? <span className="text-gray-100" >Transactions Report</span> : null}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}