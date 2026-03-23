"use client";

import { useState } from "react";
import { Phone, Menu, X, Clock } from "lucide-react";

const navLinks = [
  { href: "#szolgaltatasok", label: "Szolgáltatások" },
  { href: "#araink", label: "Áraink" },
  { href: "#gyik", label: "Gyakori kérdések" },
  { href: "#kapcsolat", label: "Kapcsolat" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-black text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent-500" />
            <span>Hétfő - Vasárnap | 0-24</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+36206282000"
              className="flex items-center gap-2 hover:text-accent-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-accent-500" />
              <span className="font-semibold">+36 20 628 2000</span>
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="tel:+36301940601"
              className="flex items-center gap-2 hover:text-accent-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-accent-500" />
              <span className="font-semibold">+36 30 194 0601</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center">
              <span className="text-white font-black text-lg">M</span>
            </div>
            <div className="leading-tight">
              <span className="font-extrabold text-accent-500 text-lg">
                SOS
              </span>
              <span className="font-bold text-gray-200 text-lg">
                {" "}
                MobilGumiPest
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 font-medium hover:text-accent-500 transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+36206282000"
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-5 py-2.5 rounded-full transition-all hover:shadow-lg flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              Hívás most
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-300"
            aria-label="Menü"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-gray-300 font-medium hover:text-accent-500 transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+36206282000"
                className="block bg-accent-500 hover:bg-accent-600 text-white font-bold px-5 py-3 rounded-full text-center transition-all mb-2"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                +36 20 628 2000
              </a>
              <a
                href="tel:+36301940601"
                className="block bg-accent-500/20 hover:bg-accent-500 text-accent-400 hover:text-white font-bold px-5 py-3 rounded-full text-center transition-all"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                +36 30 194 0601
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
