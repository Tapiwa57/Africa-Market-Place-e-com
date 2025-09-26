import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t px-6 py-8 text-sm text-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold mb-2">Africa Market</h3>
          <p>Get to know us</p>
          <p>Our App</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Need Help?</h3>
          <p>WhatsApp</p>
          <p>Facebook</p>
          <p>Delivery & Returns</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-3">
            <Image src="/images/Vector-facebook.svg" alt="Facebook" className="w-5 h-5" />
            <Image src="/images/ri_whatsapp-fill.svg" alt="WhatsApp" className="w-5 h-5" />
            <Image src="/images/ri_instagram-fill.svg" alt="Instagram" className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="text-center text-xs mt-6">
        © AMP 2025. All rights reserved.
      </div>
    </footer>
  );
}
