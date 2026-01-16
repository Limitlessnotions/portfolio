"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-[#0f0f0f]">
      <div className="max-w-[640px] mx-auto px-6 h-20 flex items-center justify-between text-sm">
        <div className="font-medium">
          Silas
        </div>

        <nav className="flex items-center gap-6 text-neutral-600 dark:text-neutral-400">
          <a
            href="#case-studies"
            className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-200"
          >
            Work
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-200"
          >
            Contact
          </a>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
            className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-200"
          >
            {dark ? (
              /* Sun icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 4.5a1 1 0 011 1V7a1 1 0 11-2 0V5.5a1 1 0 011-1zm0 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm7.5-3.5a1 1 0 011-1H22a1 1 0 110 2h-1.5a1 1 0 01-1-1zM12 17a1 1 0 011 1v1.5a1 1 0 11-2 0V18a1 1 0 011-1zM3 11a1 1 0 011-1h1.5a1 1 0 110 2H4a1 1 0 01-1-1zm14.95-5.95a1 1 0 011.414 0l1.06 1.06a1 1 0 01-1.414 1.415l-1.06-1.06a1 1 0 010-1.415zM4.576 16.364a1 1 0 011.414 0l1.06 1.06a1 1 0 01-1.414 1.415l-1.06-1.06a1 1 0 010-1.415zm12.788 1.414a1 1 0 010-1.414l1.06-1.06a1 1 0 111.415 1.414l-1.06 1.06a1 1 0 01-1.415 0zM4.576 7.636a1 1 0 010-1.414l1.06-1.06a1 1 0 111.414 1.414l-1.06 1.06a1 1 0 01-1.414 0z" />
              </svg>
            ) : (
              /* Moon icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21.752 15.002A9 9 0 1112.998 2.25a7 7 0 108.754 12.752z" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
