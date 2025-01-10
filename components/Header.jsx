"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo-primary.png";
import { useState } from "react";
import { FaBars, FaGoogle, FaX, FaUser } from "react-icons/fa6";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Temporary login testing
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <header className="bg-givry-200 relative">
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
            <FaX className="text-2xl text-givry-900" />
          ) : (
            <FaBars className="text-2xl text-givry-900" />
          )}
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="wine cellar logo" className="h-10 w-auto" />
          <h1 className="hidden lg:block ml-2 text-xl text-givry-950 font-semibold">
            Wine<span className="font-normal">Cellar</span>
          </h1>
        </Link>

        {/* Navigation */}
        <Navigation isLoggedIn={isLoggedIn} />

        {/* Logged In/Out Buttons */}
        {isLoggedIn ? (
          <button
            className="bg-givry-900 p-2 rounded-full duration-200 hover:bg-givry-600"
            type="button"
          >
            <FaUser className="text-white text-lg" />
          </button>
        ) : (
          <button
            className="px-4 py-1.5 font-semibold bg-givry-950 text-white hover:bg-givry-600 duration-200 rounded-md flex gap-2 items-center"
            type="button"
          >
            <FaGoogle /> Login
          </button>
        )}
      </div>

      {/* Show/Hide Mobile Menu (absolute) */}
      {isMobileMenuOpen && (
        <MobileNav
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isLoggedIn={isLoggedIn}
        />
      )}
    </header>
  );
};
export default Header;
