import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import CategoryCard from "@/components/CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";
import TestimonialCard from "@/components/Testimonials";

type Product = {
  id: number;
  title: string;
  price: number;
  type: string;
  country: string;
  company: string;
  image: string;
  quantity?: number;
};

export default function Home() {
  const [cartCount, setCartCount] = useState<number>(0);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsed: Product[] = JSON.parse(storedCart);
      const totalQty = parsed.reduce(
        (acc, item) => acc + (item.quantity || 1),
        0
      );
      setCartCount(totalQty);
    }

    const handler = () => {
      const updatedCart = localStorage.getItem("cart");
      if (updatedCart) {
        const parsed: Product[] = JSON.parse(updatedCart);
        const totalQty = parsed.reduce(
          (acc, item) => acc + (item.quantity || 1),
          0
        );
        setCartCount(totalQty);
      } else setCartCount(0);
    };

    window.addEventListener("cartUpdated", handler);
    return () => window.removeEventListener("cartUpdated", handler);
  }, []);

  const todayPick: Product[] = [
    {
      id: 1,
      title: "Mercedes Benz",
      price: 8000000,
      type: "Car",
      country: "Germany",
      company: "Mercedes",
      image: "/images/pexels-mikebirdy-120049.jpg",
    },
    {
      id: 2,
      title: "Men Sneakers",
      price: 18,
      type: "Shoes",
      country: "USA",
      company: "Nike",
      image: "/images/pexels-craytive-1478442.jpg",
    },
    {
      id: 3,
      title: "iPhone 15",
      price: 900,
      type: "Phone",
      country: "USA",
      company: "Apple",
      image: "/images/Iphone.png",
    },
    {
      id: 4,
      title: "HP i5 Laptop",
      price: 350,
      type: "Laptop",
      country: "USA",
      company: "HP",
      image: "/images/Laptop.png",
    },
    {
      id: 5,
      title: "Keyboard + Headset",
      price: 35,
      type: "Accessory",
      country: "China",
      company: "Logitech",
      image: "/images/keyboard.png",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      country: "South Africa",
      image: "/images/john.jpg",
      title: "A Wonderful Experience",
      message:
        "It's fast, reliable, and simple to buy and get delivery on time. Keep up the good work! I recommend the website to order goods around Africa for your loved ones.",
      rating: 5,
    },
    {
      name: "Sarah Smith",
      country: "Nigeria",
      image: "/images/sarah.jpg",
      title: "Great Service",
      message:
        "Amazing customer support and fast delivery. I’ll definitely use it again.",
      rating: 5,
    },
    {
      name: "James Lee",
      country: "Kenya",
      image: "/images/james.jpg",
      title: "Highly Recommended",
      message:
        "The platform is easy to use, safe, and convenient. Excellent service!",
      rating: 5,
    },
  ];

  const addToCart = (product: Product) => {
    const storedCart = localStorage.getItem("cart");
    const cart: Product[] = storedCart ? JSON.parse(storedCart) : [];

    const existing = cart.find((p) => p.id === product.id);
    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Immediately update cart count for Navbar
    const totalQty = cart.reduce(
      (acc, item) => acc + (item.quantity || 1),
      0
    );
    setCartCount(totalQty);

    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div>
      <Navbar cartCount={cartCount} />

      <main className="px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Welcome to Africa Market</h1>
        <p className="text-gray-600">Shop products across Africa with ease.</p>
      </main>

      {/* Today Pick Section */}
      <section className="bg-gray-200 py-10 px-4">
        <h2 className="text-2xl font-bold mb-6">Today Pick</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}
          className="pb-10"
        >
          {todayPick.map((product) => (
            <SwiperSlide key={product.id}>
              <div
                onClick={() => addToCart(product)}
                className="bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-lg transition"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={150}
                />
                <p className="mt-2 font-semibold">${product.price}</p>
                <p className="text-sm text-gray-600">{product.title}</p>
                <p className="text-xs text-gray-500">
                  {product.type} | {product.country}
                </p>
                <p className="text-xs text-gray-500">
                  Company: {product.company}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-200 px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">OFFERED ON AFRICA MARKET</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <CategoryCard
            image="/images/pexels-oandremoura-2562992.jpg"
            title="Shoes"
          />
          <CategoryCard
            image="/images/pexels-tomfisk-10034078.jpg"
            title="Motor Vehicles"
          />
          <CategoryCard
            image="/images/pexels-borevina-1778412.jpg"
            title="Women Clothes"
          />
          <CategoryCard
            image="/images/pexels-shkrabaanthony-5264914.jpg"
            title="Men Clothes"
          />
          <CategoryCard
            image="/images/pexels-fotios-photos-1271940.jpg"
            title="Kitchen Gadget"
          />
          <CategoryCard
            image="/images/pexels-ola-dapo-1754561-3345882.jpg"
            title="Business Electronics"
          />
          <CategoryCard
            image="/images/pexels-atahandemir-33888373.jpg"
            title="Gaming Electronics"
          />
          <CategoryCard
            image="/images/pexels-pixabay-270257.jpg"
            title="Mobile Phones"
          />
          <CategoryCard
            image="/images/pexels-pixabay-264636.jpg"
            title="Groceries & Corporates"
          />
          <CategoryCard
            image="/images/pexels-asphotograpy-94843.jpg"
            title="Jewelry & Watches"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black text-white py-12 px-4 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Testimonials: Trusted <br /> by Our Client
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
