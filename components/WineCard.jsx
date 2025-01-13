import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";

const WineCard = ({ wine }) => {
  const {
    display_name,
    image,
    main_type,
    sub_type,
    aging,
    year,
    country,
    rating,
    _id,
  } = wine;

  return (
    <Link href={`/collection/${_id}`} className="group/item">
      <article className="rounded-lg border-2 border-givry-300 p-4 flex flex-col gap-2">
        <Image
          src={image}
          alt={display_name}
          width={0}
          height={0}
          className="w-full h-48 object-contain"
          sizes="100vw"
        />

        <div className="mt-4">
          <h2 className="capitalize text-lg font-bold text-givry-900 group-hover/item:text-givry-500 duration-200">
            {display_name}
          </h2>
          <p className="capitalize text-base font-semibold text-givry-700">
            {main_type} {sub_type}
          </p>
          <p className="capitalize text-sm text-givry-950">{aging}</p>
        </div>

        <p className="capitalize font-semibold text-givry-900">
          {country} &#45; {year}
        </p>

        <div className="flex gap-0.5">
          {Array.from({ length: rating }, (_, index) => (
            <FaStar key={index} className="text-givry-500" />
          ))}
        </div>
      </article>
    </Link>
  );
};
export default WineCard;
