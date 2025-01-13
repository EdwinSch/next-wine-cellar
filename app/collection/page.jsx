import wineCollection from "@/winecollection.json";
import WineCard from "@/components/WineCard";

const CollectionPage = () => {
  return (
    <div
      id="layout-container"
      className="mx-auto max-w-7xl px-4 sm:px-8 inspect"
    >
      {wineCollection.length === 0 ? (
        <p>No items found</p>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wineCollection.map((wine, idx) => {
            return <WineCard key={idx} wine={wine} />;
          })}
        </section>
      )}
    </div>
  );
};
export default CollectionPage;
