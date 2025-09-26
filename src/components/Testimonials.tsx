import Image from "next/image";

type TestimonialCardProps = {
  name: string;
  country: string;
  image: string;
  title: string;
  message: string;
  rating?: number;
};

export default function TestimonialCard({
  name,
  country,
  image,
  title,
  message,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 shadow hover:shadow-lg transition">
      {/* Rating */}
      <div className="flex items-center mb-2">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xl mr-1">★</span>
        ))}
        <span className="ml-auto text-white font-medium">{rating}.0</span>
      </div>

      {/* Title + Message */}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{message}</p>

      {/* Profile */}
      <div className="flex items-center mt-4">
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full mr-3 object-cover"
        />
        <div>
          <p className="font-bold text-sm">{name}</p>
          <p className="text-xs text-gray-400">{country}</p>
        </div>
      </div>
    </div>
  );
}
