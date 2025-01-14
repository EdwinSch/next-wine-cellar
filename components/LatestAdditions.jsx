import Link from "next/link";
import wineCollection from "@/winecollection.json";
import WineCard from "./WineCard";

const LatestAdditions = () => {
  const recents = wineCollection.slice(0, 3);

  return (
    <section className="mx-auto mt-14 max-w-7xl px-4 sm:px-8 flex flex-col items-center gap-10">
      <h2 className="text-givry-900 text-2xl font-semibold">
        Latest Additions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:w-auto">
        {recents.map((wine) => {
          return <WineCard key={wine._id} wine={wine} />;
        })}
      </div>

      <Link
        href={"/collection"}
        className="w-full md:w-2/5 block capitalize px-4 py-3 font-semibold bg-givry-950 text-white hover:bg-givry-600 duration-200 rounded-lg text-center"
        aria-label="button"
      >
        View full collection
      </Link>
    </section>
  );
};
export default LatestAdditions;
