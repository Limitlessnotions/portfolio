export default function Home() {
  return (
    <main id="home" className="px-6 pt-32 pb-44">
      <div className="max-w-[900px] mx-auto space-y-36">

        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-12 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src="/profile.jpg"
              alt="Silas"
              className="w-36 h-36 rounded-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-[32px] md:text-[38px] font-medium leading-[1.25]">
              I design AI-powered systems that reduce operational friction
              and drive measurable business growth.
            </h1>

            <p className="text-[17px] leading-[1.75] text-neutral-600 dark:text-neutral-400">
              I help businesses automate workflows, optimize CRM systems,
              deploy sales-focused chatbots, build high-performing websites,
              and design visuals that strengthen brand credibility.
            </p>

            <div className="flex gap-6 pt-2">
              <a
                href="https://calendar.app.google/oZm3C48pYcJPJ7di7"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-blue-600 px-5 py-2.5 text-white text-sm
                           transition-colors hover:bg-blue-700
                           dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                Book a Strategy Call
              </a>

              <a
                href="/#services"
                className="rounded-md border border-neutral-300 px-5 py-2.5 text-sm
                           transition-colors hover:border-blue-600
                           dark:border-neutral-600 dark:hover:border-blue-400"
              >
                View Services
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="space-y-12">
          <h2 className="text-xs uppercase tracking-[0.22em] text-blue-500/80 text-center">
            Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium">AI Automation & Workflows</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Custom automation systems that eliminate repetitive tasks and improve efficiency.
              </p>
            </div>

            <div>
              <h3 className="font-medium">CRM Setup & Optimization</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Well-structured CRM pipelines for lead tracking and follow-ups.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Sales & Lead Chatbots</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Intelligent chatbots across web and messaging platforms.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Web & Visual Design</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Conversion-focused websites and brand visuals that support growth.
              </p>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="space-y-14">
          <h2 className="text-xs uppercase tracking-[0.22em] text-blue-500/80 text-center">
            Selected Work
          </h2>

          <div className="space-y-10 max-w-[720px] mx-auto">
            <div>
              <h3 className="font-medium">WhatsApp Credit & Repayment Automation</h3>
              <p className="text-neutral-500">
                End-to-end automated onboarding, credit requests, and repayments.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Sales Chatbots & Lead Capture</h3>
              <p className="text-neutral-500">
                Chatbots that qualify leads and book appointments automatically.
              </p>
            </div>

            <div>
              <h3 className="font-medium">CRM & Workflow Systems</h3>
              <p className="text-neutral-500">
                Scalable CRM and automation setups for growing teams.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="flex justify-center">
          <div className="max-w-[720px] w-full rounded-xl border border-neutral-200 p-12 text-center
                          bg-neutral-50 dark:bg-[#0f0f0f] dark:border-neutral-700 space-y-5">
            <h2 className="text-lg font-medium">
              Let’s discuss your systems.
            </h2>

            <p className="text-neutral-600 dark:text-neutral-400">
              If you’re ready to reduce inefficiencies and build scalable automation,
              we should talk.
            </p>

            <a
              href="https://calendar.app.google/oZm3C48pYcJPJ7di7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white text-sm
                         transition-colors hover:bg-blue-700
                         dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              Book a Strategy Call
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
