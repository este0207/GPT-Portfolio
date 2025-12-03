"use client";

import Hero from "../components/hero";
import Footer from "../components/footer";
import ChatBox from "../components/ChatBox";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-between py-10 px-6 font-sans">
      {/* Header */}
      <header className="w-full max-w-5xl flex items-center justify-between mb-10">
        <div className="text-2xl font-semibold tracking-tight">DevChat.</div>
        <nav className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#projects" className="hover:text-black transition">Projets</a>
          <a href="#about" className="hover:text-black transition">À propos</a>
          <a href="#contact" className="hover:text-black transition">Contact</a>
        </nav>
      </header>

        {/* Hero Section */}
        <Hero />

      {/* Chat Box */}
        <ChatBox />

      {/* Footer */}
        <Footer />
    </div>
  );
}
