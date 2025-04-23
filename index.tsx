"use client"; // Needed for dynamic themes (optional)

import { useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col justify-center items-center px-6">
        
        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-6 right-6 text-xl"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Main Content */}
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl font-bold mb-4">John Patrick Madrigal</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
          </p>

          {/* Writing Section */}
          <h2 className="text-xl font-semibold mt-8">Writing</h2>
          <p className="text-gray-500 dark:text-gray-400">No writing at this moment</p>

          {/* Code Projects */}
          <h2 className="text-xl font-semibold mt-6">Code</h2>
          <ul className="mt-2 text-blue-500 dark:text-blue-400 space-y-2">
            <li><Link href="#">chatgpt-clone</Link></li>
            <li><Link href="#">oidc-next-simulate</Link></li>
            <li><Link href="#">auction-madrigal-public</Link></li>
          </ul>
        </div>

        {/* Footer with Social Links */}
        <footer className="mt-10 text-gray-500 dark:text-gray-400 text-sm flex gap-6">
          <Link href="#">@jpmadrigal_</Link>
          <Link href="#">youtube</Link>
          <Link href="#">linkedin</Link>
          <Link href="#">github</Link>
        </footer>
      </div>
    </div>
  );
}
