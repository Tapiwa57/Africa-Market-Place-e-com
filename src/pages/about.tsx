import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaWhatsapp, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

function FadeInSection({ children, animation = "fade-in-up" }: { children: React.ReactNode; animation?: string }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`${inView ? `animate-${animation}` : "opacity-0"}`}
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/earth-view.png"
          alt="Earth from Space"
          fill
          className="object-cover brightness-75 animate-pulse"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white animate-fade-in">
            About Us
          </h1>
          <p className="mt-2 text-gray-300 animate-fade-in-up">Home</p>
        </div>
      </section>

      {/* About Payment Section */}
      <FadeInSection>
        <section className="px-6 py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="bg-gray-900 p-6 rounded-lg md:w-1/2 relative transition transform hover:scale-105 hover:shadow-xl">
            <span className="absolute top-4 right-4 bg-white text-black text-sm px-3 py-1 rounded-full font-semibold shadow animate-bounce">
              5+ Years Experience
            </span>
            <h3 className="text-sm mb-2 text-white">About Payment</h3>
            <h2 className="text-2xl font-bold mb-4 text-white">
              Empowering E-commerce Trading
            </h2>
            <p className="text-white leading-relaxed">
              In the rapidly evolving world of e-commerce, having seamless
              payment solutions is crucial. Our team of payment experts is here
              to provide you with top-notch services. Whether you’re a small
              online store or a global e-commerce giant, we’ve got your
              transactions covered. Trust us with your payments, and focus on
              growing your business.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/shopping-cart.png"
              alt="Shopping cart"
              width={500}
              height={300}
              className="rounded-lg transition transform hover:scale-105"
            />
          </div>
        </section>
      </FadeInSection>

      {/* Stats Section */}
      <FadeInSection>
        <section className="py-12 grid grid-cols-3 text-center gap-6">
          <div className="hover:scale-110 transition">
            <h3 className="text-2xl font-bold text-white animate-pulse">50k+</h3>
            <p className="text-gray-400">Happy client</p>
          </div>
          <div className="hover:scale-110 transition">
            <h3 className="text-2xl font-bold text-white animate-pulse">500+</h3>
            <p className="text-gray-400">Merchant Active</p>
          </div>
          <div className="hover:scale-110 transition">
            <h3 className="text-2xl font-bold text-white animate-pulse">30+</h3>
            <p className="text-gray-400">Countries Served</p>
          </div>
        </section>
      </FadeInSection>

      {/* Why Choose Us */}
      <FadeInSection>
        <section className="px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-2 text-white">Why Choose Us</h2>
          <p className="text-gray-400 mb-10">
            Elevate Your E-commerce Trading Experience
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Security", text: "We prioritize the safety of your customer’s data and make sure you get the services you deserve." },
              { title: "Scalability", text: "Our payment solutions ensure data security to industry standards." },
              { title: "Support", text: "Our dedicated support team is available around the clock to assist you with any issues." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-900 p-6 rounded-lg transition transform hover:scale-105 hover:shadow-xl"
              >
                <h3 className="font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* How It Works */}
      <FadeInSection>
        <section className="px-6 py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <Image
              src="/images/workspace.png"
              alt="Workspace"
              width={500}
              height={350}
              className="rounded-lg transition transform hover:scale-105"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-sm text-gray-400 mb-2">How It Works</h3>
            <h2 className="text-2xl font-bold mb-6 text-white">
              Use only with 4 easy steps
            </h2>
            <ol className="space-y-4 text-gray-300">
              <li><span className="font-bold">1. Sign Up and Create Account</span> – Begin your journey by registering and setting your account.</li>
              <li><span className="font-bold">2. Choose product you want</span> – Select from chosen supplier, split carts by country, and set delivery date.</li>
              <li><span className="font-bold">3. Start Accepting Payments</span> – Once set, you’re ready to start accepting payments.</li>
              <li><span className="font-bold">4. Real Time Notification</span> – Stay informed with instant updates on successful transactions.</li>
            </ol>
            <button className="mt-6 px-6 py-2 bg-white text-black rounded-lg font-semibold transition hover:bg-gray-300 hover:scale-105">
              Get Started
            </button>
          </div>
        </section>
      </FadeInSection>

      {/* Social Media Section */}
      <FadeInSection>
        <section className="px-6 py-12 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-white">Follow Us On</h3>
          <div className="flex items-center justify-center gap-8 text-3xl">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="hover:text-green-500 transition text-white transform hover:scale-125" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="hover:text-blue-400 transition text-white transform hover:scale-125" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500 transition text-white transform hover:scale-125" />
            </a>
          </div>
        </section>
      </FadeInSection>

      {/* Newsletter Section */}
      <FadeInSection>
        <section className="px-6 py-16 text-center">
          <h3 className="text-gray-400 mb-2">Our Newsletter</h3>
          <h2 className="text-2xl font-bold mb-6 text-white">
            Subscribe to Our newsletter to Get Updates on Our Latest Offers
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter email"
              className="px-4 py-2 rounded-lg text-black w-64 focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-2 bg-white text-black rounded-lg font-semibold transition hover:bg-gray-200 hover:scale-105">
              Subscribe
            </button>
          </div>
        </section>
      </FadeInSection>

      <Footer />
    </div>
  );
}
