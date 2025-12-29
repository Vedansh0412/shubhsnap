"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h2 className="text-lg font-semibold">ShubhSnap</h2>
          <p className="mt-2 text-sm text-gray-400">
            Turn your memories into beautiful fridge magnets.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-sm font-medium">Quick Links</p>
          <ul className="mt-4 space-y-3 text-sm text-gray-400">
            <li>
              <Link href="/" className="cursor-pointer hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/customize"
                className="cursor-pointer hover:text-white"
              >
                Customize
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="cursor-pointer hover:text-white"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p className="text-sm font-medium">Legal</p>
          <ul className="mt-4 space-y-3 text-sm text-gray-400">
            <li className="cursor-pointer hover:text-white">
              Privacy Policy
            </li>
            <li className="cursor-pointer hover:text-white">
              Terms & Conditions
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} ShubhSnap. All rights reserved.
      </div>
    </footer>
  );
}
