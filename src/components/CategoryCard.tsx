import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  title: string;
  image: string;
  price?: string;
};

const categoryLinks: Record<string, string> = {
  "Motor Vehicles": "/motorvehicles",
  "Women Clothes": "/womenclothes",
  "Men Clothes": "/menclothes",
  "Electronics": "/electronics",
  "Shoes": "/shoes",
  "Kitchen Gadget": "/kitchengadget",
  "Business Electronics": "/businesselectronics",
  "Gaming Electronics": "/gamingelectronics",
  "Mobile Phones": "/mobilephones",
  "Groceries & Corporates": "/groceriescorporates",
  "Jewelry & Watches": "/jewelrywatches",
};

export default function CategoryCard({ title, image, price }: CategoryCardProps) {
  const normalizedTitle = title
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const link =
    categoryLinks[normalizedTitle] ||
    `/${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <Link href={link}>
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
    </Link>
  );
}
