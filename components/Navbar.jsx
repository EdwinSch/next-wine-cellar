"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo-primary.png";
import { useState } from "react";
import { FaBars, FaGoogle, FaX } from "react-icons/fa6";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-secondary relative">
      <div
        id="layout-container"
        className="mx-auto max-w-7xl flex justify-between items-center px-4 sm:px-8 h-[72px]"
      >
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden"
          type="button"
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            <FaX className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="wine cellar logo" className="h-10 w-auto" />
          <h1 className="hidden lg:block ml-2 text-xl text-primary font-semibold">
            Wine<span className="font-normal">Cellar</span>
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden sm:flex items-center gap-6 text-primary">
          <Link href="/collection" className="hover:text-primaryHover">
            Collection
          </Link>
          <Link href="/collection/add" className="hover:text-primaryHover">
            Add Wine
          </Link>
          <Link href="/wishlist" className="hover:text-primaryHover">
            Wishlist
          </Link>
        </nav>

        {/* Login Button */}
        <button className="px-4 py-2 font-semibold bg-primary text-white hover:bg-primaryHover duration-200 rounded-md flex gap-2 items-center">
          <FaGoogle /> Login
        </button>
      </div>

      {/* Show Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileNav setIsMobileMenuOpen={setIsMobileMenuOpen} />
      )}
    </header>
  );
};
export default Navbar;
