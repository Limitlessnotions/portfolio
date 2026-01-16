"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-[#0f0f0f]">
      <div className="max-w-[900px] mx-auto px-6 h-20 flex items-center justify-center text-sm">
        <nav className="flex items-center gap-8 text-neutral-600 dark:text-neutral-100">

          <a
            href="/"
            className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            Home
          </a>

          <a
            href="/about"
            className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            About
          </a>

          <a
            href="/#services"
            className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            Services
          </a>

          <a
            href="/#portfolio"
            className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            Portfolio
          </a>

          <a
            href="/#reviews"
            className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            Reviews
          </a>

          <a
            href="/#contact"
            className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            Contact
          </a>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
            className="ml-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4.5a1 1 0 011 1V7a1 1 0 11-2 0V5.5a1 1 0 011-1zm0 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.752 15.002A9 9 0 1112.998 2.25a7 7 0 108.754 12.752z" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
