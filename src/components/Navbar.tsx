import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const countries = [
    "zimbabwe",
    "southafrica",
    "nigeria",
    "kenya",
    "egypt",
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow bg-white relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/images/Logo.svg" alt="Africa Market" className="h-12 w-12" />
        <span className="font-bold text-1xl">Africa Market place</span>
      </div>

      {/* Links */}
      <div className="hidden md:flex space-x-6 font-medium items-center">
        <Link href="/">Home</Link>
        <Link href="/categories">Categories</Link>
        <Link href="/about">About Us</Link>

        {/* Country Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="hover:text-blue-600"
          >
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
      <div className="flex items-center space-x-4">
        <Link href="/CartPage">
        <ShoppingCart className="w-6 h-6 cursor-pointer" />
        </Link>
        <Link href="/auth" className="text-sm hover:underline">
          Sign Up / Sign In
        </Link>
      </div>
    </nav>
  );
}
