import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Search,
  ShoppingBag,
  User,
  Heart,
  Plus,
} from "lucide-react";
import { Container } from "../Layout/Container";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Track mobile menu open state

  // Navigation items for the mobile sidebar
  const sidebarItems = [
    { label: "Add Account", icon: <Plus className="w-5 h-5" /> },
    { label: "Gold Jewellery", icon: <ChevronDown className="w-5 h-5" /> },
    { label: "Silver Jewellery", icon: <ChevronDown className="w-5 h-5" /> },
    { label: "Trending Collection", icon: <ChevronDown className="w-5 h-5" /> },
    { label: "Gifts", icon: <ChevronDown className="w-5 h-5" /> },
    { label: "Shop by Occasion", icon: <ChevronDown className="w-5 h-5" /> },
  ];

  return (
    <header className="w-full sticky top-0 z-50 shadow-sm bg-white">
      {/* Top Banner */}
      <div className="bg-rose-400 py-2 text-white">
        <Container>
          <div className="text-center text-sm font-medium">
            50% off on all items - Limited Time Deal - Offer ending in 03:34:15
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <div className="bg-stone-50 border-b">
        <Container>
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                ELEGANT JEWELS
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button className="flex items-center gap-1 py-2 text-gray-700 hover:text-rose-500 transition-colors duration-200">
                <span className="font-medium cursor-pointer">Collections</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-1 py-2 text-gray-700 hover:text-rose-500 transition-colors duration-200">
                <span className="font-medium cursor-pointer">Categories</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="py-2 font-medium text-gray-700 hover:text-rose-500 cursor-pointer">
                Hot Picks
              </button>
              <button className="py-2 font-medium text-gray-700 hover:text-rose-500 cursor-pointer">
                Gifts
              </button>
              <button className="py-2 font-medium text-gray-700 hover:text-rose-500 cursor-pointer">
                Shop All
              </button>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-rose-500">
                <Search className="w-5 h-5 cursor-pointer" />
              </button>
              <button className="p-2 text-gray-600 hover:text-rose-500">
                <Heart className="w-5 h-5 cursor-pointer" />
              </button>
              <button className="relative p-2 text-gray-600 hover:text-rose-500">
                <ShoppingBag className="w-5 h-5 cursor-pointer" />
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs text-white bg-rose-500 rounded-full">
                  2
                </span>
              </button>

              <div className="flex items-center ml-4 space-x-2">
                <button className="px-6 py-2 font-semibold text-white bg-rose-500 rounded-lg hover:bg-rose-600 cursor-pointer">
                  LOGIN
                </button>
                <button className="px-6 py-2 font-semibold border rounded-lg border-rose-500 text-rose-500 hover:bg-rose-50 cursor-pointer">
                  REGISTER
                </button>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-600 lg:hidden"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Sidebar */}
          <div className="flex flex-col w-64 h-full p-4 bg-rose-300">
            <nav className="flex-1 space-y-3">
              {sidebarItems.map((item) => (
                <button
                  key={item.label}
                  className="flex items-center justify-between w-full py-3 font-medium text-white border-b border-white/50 text-left"
                >
                  <span>{item.label}</span>
                  {item.icon}
                </button>
              ))}
            </nav>

            {/* Bottom Login/Signup Button */}
            <div className="mt-4">
              <button className="flex items-center justify-center w-full gap-2 px-4 py-3 font-semibold text-gray-800 bg-white rounded-lg">
                <User className="w-5 h-5" />
                Login / Signup
              </button>
            </div>
          </div>

          {/* Overlay to close sidebar */}
          <div
            className="flex-1 bg-black/50"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      )}
    </header>
  );
};
