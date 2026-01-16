export default function Home() {
  return (
    <main id="home" className="px-6 pt-32 pb-40">
      <div className="max-w-[900px] mx-auto space-y-32">

        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/profile.jpg"
              alt="Silas"
              className="w-36 h-36 rounded-full object-cover"
            />
          </div>

          {/* Hero Text */}
          <div className="space-y-6">
            <h1 className="text-[30px] md:text-[36px] font-medium leading-[1.25]">
              I build AI-powered systems that help businesses save time,
              attract more customers, and increase revenue.
            </h1>

            <p className="text-[17px] leading-[1.75] text-neutral-600 dark:text-neutral-400">
              I help businesses streamline operations through AI automation,
              CRM optimization, smart sales chatbots, conversion-focused websites,
              and visual design that strengthens brand presence and trust.
            </p>

            <div className="flex gap-6 pt-2">
              <a
                href="#contact"
                className="rounded-md bg-neutral-900 px-5 py-2.5 text-white text-sm transition-colors hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900"
              >
                Book a Call
              </a>
              <a
                href="#services"
                className="rounded-md border border-neutral-300 px-5 py-2.5 text-sm tra
