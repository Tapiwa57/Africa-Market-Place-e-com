import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CountryPage() {
  const router = useRouter();
  const { country } = router.query;

  if (!country) return null; // Prevent crash during SSR

  // Display products/info based on country
  return (
    <div>
      <Navbar />
      <main className="px-6 py-12">
        <h1 className="text-2xl font-bold mb-4 capitalize">
          {country} Market
        </h1>
        <p className="text-gray-600">
          Explore products and offers available in {country}.
        </p>
      </main>
      <Footer />
    </div>
  );
}
