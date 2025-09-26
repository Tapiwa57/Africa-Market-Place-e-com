import Image from "next/image";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  type: string;
  country: string;
  company: string;
  image: string;
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated")); // Update Navbar
  }, [cart]);

  const increaseQty = (id: number) =>
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
    );

  const decreaseQty = (id: number) =>
    setCart((prev) =>
      prev.map((p) =>
        p.id === id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
      )
    );

  const removeItem = (id: number) => setCart((prev) => prev.filter((p) => p.id !== id));

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow bg-white">
        <Link href="/" className="font-bold text-xl">
          Africa Market Place
        </Link>
      </nav>

      <div className="text-center my-8">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        <p className="text-gray-500">Home / Cart</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto px-6">
        {/* Cart Items */}
        <div className="flex-1 bg-white shadow-md rounded-lg overflow-hidden">
          {cart.length === 0 ? (
            <p className="p-4 text-center text-gray-500">Your cart is empty</p>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead className="bg-black text-white">
                <tr>
                  <th className="p-4">Product</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-4 flex flex-col md:flex-row items-start md:items-center gap-3">
                      <button
                        className="text-red-500 font-bold"
                        onClick={() => removeItem(item.id)}
                      >
                        X
                      </button>
                      <Image src={item.image} alt={item.title} width={50} height={50} />
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-xs text-gray-500">
                          {item.type} | {item.country} | {item.company}
                        </p>
                      </div>
                    </td>
                    <td className="p-4">${item.price.toFixed(2)}</td>
                    <td className="p-4 flex items-center gap-2">
                      <button
                        className="px-2 border hover:bg-gray-100"
                        onClick={() => decreaseQty(item.id)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="px-2 border hover:bg-gray-100"
                        onClick={() => increaseQty(item.id)}
                      >
                        +
                      </button>
                    </td>
                    <td className="p-4">${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-80 bg-white shadow-md rounded-lg p-6">
          <h3 className="font-bold mb-4">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Items</span>
              <span>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between text-red-500">
              <span>Coupon Discount</span>
              <span>-$0.00</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full mt-4 bg-black text-white py-2 rounded hover:bg-gray-800">
            Proceed Check out
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
