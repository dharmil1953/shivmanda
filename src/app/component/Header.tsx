"use client";
import React, { useState } from "react";
import logo from "../../../public/images/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // Hamburger and close icons

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/Aboutus", label: "About Us" },
  { href: "/Products", label: "Products" },
  { href: "/Industries We Serve", label: "Industries We Serve" },
  { href: "/Contact", label: "Contact Us" },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <Link href="/">
            <Image src={logo} alt="logo" className="w-auto h-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-Dark hover:text-primaryColor leading-5 px-5 py-2 rounded-full duration-300 font-medium ${
                  isActive ? "bg-primaryColor !text-Light" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 px-4 py-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`inline-block text-Dark hover:text-primaryColor leading-5 px-5 py-2 rounded-full duration-300 font-medium ${
                      isActive ? "bg-primaryColor !text-Light" : ""
                    }`}
                    onClick={() => setMenuOpen(false)} // Close menu on link click
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
