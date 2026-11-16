"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#releases", label: "RELEASES" },
  { href: "#profile", label: "PROFILE" },
  { href: "#credits", label: "CREDITS" },
  { href: "#contact", label: "CONTACT" }
];

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="mobile-menu"
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={21} /> : <Menu size={21} />}
      </button>

      {isOpen && (
        <nav
          className="mobile-nav"
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {links.map((link, index) => (
            <a
              href={link.href}
              key={link.href}
              onClick={() => setIsOpen(false)}
            >
              <span>0{index + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </>
  );
}
