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
              I work with growing businesses to automate workflows, optimize CRM
              systems, deploy sales-focused chatbots, build high-performing websites,
              and design visuals that strengthen brand credibility.
            </p>

            <div className="flex gap-6 pt-2">
              <a
                href="#contact"
                className="rounded-md bg-neutral-900 px-5 py-2.5 text-white text-sm transition-colors hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900"
              >
                Book a Strategy Call
              </a>
              <a
                href="#services"
                className="rounded-md border border-neutral-300 px-5 py-2.5 text-sm transition-colors hover:border-neutral-400 dark:border-neutral-600"
              >
                View Services
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="flex justify-center">
          <div className="max-w-[720px] rounded-xl border border-neutral-200 p-10 bg-white dark:bg-[#111] dark:border-neutral-700 space-y-5">
            <h2 className="text-sm font-medium">About</h2>

            <p className="text-[16px] leading-[1.75] text-neutral-600 dark:text-neutral-400">
              I’m an AI Automation Expert, Chatbot Developer, Web Developer, and
              Graphic Designer. My focus is building systems that remove manual
              work, improve conversion rates, and support sustainable growth.
            </p>

            <p className="text-[16px] leading-[1.75] text-neutral-600 dark:text-neutral-400">
              I don’t build disconnected tools. I design end-to-end solutions
              where automation, CRM, chatbots, websites, and visual design work
              together to support real business objectives.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="space-y-12">
          <h2 className="text-xs uppercase tracking-[0.22em] text-neutral-400 text-center">
            Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="font-medium">AI Automation & Workflows</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Custom automation systems that eliminate repetitive tasks,
                reduce errors, and improve operational efficiency.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">CRM Setup & Optimization</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                CRM systems structured for clarity, follow-ups, lead tracking,
                and long-term customer value.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Sales & Lead Chatbots</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Intelligent chatbots that qualify leads, answer questions,
                and support sales without manual intervention.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Web Design & Development</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Websites built for visibility, clarity, and conversion—not
                just aesthetics.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Graphic & Visual Design</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Visual assets that improve brand perception and support
                marketing and sales efforts.
              </p>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="space-y-14">
          <h2 className="text-xs uppercase tracking-[0.22em] text-neutral-400 text-center">
            Selected Work
          </h2>

          <div className="space-y-10 max-w-[720px] mx-auto">
            <div>
              <h3 className="font-medium">WhatsApp-Based Credit & Repayment System</h3>
              <p className="text-neutral-500">
                Automated onboarding, credit requests, voucher logic, and
                repayment flows built for scale.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Sales & Lead Capture Chatbots</h3>
              <p className="text-neutral-500">
                Chatbots designed to qualify leads, book calls, and reduce
                response time across multiple channels.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Operational Automation for Multi-Location Businesses</h3>
              <p className="text-neutral-500">
                Workflow automation and reporting systems that improve visibility
                and reduce manual coordination.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Websites & Brand Assets</h3>
              <p className="text-neutral-500">
                Conversion-focused websites and supporting visual design aligned
                with business goals.
              </p>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section id="reviews" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-neutral-200 p-6 text-center bg-white dark:bg-[#111] dark:border-neutral-700">
            <p className="text-2xl font-medium">40+</p>
            <p className="text-sm text-neutral-500">Businesses Supported</p>
          </div>

          <div className="rounded-xl border border-neutral-200 p-6 text-center bg-white dark:bg-[#111] dark:border-neutral-700">
            <p className="text-2xl font-medium">10–20 hrs</p>
            <p className="text-sm text-neutral-500">Saved Weekly</p>
          </div>

          <div className="rounded-xl border border-neutral-200 p-6 text-center bg-white dark:bg-[#111] dark:border-neutral-700">
            <p className="text-2xl font-medium">End-to-End</p>
            <p className="text-sm text-neutral-500">Systems Delivery</p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="contact" className="flex justify-center">
          <div className="max-w-[720px] w-full rounded-xl border border-neutral-200 p-12 text-center bg-neutral-50 dark:bg-[#0f0f0f] dark:border-neutral-700 space-y-5">
            <h2 className="text-lg font-medium">
              Let’s discuss your systems.
            </h2>

            <p className="text-neutral-600 dark:text-neutral-400">
              If your business is ready to reduce inefficiencies and build
              scalable systems, we should talk.
            </p>

            <a
              href="https://calendar.app.google/oZm3C48pYcJPJ7di7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 rounded-md bg-neutral-900 px-6 py-3 text-white text-sm transition-colors hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900"
            >
              Book a Strategy Call
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
