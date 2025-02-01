"use client";
import React, { useState, useRef, useEffect } from "react";
import logo from "../../../public/images/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/Aboutus", label: "About Us" },
  { 
    href: "#", 
    label: "Products",  
    submenu: [
      { href: "/Products/productOne", label: "Product 1" },
      { href: "/Products/productTwo", label: "Product 2" },
      { href: "/Products/productThree", label: "Product 3" },
    ],
  },
  { href: "/Contact", label: "Contact Us" },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const submenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setActiveSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
    setActiveSubmenu(null);
  }, [pathname]);

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  return (
    <header className="bg-Light shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          <Image src={logo} alt="logo" className="w-auto h-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const isSubmenuOpen = activeSubmenu === link.label;

            return (
              <div key={link.href} className="relative">
                {link.submenu ? (
                  <div>
                    <button
                      ref={buttonRef}
                      className={`text-Dark hover:text-primaryColor leading-5 md:px-3 lg:px-5 py-2 rounded-full duration-300 font-medium flex items-center gap-1 ${
                        isActive ? "bg-primaryColor !text-Light" : ""
                      }`}
                      onClick={() => toggleSubmenu(link.label)}
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          isSubmenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    
                    {/* Desktop Submenu */}
                    {isSubmenuOpen && (
                      <div
                        ref={submenuRef}
                        className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden py-1"
                      >
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={`block px-4 py-2 text-Dark hover:bg-primaryColor hover:text-Light duration-200 ${
                              pathname === sub.href ? "bg-primaryColor/10" : ""
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-Dark hover:text-primaryColor leading-5 md:px-3 lg:px-5 py-2 rounded-full duration-300 font-medium ${
                      isActive ? "bg-primaryColor !text-Light" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-800 hover:text-primaryColor focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 top-[72px] bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setMenuOpen(false)}
          />
          
          <nav className="fixed top-[72px] left-0 right-0 bg-white shadow-md z-50 max-h-[calc(100vh-72px)] overflow-y-auto">
            <div className="container mx-auto py-4 px-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const isSubmenuOpen = activeSubmenu === link.label;

                return (
                  <div key={link.href} className="mb-2">
                    {link.submenu ? (
                      <>
                        <button
                          className={`w-full text-left text-Dark hover:text-primaryColor px-4 py-2 rounded-lg font-medium flex items-center justify-between ${
                            isActive ? "bg-primaryColor/10" : ""
                          }`}
                          onClick={() => toggleSubmenu(link.label)}
                        >
                          {link.label}
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-200 ${
                              isSubmenuOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        
                        {/* Mobile Submenu */}
                        {isSubmenuOpen && (
                          <div className="mt-1 ml-4 space-y-1">
                            {link.submenu.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className={`block px-4 py-2 text-Dark hover:bg-primaryColor hover:text-Light duration-200 rounded-lg ${
                                  pathname === sub.href ? "bg-primaryColor/10" : ""
                                }`}
                                onClick={() => {
                                  setMenuOpen(false);
                                  setActiveSubmenu(null);
                                }}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block text-Dark hover:text-primaryColor px-4 py-2 rounded-lg font-medium ${
                          isActive ? "bg-primaryColor !text-Light" : ""
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
