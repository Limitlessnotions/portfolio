export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <div className="font-semibold text-lg">
          Silas
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
          <a href="#case-studies" className="hover:text-black">
            Case Studies
          </a>
          <a href="#contact" className="hover:text-black">
            Contact
          </a>
          <a
            href="https://https://calendar.app.google/oZm3C48pYcJPJ7di7"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-black px-4 py-2 text-white"
          >
            Book a Call
          </a>
        </nav>
      </div>
    </header>
  );
}
