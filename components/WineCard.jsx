import Image from "next/image";
import Link from "next/link";

const WineCard = ({ wine }) => {
  const { display_name, image } = wine;

  return (
    <article className="rounded-lg border border-givry-500">
      <Image
        src={image}
        alt={display_name}
        width={0}
        height={0}
        className="w-full h-56 object-contain"
        sizes="100vw"
      />
      {display_name}
    </article>
  );
};
export default WineCard;
