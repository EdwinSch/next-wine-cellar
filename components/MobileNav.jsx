import Link from "next/link";

const MobileNav = ({ setIsMobileMenuOpen }) => {
  return (
    <nav className="bg-secondary absolute top-[72px] left-0 w-full p-4 flex md:hidden flex-col gap-2">
      <Link
        href="/collection"
        className="hover:text-primaryHover"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Collection
      </Link>
      <Link
        href="/collection/add"
        className="hover:text-primaryHover"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Add Wine
      </Link>
      <Link
        href="/wishlist"
        className="hover:text-primaryHover"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Wishlist
      </Link>
    </nav>
  );
};
export default MobileNav;
