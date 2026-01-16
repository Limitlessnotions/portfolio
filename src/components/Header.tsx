export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white">
      <div className="max-w-[640px] mx-auto px-6 h-20 flex items-center justify-between text-sm">
        <div className="font-medium">
          Silas
        </div>

        <nav className="flex items-center gap-6 text-neutral-600">
          <a href="#case-studies" className="hover:text-black">
            Work
          </a>
          <a href="#contact" className="hover:text-black">
            Contact
          </a>
          <a
            href="https://calendar.app.google/oZm3C48pYcJPJ7di7"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-black"
          >
            Book a Call
          </a>
        </nav>
      </div>
    </header>
  );
}
