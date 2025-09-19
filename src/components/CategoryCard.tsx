import Image from "next/image";

type CategoryCardProps = {
  title: string;
  image: string;
  price?: string; // 👈 price is optional
};

export default function CategoryCard({ title, image, price }: CategoryCardProps) {
  return (
    <div
      className="bg-white rounded-lg shadow p-4 flex-shrink-0 cursor-pointer 
                 transform transition duration-300 ease-in-out 
                 hover:scale-105 hover:shadow-xl active:scale-95"
    >
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-md"
        />
      </div>
      {price && <p className="mt-2 font-semibold text-gray-800">{price}</p>}
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
}
