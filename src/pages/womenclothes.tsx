import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

// Sample data
const womenClothesData = [
  { id: 1, image: "/images/women1.jpg", title: "Summer Dress", ageGroup: "Adults", country: "Zimbabwe", company: "Fashion Co", color: "Red", size: "M", price: 50 },
  { id: 2, image: "/images/women2.jpg", title: "Teen Hoodie", ageGroup: "Teenage", country: "Egypt", company: "Trendy Teens", color: "Blue", size: "L", price: 35 },
  { id: 3, image: "/images/women3.jpg", title: "Kids T-Shirt", ageGroup: "Kids", country: "Ghana", company: "Jet", color: "Green", size: "S", price: 20 },
  { id: 4, image: "/images/women4.jpg", title: "Evening Gown", ageGroup: "Adults", country: "Zimbabwe", company: "Fashion Co", color: "Black", size: "L", price: 150 },
  { id: 5, image: "/images/women5.jpg", title: "Casual Top", ageGroup: "Teenage", country: "Zimbabwe", company: "Trendy Teens", color: "Yellow", size: "M", price: 25 },
  { id: 6, image: "/images/women6.jpg", title: "Kids Dress", ageGroup: "Kids", country: "Egypt", company: "Jet", color: "Pink", size: "XS", price: 30 },
];

export default function WomenClothes() {
  const [ageGroup, setAgeGroup] = useState("All");
  const [country, setCountry] = useState("All");
  const [company, setCompany] = useState("All");
  const [color, setColor] = useState("All");
  const [size, setSize] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [cart, setCart] = useState([]); // your cart state
      const cartCount = cart.length;

  const filteredClothes = womenClothesData.filter((item) =>
    (ageGroup === "All" || item.ageGroup === ageGroup) &&
    (country === "All" || item.country === country) &&
    (company === "All" || item.company === company) &&
    (color === "All" || item.color === color) &&
    (size === "All" || item.size === size) &&
    item.price >= minPrice &&
    item.price <= maxPrice
  );

  return (
    <div>
      <Navbar cartCount={cartCount} />

      <div className="px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <aside className="bg-white shadow rounded-lg p-4">
          <h2 className="font-bold text-lg mb-4">Filters</h2>

          <label className="block mb-2">Age Group</label>
          <select className="w-full border rounded p-2 mb-4" value={ageGroup} onChange={e => setAgeGroup(e.target.value)}>
            <option>All</option>
            <option>Kids</option>
            <option>Teenage</option>
            <option>Adults</option>
          </select>

          <label className="block mb-2">Country</label>
          <select className="w-full border rounded p-2 mb-4" value={country} onChange={e => setCountry(e.target.value)}>
            <option>All</option>
            <option>Zimbabwe</option>
            <option>Egypt</option>
            <option>Ghana</option>
          </select>

          <label className="block mb-2">Company</label>
          <select className="w-full border rounded p-2 mb-4" value={company} onChange={e => setCompany(e.target.value)}>
            <option>All</option>
            <option>Fashion Co</option>
            <option>Trendy Teens</option>
            <option>Jet</option>
          </select>

          <label className="block mb-2">Color</label>
          <select className="w-full border rounded p-2 mb-4" value={color} onChange={e => setColor(e.target.value)}>
            <option>All</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Green</option>
            <option>Black</option>
            <option>Yellow</option>
            <option>Pink</option>
          </select>

          <label className="block mb-2">Size</label>
          <select className="w-full border rounded p-2 mb-4" value={size} onChange={e => setSize(e.target.value)}>
            <option>All</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>

          <label className="block mb-2">Price Range (USD)</label>
          <div className="flex gap-2 mb-4">
            <input type="number" placeholder="From" value={minPrice} onChange={e => setMinPrice(Number(e.target.value))} className="w-1/2 border rounded p-2" />
            <input type="number" placeholder="To" value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} className="w-1/2 border rounded p-2" />
          </div>
        </aside>

        {/* Clothes Grid */}
        <main className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClothes.map(item => (
            <div key={item.id} className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition cursor-pointer">
              <Image src={item.image} alt={item.title} width={300} height={200} className="rounded-md" />
              <h3 className="mt-2 font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm">👤 {item.ageGroup}</p>
              <p className="text-gray-600 text-sm">🌍 {item.country}</p>
              <p className="text-gray-600 text-sm">🏢 {item.company}</p>
              <p className="text-gray-600 text-sm">🎨 {item.color}</p>
              <p className="text-gray-600 text-sm">📏 {item.size}</p>
              <p className="mt-1 font-bold">USD {item.price}</p>
            </div>
          ))}
        </main>
      </div>

      <Footer />
    </div>
  );
}
