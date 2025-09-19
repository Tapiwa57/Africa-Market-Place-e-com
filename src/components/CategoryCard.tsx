import Image from "next/image";

type CategoryCardProps = {
  title: string;
  image: string;
  price?: string; // 👈 make price optional
};

export default function CategoryCard({ title, image, price }: CategoryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex-shrink-0">
      <Image className="h-60" src={image} alt={title} width={400} height={150} />
      {price && <p className="mt-2 font-semibold">{price}</p>}
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
}
