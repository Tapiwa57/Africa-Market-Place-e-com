import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";


export default function Categories() {
  return (
    <div>
      <Navbar />
      <main className="px-6 py-12">
        <h1 className="text-2xl font-bold mb-4">Categories</h1>
        <p className="text-gray-600">Explore our product categories.</p>
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
      </main>
      <Footer />
    </div>
  );
}
