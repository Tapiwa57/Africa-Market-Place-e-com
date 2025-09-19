import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import CategoryCard from "@/components/CategoryCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Home() {
  const testimonials = [
  {
    name: "Takudzwa Mudzimwa",
    country: "Zimbabwean",
    image: "/takudzwa.jpg",
  },
  {
    name: "Roshly Kamble",
    country: "Egypt",
    image: "/roshly.jpg",
  },
  {
    name: "Daniel M.",
    country: "Nigeria",
    image: "/daniel.jpg",
  },
];
  return (
    <div>
      <Navbar />
      {/* Main Welcome Message */}
      <main className="px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Welcome to Africa Market</h1>
        <p className="text-gray-600">Shop products across Africa with ease.</p>
      </main>
      {/* Hero Section */}
      <section className="bg-gray-200 py-10 px-4">
        <h2 className="text-2xl font-bold mb-6">Today Pick</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-10"
        >
          {/* Card 1 */}
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow p-4">
              <Image src="/images/pexels-mikebirdy-120049.jpg" alt="Car" width={400} height={150} />
              <p className="mt-2 font-semibold">8 Million</p>
              <p className="text-sm text-gray-600">Mercedes Benz</p>
            </div>
          </SwiperSlide>

          {/* Card 2 */}
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow p-4">
              <Image className="h-40" src="/images/pexels-craytive-1478442.jpg" alt="Shoes" width={400} height={150} />
              <p className="mt-2 font-semibold">USD18.00</p>
              <p className="text-sm text-gray-600">Men Sneakers</p>
            </div>
          </SwiperSlide>

          {/* Card 3 */}
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow p-4">
              <Image src="/images/Iphone.png" alt="iPhones" width={200} height={150} />
              <p className="mt-2 font-semibold">USD 900+</p>
              <p className="text-sm text-gray-600">iPhone 13 / 14 / 15</p>
            </div>
          </SwiperSlide>

          {/* Card 4 */}
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow p-4">
              <Image src="/images/Laptop.png" alt="Laptop" width={200} height={150} />
              <p className="mt-2 font-semibold">USD350</p>
              <p className="text-sm text-gray-600">HP i5 8GB RAM</p>
            </div>
          </SwiperSlide>

          {/* Card 5 */}
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow p-4">
              <Image src="/images/keyboard.png" alt="Accessories" width={200} height={150} />
              <p className="mt-2 font-semibold">USD $35.00</p>
              <p className="text-sm text-gray-600">Keyboard + Headset</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* Offered Section */}
<section className="bg-gray-200 px-6 py-10">
  <h2 className="text-2xl font-bold mb-6">OFFERED ON AFRICA MARKET</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    
    {/* Category Cards */}
    <CategoryCard image="/images/pexels-oandremoura-2562992.jpg" title="Shoes" />
    <CategoryCard image="/images/pexels-tomfisk-10034078.jpg" title="Motor vehicles" />
    <CategoryCard image="/images/pexels-borevina-1778412.jpg" title="Women clothes" />
    <CategoryCard image="/images/pexels-shkrabaanthony-5264914.jpg" title="Men clothes" />
    <CategoryCard image="/images/pexels-fotios-photos-1271940.jpg" title="Kitchen gadget" />
    <CategoryCard image="/images/pexels-ola-dapo-1754561-3345882.jpg" title="Business electronics" />
    <CategoryCard image="/images/pexels-atahandemir-33888373.jpg" title="Gaming electronics" />
    <CategoryCard image="/images/pexels-pixabay-270257.jpg" title="Mobile phones" />
    <CategoryCard image="/images/pexels-pixabay-264636.jpg" title="Groceries & Corporates" />
    <CategoryCard image="/images/pexels-asphotograpy-94843.jpg" title="Jewelry & Watches" />

  </div>
</section>
<section className="bg-black text-white py-12 px-4 md:px-16">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
    Testimonials: Trusted <br /> by Our Client
  </h2>

  <div className="grid gap-6 md:grid-cols-3">
    {testimonials.map((t, i) => (
      <div
        key={i}
        className="bg-gray-900 rounded-lg p-6 shadow hover:shadow-lg transition"
      >
        {/* Stars */}
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl mr-1">★</span>
          ))}
          <span className="ml-auto text-white font-medium">5.0</span>
        </div>

        {/* Title & Content */}
        <h3 className="text-lg font-semibold mb-2">A Wonderful Experience</h3>
        <p className="text-sm text-gray-300">
          It's fast, reliable, and simple to buy and get delivery on time. Keep up the good work!
          I recommend the website to order goods around Africa for your loved ones.
        </p>

        {/* User Info */}
        <div className="flex items-center mt-4">
          <img
            src={t.image}
            alt={t.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-bold text-sm">{t.name}</p>
            <p className="text-xs text-gray-400">{t.country}</p>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Pagination dots (mock static) */}
  <div className="flex justify-center mt-6 space-x-2">
    <div className="w-4 h-2 bg-white rounded-full"></div>
    <div className="w-4 h-2 bg-white opacity-50 rounded-full"></div>
    <div className="w-4 h-2 bg-white opacity-50 rounded-full"></div>
  </div>
</section>
 <Footer />
    </div>
  );
}
