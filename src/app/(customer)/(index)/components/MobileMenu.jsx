// MobileMenu.jsx (Client Component)
"use client"

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const MobileMenu = ({ session, user }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Mobile Menu Button */}
            <div className="" >
                <button
                    className="p-2 text-white md:hidden z-20"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-[#0D5CD7] mt-2 rounded-xl p-4 flex-col gap-4 z-10`}>
                <ul className="flex flex-col gap-4">
                    <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 font-bold text-[#FFC736]">
                        <Link href="/catalogs">Shop</Link>
                    </li>
                    <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 text-white">
                        <Link href="/">Categories</Link>
                    </li>
                    <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 text-white">
                        <Link href="/">Testimonials</Link>
                    </li>
                    <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 text-white">
                        <Link href="/">Rewards</Link>
                    </li>
                </ul>
                <div className="flex flex-col gap-3 md:hidden">
                    {session && user?.role === "customer" ? (
                        <div className="flex items-center gap-3">
                            <p className="text-white">Hi, {user.name}</p>
                            <div className="w-10 h-10 flex shrink-0 rounded-full p-1 border border-[#E5E5E5] overflow-hidden">
                                <img src="/assets/photos/p4.png" className="w-full h-full object-cover rounded-full" alt="photo"/>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Link href="/sign-in" className="p-3 bg-white rounded-full font-semibold text-center">
                                Sign In
                            </Link>
                            <Link href="/sign-up" className="p-3 bg-white rounded-full font-semibold text-center">
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default MobileMenu