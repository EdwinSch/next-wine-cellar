const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-givry-800">
      <p className="mx-auto max-w-7xl text-center px-4 py-4 sm:px-8 text-givry-300 font-semibold">
        &copy; {year} WineCellar
      </p>
    </footer>
  );
};
export default Footer;
