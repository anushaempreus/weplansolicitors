"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { href: "/#top", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#why", label: "Why Us" },
  { href: "/#process", label: "Our Process" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <a href="/#top" className="logo" aria-label="WEPlan Solicitors home">
          <Image
            src="/images/WPS_Landscape_WEB-WHITE.png"
            alt="WEPlan Solicitors"
            width={200}
            height={60}
            priority
          />
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>

        <nav className={`nav ${open ? "open" : ""}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="/#contact" className="nav-cta" onClick={() => setOpen(false)}>
            Enquire
          </a>
        </nav>
      </div>
    </header>
  );
}
