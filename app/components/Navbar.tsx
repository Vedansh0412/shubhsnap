"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 text-white">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          ShubhSnap
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <Link
            href="/customize"
            className="text-sm font-medium hover:opacity-80"
          >
            Create Magnet
          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="h-6 w-6" />
            <span className={styles.cartBadge}>0</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
