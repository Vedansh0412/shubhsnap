"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          ShubhSnap
        </Link>

        {/* Right actions */}
        <div className="flex items-center gap-6">
          <Link
            href="/customize"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Create Magnet
          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="h-6 w-6" />
            {/* Static badge for now */}
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
              0
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
