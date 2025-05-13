"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-2  shadow-md relative">
      {/* Logo */}
      <Link href="https://www.asii.ro">
        <Image
          src="https://www.asii.ro/_astro/asii.e9f13d98.svg"
          height={60}
          width={60}
          alt="logo"
        />
      </Link>

      {/* Hamburger (se arată sub 768px) */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        &#9776;
      </button>

      {/* Meniu normal (peste 768px) */}
      <ul className="hidden md:flex items-center font-bold gap-8 text-[18px] ">
        <li><Link href="/">Acasă</Link></li>
        <li><Link href="/membri/coordonator">Coordonator</Link></li>
        <li><Link href="/membri/mentori">Mentori</Link></li>
        <li><Link href="/membri/boboci">Boboci</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><ThemeToggle variant="navbar" /></li>
      </ul>

      {/* Meniu mobil (sub 768px) */}
      {isOpen && (
        <ul className="absolute top-20 left-0 w-full bg-white text-black flex flex-col items-center gap-6 font-bold text-[18px] md:hidden z-50 py-6 shadow-lg">
          <li><Link href="/" onClick={() => setIsOpen(false)}>Acasă</Link></li>
          <li><Link href="/membri/coordonator" onClick={() => setIsOpen(false)}>Coordonator</Link></li>
          <li><Link href="/membri/mentori" onClick={() => setIsOpen(false)}>Mentori</Link></li>
          <li><Link href="/membri/boboci" onClick={() => setIsOpen(false)}>Boboci</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><ThemeToggle variant="navbar" /></li>
        </ul>
      )}
    </nav>
  );
}
