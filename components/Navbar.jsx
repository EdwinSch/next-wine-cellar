import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo-primary.png";

const Navbar = () => {
  return (
    <header className="bg-secondary">
      <div
        id="layout-container"
        className="mx-auto max-w-7xl flex justify-between px-8 py-4"
      >
        {/* Left Side */}
        <div
          className="flex items-center gap-10
        "
        >
          {/* Logo */}
          <div className="flex items-center">
            <Image src={logo} alt="wine cellar logo" className="h-10 w-auto" />
            <h1 className="ml-2 text-xl text-primary font-semibold">
              Wine<span className="font-normal">Cellar</span>
            </h1>
          </div>
          {/* Navigation */}
          <nav className="flex items-center gap-4 text-primary">
            <Link href="/collection">Collection</Link>
            <Link href="/collection/add">Add Wine</Link>
            <Link href="/wishlist">Wishlist</Link>
          </nav>
        </div>

        {/* Right Side */}
        <button className="px-4 py-2 font-semibold bg-primary text-white hover:bg-primaryHover duration-200 rounded-md">
          Login
        </button>
      </div>
    </header>
  );
};
export default Navbar;
