// components/ShoeCard.tsx
import Image from "next/image";
import Link from "next/link";

interface ShoeCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  gender: string;
  country: string;
  company: string;
}

export default function ShoeCard({
  id,
  image,
  title,
  price,
  gender,
  country,
  company,
}: ShoeCardProps) {
  return (
    <Link href={`/shoes?id=${id}`}>
      <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition cursor-pointer">
        <Image  src={image} alt={title} width={300} height={200} className="rounded-md h-200" />
        <h3 className="mt-2 font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm">👤 {gender}</p>
        <p className="text-gray-600 text-sm">🌍 {country}</p>
        <p className="text-gray-600 text-sm">🏢 {company}</p>
        <p className="mt-1 font-bold">USD {price.toFixed(2)}</p>
      </div>
    </Link>
  );
}
