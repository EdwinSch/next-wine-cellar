import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className="max-w-xl border border-givry-800 mx-auto flex flex-col items-center gap-2 p-4">
      <FaExclamationTriangle className="text-4xl text-givry-800" />
      <p className="font-bold text-xl uppercase">Page not found</p>
      <p>The page you are looking for does not seem to exist.</p>

      <Link
        href={"/"}
        className="mt-6 capitalize px-4 py-3 font-semibold bg-givry-950 text-white hover:bg-givry-600 duration-200 rounded-lg text-center"
      >
        Back to home
      </Link>
    </section>
  );
};
export default NotFoundPage;
