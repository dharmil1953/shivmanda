"use client";
import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll"); // Cleanup on unmount
    };
  }, [menuOpen]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <Link href="/">
            <Image src={logo} alt="logo" className="w-auto h-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-Dark hover:text-primaryColor leading-5 md:px-3 lg:px-5 py-2 rounded-full duration-300 font-medium ${
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
          className="md:hidden p-2 text-gray-800 focus:outline-none focus:ring-0 focus:ring-gray-400"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 top-[105px] bg-black bg-opacity-50 focus:ring-0 duration-200 backdrop-blur-sm z-50"
            onClick={() => setMenuOpen(false)}
          ></div>

          <nav className="fixed top-[100px] left-0 right-0 bg-white shadow-md z-[99] duration-300">
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
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
