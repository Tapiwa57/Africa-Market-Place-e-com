import Image from "next/image";
import { FaCreditCard, FaHeadset } from "react-icons/fa";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-gray-400 text-white flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-2">
          <div className="bg-white text-gray-700 px-2 py-1 rounded font-bold">
            Africa Market place
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span>Mr Ndemera</span>
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300">
            <Image
              src="/images/avatar.png"
              alt="profile"
              width={40}
              height={40}
            />
          </div>
        </div>
      </header>

      {/* Title */}
      <div className="text-center my-8">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        <p className="text-gray-500">Home</p>
      </div>

      {/* Cart Section */}
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto px-6">
        {/* Cart Table */}
        <div className="flex-1 bg-white shadow-md rounded-lg overflow-hidden">
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
              {/* Product 1 */}
              <tr className="border-b">
                <td className="p-4 flex items-center gap-3">
                  <button className="text-red-500 font-bold">X</button>
                  <Image
                    src="/images/shoe.png"
                    alt="Bata Zimbabwe"
                    width={50}
                    height={50}
                  />
                  <div>
                    <p className="font-semibold">Bata Zimbabwe</p>
                    <p className="text-sm text-gray-500">Tommy-Tennis</p>
                  </div>
                </td>
                <td className="p-4">$20.00</td>
                <td className="p-4 flex items-center gap-2">
                  <button className="px-2 border">-</button>
                  <span>5</span>
                  <button className="px-2 border">+</button>
                </td>
                <td className="p-4">$100.00</td>
              </tr>

              {/* Product 2 */}
              <tr className="border-b">
                <td className="p-4 flex items-center gap-3">
                  <button className="text-red-500 font-bold">X</button>
                  <Image
                    src="/images/laptop.png"
                    alt="HP Distributor"
                    width={50}
                    height={50}
                  />
                  <div>
                    <p className="font-semibold">Hp Distributor</p>
                    <p className="text-sm text-gray-500">Laptop Pro 4023</p>
                  </div>
                </td>
                <td className="p-4">$50.00</td>
                <td className="p-4 flex items-center gap-2">
                  <button className="px-2 border">-</button>
                  <span>5</span>
                  <button className="px-2 border">+</button>
                </td>
                <td className="p-4">$250.00</td>
              </tr>

              {/* Product 3 */}
              <tr className="border-b">
                <td className="p-4 flex items-center gap-3">
                  <button className="text-red-500 font-bold">X</button>
                  <Image
                    src="/images/keyboard.png"
                    alt="Musungo Gaming Combo"
                    width={50}
                    height={50}
                  />
                  <div>
                    <p className="font-semibold">Musungo</p>
                    <p className="text-sm text-gray-500">Gaming Combo</p>
                  </div>
                </td>
                <td className="p-4">$20.00</td>
                <td className="p-4 flex items-center gap-2">
                  <button className="px-2 border">-</button>
                  <span>1</span>
                  <button className="px-2 border">+</button>
                </td>
                <td className="p-4">$20.00</td>
              </tr>

              {/* Product 4 */}
              <tr>
                <td className="p-4 flex items-center gap-3">
                  <button className="text-red-500 font-bold">X</button>
                  <Image
                    src="/images/iphone.png"
                    alt="Apple Store iPhone 16 Pro"
                    width={50}
                    height={50}
                  />
                  <div>
                    <p className="font-semibold">Apple Store</p>
                    <p className="text-sm text-gray-500">iPhone 16 Pro</p>
                  </div>
                </td>
                <td className="p-4">$20.00</td>
                <td className="p-4 flex items-center gap-2">
                  <button className="px-2 border">-</button>
                  <span>5</span>
                  <button className="px-2 border">+</button>
                </td>
                <td className="p-4">$100.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-80 bg-white shadow-md rounded-lg p-6">
          <h3 className="font-bold mb-4">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Items</span>
              <span>16</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$470.00</span>
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
              <span>-$20.00</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2">
              <span>Total</span>
              <span>$450.00</span>
            </div>
          </div>
          <button className="w-full mt-4 bg-black text-white py-2 rounded hover:bg-gray-800">
            Proceed Check out
          </button>
        </div>
      </div>

      {/* Coupon Section */}
      <div className="max-w-6xl mx-auto px-6 flex items-center gap-4 mt-6">
        <input
          type="text"
          placeholder="Coupon code"
          className="flex-1 px-4 py-2 border rounded"
        />
        <button className="px-4 py-2 bg-black text-white rounded">
          Apply Coupon
        </button>
        <button className="px-4 py-2 text-gray-600">Clear shopping cart</button>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 my-10 text-center">
        <div className="flex flex-col items-center gap-2">
          <FaCreditCard className="text-3xl" />
          <h4 className="font-semibold">Flexible Payment</h4>
          <p className="text-sm text-gray-500">
            Multiple secure payments option
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaHeadset className="text-3xl" />
          <h4 className="font-semibold">24/7 Support</h4>
          <p className="text-sm text-gray-500">We support online all days</p>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-white py-10 text-center">
        <h4 className="font-semibold mb-2">Our Newsletter</h4>
        <h2 className="text-xl font-bold mb-4">
          Subscribe to Our newsletter to <br />
          Get Updates on Our Latest Offers
        </h2>
        <div className="flex justify-center gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter email"
            className="flex-1 px-4 py-2 border rounded"
          />
          <button className="px-4 py-2 bg-black text-white rounded">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        © AMP 2025. All rights reserved. AMP Money is a division of the Africa
        Market Place Group Ltd.
      </footer>
    </div>
  );
}
