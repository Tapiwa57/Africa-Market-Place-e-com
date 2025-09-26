import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";
import { useState } from "react";
import Image from "next/image";

const KitchenGadgetData = [
  { id: 1, image: "/images/blender.jpg", title: "Blender", brand: "Philips", color: "White", price: 50 },
  { id: 2, image: "/images/microwave.jpg", title: "Microwave", brand: "Samsung", color: "Silver", price: 120 },
  { id: 3, image: "/images/toaster.jpg", title: "Toaster", brand: "Breville", color: "Black", price: 30 },
];

export default function KitchenGadget() {
  const [brand, setBrand] = useState("All");
  const [color, setColor] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200);
     const [cart, setCart] = useState([]); // your cart state
    const cartCount = cart.length;
  

  const filteredProducts = KitchenGadgetData.filter(product => 
    (brand === "All" || product.brand === brand) &&
    (color === "All" || product.color === color) &&
    product.price >= minPrice &&
    product.price <= maxPrice
  );

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <div className="px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <aside className="bg-white shadow rounded-lg p-4">
          <h2 className="font-bold text-lg mb-4">Filters</h2>

          {/* Brand */}
          <label className="block mb-2">Brand</label>
          <select className="w-full border rounded p-2 mb-4" value={brand} onChange={(e) => setBrand(e.target.value)}>
            <option>All</option>
            {[...new Set(KitchenGadgetData.map(p => p.brand))].map((b, i) => (
              <option key={i}>{b}</option>
            ))}
          </select>

          {/* Color */}
          <label className="block mb-2">Color</label>
          <select className="w-full border rounded p-2 mb-4" value={color} onChange={(e) => setColor(e.target.value)}>
            <option>All</option>
            {[...new Set(KitchenGadgetData.map(p => p.color))].map((c, i) => (
              <option key={i}>{c}</option>
            ))}
          </select>

          {/* Price Range */}
          <label className="block mb-2">Price Range (USD)</label>
          <div className="flex gap-2 mb-4">
            <input type="number" placeholder="From" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} className="w-1/2 border rounded p-2"/>
            <input type="number" placeholder="To" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-1/2 border rounded p-2"/>
          </div>
        </aside>

        {/* Products Grid */}
        <main className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition cursor-pointer">
              <Image src={product.image} alt={product.title} width={300} height={200} className="rounded-md"/>
              <h3 className="mt-2 font-semibold">{product.title}</h3>
              <p className="text-gray-600 text-sm">Brand: {product.brand}</p>
              <p className="text-gray-600 text-sm">Color: {product.color}</p>
              <p className="mt-1 font-bold">USD {product.price}</p>
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
}
