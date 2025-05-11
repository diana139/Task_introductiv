"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import { ThemeToggle } from "../theme-toggle";

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <nav className="flex items-center justify-between px-4 py-2 border-b border-gray-300 dark:border-gray-600">
      <Link href="https://www.asii.ro">
        <Image
          src="https://www.asii.ro/_astro/asii.e9f13d98.svg"
          height={100}
          width={100}
          alt="logo"
          className="logo"
        />
      </Link>

      <ul className=" font-bold flex gap-10 text-[20px]">
        <li><Link href="/">Acasa</Link></li>
        <li><Link href="/membri/coordonator">Coordonator</Link></li>
        <li><Link href="/membri/mentori">Mentori</Link></li>
        <li><Link href="/membri/boboci">Boboci</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><ThemeToggle /></li>
      </ul>
    </nav>
  );
}
