import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = ({ setIsMobileMenuOpen, isLoggedIn }) => {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary absolute top-[72px] left-0 w-full px-4 pb-4 pt-2 flex sm:hidden flex-col gap-4 overflow-hidden">
      <Link
        href="/collection"
        className={`${
          pathname === "/collection" ? "underline underline-offset-4" : ""
        } hover:text-primaryHover capitalize w-fit`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        my collection
      </Link>

      {isLoggedIn && (
        <Link
          href="/collection/add"
          className={`${
            pathname === "/collection/add" ? "underline underline-offset-4" : ""
          } hover:text-primaryHover capitalize w-fit`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          add wine
        </Link>
      )}

      <Link
        href="/wishlist"
        className={`${
          pathname === "/wishlist" ? "underline underline-offset-4" : ""
        } hover:text-primaryHover capitalize w-fit`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        wishlist
      </Link>
    </nav>
  );
};
export default MobileNav;
