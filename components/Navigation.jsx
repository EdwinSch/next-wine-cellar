import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = ({ isLoggedIn }) => {
  const pathname = usePathname();

  return (
    <nav className="hidden sm:flex items-center gap-6 text-givry-900">
      <Link
        href="/collection"
        className={`${
          pathname === "/collection"
            ? "underline underline-offset-4 text-givry-600"
            : ""
        } hover:text-givry-600 duration-200 capitalize`}
      >
        my collection
      </Link>

      {isLoggedIn && (
        <Link
          href="/collection/add"
          className={`${
            pathname === "/collection/add"
              ? "underline underline-offset-4 text-givry-600"
              : ""
          } hover:text-givry-600 duration-200 capitalize`}
        >
          add wine
        </Link>
      )}

      <Link
        href="/wishlist"
        className={`${
          pathname === "/wishlist"
            ? "underline underline-offset-4 text-givry-600"
            : ""
        } hover:text-givry-600 duration-200 capitalize`}
      >
        wishlist
      </Link>
    </nav>
  );
};
export default Navigation;
