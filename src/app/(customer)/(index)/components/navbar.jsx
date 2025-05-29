

// Navbar.jsx (Server Component)
import MobileMenu from "@/app/(customer)/(index)/components/MobileMenu";
import {getUser} from "@/lib/auth";
import Link from "next/link";

const Navbar = async () => {
    const { user, session } = await getUser();

    return (
        <nav className="container max-w-[1130px] mx-auto mb-10 px-4 md:px-5">
            <div className="flex items-center justify-between bg-[#0D5CD7] p-4 md:p-5 rounded-2xl md:rounded-3xl relative">
                {/* Logo */}
                <div className="flex shrink-0 z-20">
                    <img src="/assets/logos/logo.svg" alt="icon" className="h-8 md:h-auto" />
                </div>

                {/* Mobile Menu Component */}
                <div className="float-right" >
                    <MobileMenu session={session} user={user} />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-[30px]">
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

                {/* Desktop Right Section */}
                <div className="hidden md:flex items-center gap-3">
                    <Link href="/carts">
                        <div className="w-10 h-10 md:w-12 md:h-12 flex shrink-0">
                            <img src="/assets/icons/cart.svg" alt="icon" />
                        </div>
                    </Link>
                    {session && user?.role === "customer" ? (
                        <>
                            <p className="text-white">Hi, {user.name}</p>
                            <div className="w-10 h-10 md:w-[48px] md:h-[48px] flex shrink-0 rounded-full p-1 border border-[#E5E5E5] overflow-hidden">
                                <img src="/assets/photos/p4.png" className="w-full h-full object-cover rounded-full" alt="photo"/>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link href="/sign-in" className="p-[12px_20px] bg-white rounded-full font-semibold">
                                Sign In
                            </Link>
                            <Link href="/sign-up" className="p-[12px_20px] bg-white rounded-full font-semibold">
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Cart Button */}
                <Link href="/carts" className="md:hidden z-20">
                    <div className="w-10 h-10 flex shrink-0">
                        <img src="/assets/icons/cart.svg" alt="icon" />
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;