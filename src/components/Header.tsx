export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-[#0f0f0f]">
      <div className="max-w-[640px] mx-auto px-6 h-20 flex items-center justify-between text-sm">
        <div className="font-medium">
          Silas
        </div>

        <nav className="flex items-center gap-6 text-neutral-600 dark:text-neutral-400">
          <a
            href="#case-studies"
            className="transition-colors duration-200 hover:text-neutral-900 dark:hover:text-neutral-200"
          >
            Work
          </a>
          <a
            href="#contact"
            className="transition-colors duration-200 hover:text-neutral-900 dark:hover:text-neutral-200"
          >
            Contact
          </a>
          <a
            href="https://calendly.com/YOUR-LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-colors duration-200 hover:text-neutral-900 dark:hover:text-neutral-200"
          >
            Book a Call
          </a>
        </nav>
      </div>
    </header>
  );
}
