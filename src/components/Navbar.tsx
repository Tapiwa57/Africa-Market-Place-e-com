import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

type NavbarProps = {
  cartCount?: number;
};

export default function Navbar({ cartCount = 0 }: NavbarProps) {
  const [count, setCount] = useState(cartCount);
  const [open, setOpen] = useState(false);

  const countries = ["zimbabwe", "southafrica", "nigeria", "kenya", "egypt"];

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCount(JSON.parse(storedCart).length);

    const handleCartUpdate = () => {
      const updatedCart = localStorage.getItem("cart");
      setCount(updatedCart ? JSON.parse(updatedCart).length : 0);
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow bg-white relative">
      {/* Logo */}
      <Link href="/">
      <div className="flex items-center space-x-2">
        <Image src="/images/Logo.svg" alt="Africa Market" className="h-12 w-12" />
        <span className="font-bold text-1xl">Africa Market place</span>
      </div>
      </Link>

      {/* Links */}
      <div className="hidden md:flex space-x-6 font-medium items-center">
        <Link href="/">Home</Link>
        <Link href="/categories">Categories</Link>
        <Link href="/about">About Us</Link>

        {/* Country Dropdown */}
        <div className="relative">
          <button onClick={() => setOpen(!open)} className="hover:text-blue-600">
            Country ▾
          </button>
          {open && (
            <div className="absolute mt-2 bg-white shadow-lg rounded w-40 z-50">
              {countries.map((c) => (
                <Link
                  key={c}
                  href={`/country/${c}`}
                  className="block px-4 py-2 hover:bg-gray-100 capitalize"
                >
                  {c}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4 relative">
        <Link href="/CartPage">
          <div className="relative cursor-pointer">
            <ShoppingCart className="w-6 h-6" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </div>
        </Link>
        <Link href="/auth" className="text-sm hover:underline">
          Sign Up / Sign In
        </Link>
      </div>
    </nav>
  );
}
