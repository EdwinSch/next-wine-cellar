const Searchbar = () => {
  return (
    <form
      id="layout-container"
      className="mx-auto max-w-7xl py-8 px-4 sm:px-28 flex"
    >
      <label htmlFor="name" className="sr-only">
        Name
      </label>
      <input
        type="text"
        id="name"
        // value={location}
        // onChange={(event) => setLocation(event.target.value)}
        placeholder="Search wine by name"
        className="border border-solid border-givry-900 w-full px-4 py-3 rounded-l-lg bg-transparant text-givry-950"
      />

      <button
        type="submit"
        className="px-6 font-semibold bg-givry-950 text-white hover:bg-givry-600 duration-200 rounded-r-lg flex gap-2 items-center"
      >
        Search
      </button>
    </form>
  );
};
export default Searchbar;
