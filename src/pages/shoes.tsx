import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import Image from "next/image";

const shoesData = [
  { id: 1, image: "/images/pexels-mnzoutfits-1598505.jpg", title: "Running Sneakers", price: 20, gender: "Men", country: "Zimbabwe", company: "Mr Price" },
  { id: 2, image: "/images/pexels-monicore-134064.jpg", title: "High Heels", price: 35, gender: "Women", country: "Egypt", company: "Truworths" },
  { id: 3, image:"/images/shoes/pexels-melvin-buezo-1253763-2529158.jpg", title: "Tennis", price: 15, gender: "Kids", country: "Ghana", company: "Jet" },
  { id: 4, image: "/images/shoes/pexels-athul-adhu-186900-684152.jpg", title: "Running Sneakers", price: 150, gender: "Kids", country: "Zimbabwe", company: "Jet" },
   { id: 5, image: "/images/shoes/pexels-frans-van-heerden-201846-847371.jpg", title: "Tennis", price: 215, gender: "Kids", country: "Zimbabwe", company: "Jet" },
    { id: 6, image: "/images/shoes/pexels-micaasato-1580267.jpg", title: "Tennis", price: 215, gender: "Kids", country: "Zimbabwe", company: "Jet" },
];

export default function Shoes() {
  const [gender, setGender] = useState("All");
  const [country, setCountry] = useState("All");
  const [company, setCompany] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
const [maxPrice, setMaxPrice] = useState(2000);
 const filteredShoes = shoesData.filter((shoe) => {
  return (
    (gender === "All" || shoe.gender === gender) &&
    (country === "All" || shoe.country === country) &&
    (company === "All" || shoe.company === company) &&
    shoe.price >= minPrice &&
    shoe.price <= maxPrice
  );
});

  return (
    <div>
      <Navbar />
      <div className="px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <aside className="bg-white shadow rounded-lg p-4">
          <h2 className="font-bold text-lg mb-4">Filters</h2>

          {/* Gender */}
          <label className="block mb-2">Gender</label>
          <select className="w-full border rounded p-2 mb-4" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option>All</option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>

          {/* Country */}
          <label className="block mb-2">Country</label>
          <select className="w-full border rounded p-2 mb-4" value={country} onChange={(e) => setCountry(e.target.value)}>
            <option>All</option>
            <option>Zimbabwe</option>
            <option>Egypt</option>
            <option>Ghana</option>
          </select>

          {/* Company */}
          <label className="block mb-2">Company</label>
          <select className="w-full border rounded p-2 mb-4" value={company} onChange={(e) => setCompany(e.target.value)}>
            <option>All</option>
            <option>Mr Price</option>
            <option>Truworths</option>
            <option>Jet</option>
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

        {/* Shoes Grid */}
        <main className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShoes.map((shoe) => (
            <div key={shoe.id} className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition">
              <Image src={shoe.image} alt={shoe.title} width={300} height={200} className="rounded-md" />
              <h3 className="mt-2 font-semibold">{shoe.title}</h3>
              <p className="text-gray-600 text-sm">👤 {shoe.gender}</p>
              <p className="text-gray-600 text-sm">🌍 {shoe.country}</p>
              <p className="text-gray-600 text-sm">🏢 {shoe.company}</p>
              <p className="mt-1 font-bold">USD {shoe.price}</p>
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
}
