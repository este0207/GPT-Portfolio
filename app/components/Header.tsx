"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full max-w-5xl flex items-center justify-between mb-10">
        <div className="text-2xl font-semibold tracking-tight"><Link href="/">Esteban</Link></div>
        <nav className="flex items-center gap-6 text-sm text-gray-600">
          <Link href="projects" className="hover:text-black transition">Projets</Link>
          <Link href="about" className="hover:text-black transition">À propos</Link>
          <Link href="contact" className="hover:text-black transition">Contact</Link>
        </nav>
      </header>
  );
}