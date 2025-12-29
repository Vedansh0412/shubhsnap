"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 text-white">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          ShubhSnap
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/about"
            className="text-sm font-medium hover:opacity-80"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium hover:opacity-80"
          >
            Contact Us
          </Link>

          <Link
            href="/customize"
            className="text-sm font-medium hover:opacity-80"
          >
            Create Magnet
          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative cursor-pointer">
            <ShoppingCart className="h-6 w-6" />
            <span className={styles.cartBadge}>0</span>
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Cart */}
          <Link href="/cart" className="relative cursor-pointer">
            <ShoppingCart className="h-6 w-6" />
            <span className={styles.cartBadge}>0</span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="cursor-pointer"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 gap-4 text-sm text-gray-500">
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="block cursor-pointer"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="block cursor-pointer"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block cursor-pointer"
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                href="/customize"
                onClick={() => setMenuOpen(false)}
                className="block cursor-pointer"
              >
                Create Magnet
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
