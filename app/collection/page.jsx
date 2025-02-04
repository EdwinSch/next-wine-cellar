import wineCollection from "@/winecollection.json";
import WineCard from "@/components/WineCard";

const CollectionPage = () => {
  return (
    <div id="layout-container" className="mx-auto max-w-7xl px-4 sm:px-8">
      {wineCollection.length === 0 ? (
        <p>No items found</p>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wineCollection.map((wine) => {
            return <WineCard key={wine._id} wine={wine} />;
          })}
        </section>
      )}
    </div>
  );
};
export default CollectionPage;
