import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import Image from "next/image";

// Sample vehicle data
const MotorvehiclesData = [
  { id: 1, image: "/images/pexels-mnzoutfits-1598505.jpg", title: "Toyota Corolla", model: "Corolla", year: 2018, color: "Red", price: 8000 },
  { id: 2, image: "/images/pexels-craytive-1478442.jpg", title: "Mercedes Benz", model: "GLC", year: 2020, color: "Black", price: 15000 },
  { id: 3, image: "/images/shoes/pexels-melvin-buezo-1253763-2529158.jpg", title: "Honda Civic", model: "Civic", year: 2019, color: "White", price: 9000 },
  { id: 4, image: "/images/shoes/pexels-athul-adhu-186900-684152.jpg", title: "Ford Ranger", model: "Ranger", year: 2021, color: "Blue", price: 12000 },
  { id: 5, image: "/images/shoes/pexels-frans-van-heerden-201846-847371.jpg", title: "BMW X5", model: "X5", year: 2022, color: "Gray", price: 20000 },
  { id: 6, image: "/images/shoes/pexels-micaasato-1580267.jpg", title: "Toyota Hilux", model: "Hilux", year: 2020, color: "White", price: 14000 },
];

export default function Motorvehicles() {
  const [model, setModel] = useState("All");
  const [year, setYear] = useState("All");
  const [color, setColor] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20000);
   const [cart, setCart] = useState([]); // your cart state
      const cartCount = cart.length;


  // Filter vehicles
  const filteredVehicles = MotorvehiclesData.filter(vehicle => {
    return (
      (model === "All" || vehicle.model === model) &&
      (year === "All" || vehicle.year.toString() === year) &&
      (color === "All" || vehicle.color === color) &&
      vehicle.price >= minPrice &&
      vehicle.price <= maxPrice
    );
  });

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <div className="px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <aside className="bg-white shadow rounded-lg p-4">
          <h2 className="font-bold text-lg mb-4">Filters</h2>

          {/* Model */}
          <label className="block mb-2">Model</label>
          <select className="w-full border rounded p-2 mb-4" value={model} onChange={(e) => setModel(e.target.value)}>
            <option>All</option>
            {[...new Set(MotorvehiclesData.map(v => v.model))].map((m, i) => (
              <option key={i}>{m}</option>
            ))}
          </select>

          {/* Year */}
          <label className="block mb-2">Year</label>
          <select className="w-full border rounded p-2 mb-4" value={year} onChange={(e) => setYear(e.target.value)}>
            <option>All</option>
            {[...new Set(MotorvehiclesData.map(v => v.year))].map((y, i) => (
              <option key={i}>{y}</option>
            ))}
          </select>

          {/* Color */}
          <label className="block mb-2">Color</label>
          <select className="w-full border rounded p-2 mb-4" value={color} onChange={(e) => setColor(e.target.value)}>
            <option>All</option>
            {[...new Set(MotorvehiclesData.map(v => v.color))].map((c, i) => (
              <option key={i}>{c}</option>
            ))}
          </select>

          {/* Price Range */}
          <label className="block mb-2">Price Range (USD)</label>
          <div className="flex gap-2 mb-4">
            <input
              type="number"
              placeholder="From"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-1/2 border rounded p-2"
            />
            <input
              type="number"
              placeholder="To"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-1/2 border rounded p-2"
            />
          </div>
        </aside>

        {/* Vehicles Grid */}
        <main className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map(vehicle => (
            <div key={vehicle.id} className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition cursor-pointer">
              <Image src={vehicle.image} alt={vehicle.title} width={300} height={200} className="rounded-md" />
              <h3 className="mt-2 font-semibold">{vehicle.title}</h3>
              <p className="text-gray-600 text-sm">Model: {vehicle.model}</p>
              <p className="text-gray-600 text-sm">Year: {vehicle.year}</p>
              <p className="text-gray-600 text-sm">Color: {vehicle.color}</p>
              <p className="mt-1 font-bold">USD {vehicle.price}</p>
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
}
