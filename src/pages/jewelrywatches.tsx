import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";
import { useState } from "react";
import Image from "next/image";

const JewelryData = [
  { id: 1, image: "/images/necklace.jpg", title: "Gold Necklace", brand: "LuxuryGold", type: "Necklace", price: 250 },
  { id: 2, image: "/images/watch.jpg", title: "Men Watch", brand: "Rolex", type: "Watch", price: 1200 },
  { id: 3, image: "/images/bracelet.jpg", title: "Silver Bracelet", brand: "SilverLine", type: "Bracelet", price: 80 },
];

export default function JewelryWatches() {
  const [brand, setBrand] = useState("All");
  const [type, setType] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
    const [cart, setCart] = useState([]); // your cart state
  const cartCount = cart.length;

  const filteredProducts = JewelryData.filter(product =>
    (brand === "All" || product.brand === brand) &&
    (type === "All" || product.type === type) &&
    product.price >= minPrice &&
    product.price <= maxPrice
  );

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <div className="px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="bg-white shadow rounded-lg p-4">
          <h2 className="font-bold text-lg mb-4">Filters</h2>
          <label className="block mb-2">Brand</label>
          <select className="w-full border rounded p-2 mb-4" value={brand} onChange={(e)=>setBrand(e.target.value)}>
            <option>All</option>
            {[...new Set(JewelryData.map(p=>p.brand))].map((b,i)=><option key={i}>{b}</option>)}
          </select>

          <label className="block mb-2">Type</label>
          <select className="w-full border rounded p-2 mb-4" value={type} onChange={(e)=>setType(e.target.value)}>
            <option>All</option>
            {[...new Set(JewelryData.map(p=>p.type))].map((t,i)=><option key={i}>{t}</option>)}
          </select>

          <label className="block mb-2">Price Range (USD)</label>
          <div className="flex gap-2 mb-4">
            <input type="number" placeholder="From" value={minPrice} onChange={(e)=>setMinPrice(Number(e.target.value))} className="w-1/2 border rounded p-2"/>
            <input type="number" placeholder="To" value={maxPrice} onChange={(e)=>setMaxPrice(Number(e.target.value))} className="w-1/2 border rounded p-2"/>
          </div>
        </aside>

        <main className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(p=>(
            <div key={p.id} className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition cursor-pointer">
              <Image src={p.image} alt={p.title} width={300} height={200} className="rounded-md"/>
              <h3 className="mt-2 font-semibold">{p.title}</h3>
              <p className="text-gray-600 text-sm">Brand: {p.brand}</p>
              <p className="text-gray-600 text-sm">Type: {p.type}</p>
              <p className="mt-1 font-bold">USD {p.price}</p>
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
}
