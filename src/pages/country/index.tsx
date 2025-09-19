import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CountryIndex() {
  const countries = ["zimbabwe", "southafrica", "nigeria", "kenya", "egypt"];

  return (
    <div>
      <Navbar />
      <main className="px-6 py-12">
        <h1 className="text-2xl font-bold mb-6">Select a Country</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {countries.map((c) => (
            <Link
              key={c}
              href={`/country/${c}`}
              className="border rounded-lg p-4 text-center hover:bg-gray-100 capitalize"
            >
              {c}
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
