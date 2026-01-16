import Image from "next/image";

export default function Home() {
  return (
    <main id="home" className="px-6 pt-32 pb-44">
      <div className="max-w-[900px] mx-auto space-y-36">

        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-12 items-center">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/Silas.jpeg"
              alt="Silas Momoh"
              width={144}
              height={144}
              priority
              className="rounded-full object-cover shadow-sm
                         ring-1 ring-neutral-200 dark:ring-neutral-700"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-[32px] md:text-[38px] font-medium leading-[1.25]">
              I design AI-powered systems that reduce operational friction
              and turn leads into revenue at scale.
            </h1>

            <p className="text-[17px] leading-[1.75] text-neutral-600 dark:text-neutral-400">
              I help businesses automate workflows, optimize CRM systems,
              deploy sales-driven chatbots, build high-impact websites,
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
                href="#services"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "AI Automation & Workflows",
                text: "End-to-end automation systems that remove repetitive work, reduce errors, and improve efficiency."
              },
              {
                title: "CRM Setup & Optimization",
                text: "Structured CRM pipelines for lead capture, follow-up, and long-term customer management."
              },
              {
                title: "Sales & Lead Chatbots",
                text: "Intelligent chatbots for websites and messaging platforms that qualify leads and support sales."
              },
              {
                title: "Web & Visual Design",
                text: "Conversion-focused websites and design assets that support business growth."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="
                  rounded-xl
                  border border-neutral-200 dark:border-neutral-700
                  bg-white dark:bg-[#111827]
                  p-6
                  shadow-sm
                  transition-all duration-200 ease-out
                  hover:-translate-y-[2px]
                  hover:shadow-md
                  hover:border-blue-500/40
                  dark:hover:border-blue-400/40
                "
              >
                <h3 className="font-medium text-neutral-800 dark:text-neutral-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="space-y-14">
          <h2 className="text-xs uppercase tracking-[0.22em] text-blue-500/80 text-center">
            Selected Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "WhatsApp Credit & Repayment Automation",
                text: "Automated onboarding, credit requests, voucher logic, and repayment workflows."
              },
              {
                title: "Sales Chatbots & Lead Capture",
                text: "Chatbots that qualify leads, answer questions, and book appointments automatically."
              },
              {
                title: "CRM & Workflow Systems",
                text: "Scalable CRM and automation systems built for growing teams."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="
                  rounded-xl
                  border border-neutral-200 dark:border-neutral-700
                  bg-white dark:bg-[#111827]
                  p-6
                  shadow-sm
                  transition-all duration-200 ease-out
                  hover:-translate-y-[2px]
                  hover:shadow-md
                  hover:border-blue-500/40
                  dark:hover:border-blue-400/40
                "
              >
                <h3 className="font-medium text-neutral-800 dark:text-neutral-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-neutral-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* RESULTS */}
        <section id="reviews" className="space-y-12">
          <h2 className="text-xs uppercase tracking-[0.22em] text-blue-500/80 text-center">
            Results That Matter
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: "20+", label: "Clients Served" },
              { value: "50+", label: "Projects Delivered" },
              { value: "Reliable", label: "End-to-End Systems" }
            ].map((item) => (
              <div
                key={item.label}
                className="
                  rounded-xl
                  border border-neutral-200 dark:border-neutral-700
                  bg-white dark:bg-[#111827]
                  p-6
                  text-center
                  shadow-sm
                  transition-all duration-200 ease-out
                  hover:-translate-y-[2px]
                  hover:shadow-md
                  hover:border-blue-500/40
                  dark:hover:border-blue-400/40
                "
              >
                <p className="text-2xl font-medium text-neutral-800 dark:text-neutral-100">
                  {item.value}
                </p>
                <p className="text-sm text-neutral-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="flex justify-center">
          <div
            className="
              max-w-[720px] w-full
              rounded-xl
              border border-neutral-200 dark:border-neutral-700
              bg-white dark:bg-[#111827]
              p-12
              text-center
              shadow-sm
              transition-all duration-200 ease-out
              hover:-translate-y-[2px]
              hover:shadow-md
              hover:border-blue-500/40
              dark:hover:border-blue-400/40
              space-y-5
            "
          >
            <h2 className="text-lg font-medium text-neutral-800 dark:text-neutral-100">
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
