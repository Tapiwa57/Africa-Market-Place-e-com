import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-purple-200 relative overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Card */}
      <div className="relative bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl flex w-full max-w-4xl overflow-hidden">
        {/* Left Side (Welcome Message) */}
        <div className="bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 text-white flex-1 flex flex-col justify-center items-center p-10 relative">
          <h1 className="text-3xl font-bold mb-4">
            Welcome On Africa Market Online
          </h1>
          <p className="text-sm text-center leading-relaxed mb-6">
            where you order different product and offer good services to any
            customer around the world , 24/7 online shopping
          </p>
          <p className="text-sm mb-6">
            To connect with us login on our site / App site
          </p>
          <button className="px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-gray-800 transition">
            SIGN IN
          </button>

          {/* Decorative Circle */}
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/20 rounded-full blur-xl"></div>
        </div>

        {/* Right Side (Sign Up Form) */}
        <div className="flex-1 bg-white p-10 relative z-10">
          <h2 className="text-2xl font-bold mb-6">Create Account</h2>

          {/* Social Icons */}
          <div className="flex gap-4 mb-6">
            <button className="p-3 border rounded-full hover:bg-gray-100 shadow-md">
              <FaLinkedin className="text-blue-600" />
            </button>
            <button className="p-3 border rounded-full hover:bg-gray-100 shadow-md">
              <FaFacebook className="text-blue-500" />
            </button>
            <button className="p-3 border rounded-full hover:bg-gray-100 shadow-md">
              <FaGoogle className="text-red-500" />
            </button>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            or use your email to registration
          </p>

          {/* Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
            />
            <button
              type="submit"
              className="w-full py-3 text-white bg-gray-800 border-white rounded-full font-semibold hover:bg-white hover:text-gray-800 transition shadow-lg"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
