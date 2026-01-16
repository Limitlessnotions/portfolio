import Image from "next/image";

export default function About() {
  return (
    <main className="px-6 pt-32 pb-44">
      <div className="max-w-[900px] mx-auto space-y-36">

        {/* INTRO */}
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
            <h1 className="text-[30px] md:text-[36px] font-medium leading-[1.25]">
              About me
            </h1>

            <p className="text-[17px] leading-[1.75] text-neutral-600 dark:text-neutral-400">
              I’m an Automation Engineer focused on building AI-powered systems
              that help businesses capture leads, follow up consistently,
              and convert opportunities into revenue through well-structured workflows.
            </p>
          </div>
        </section>

        {/* MY JOURNEY */}
        <section className="space-y-12">
          <h2 className="text-xs uppercase tracking-[0.22em] text-blue-500/80">
            My Journey
          </h2>

          <div
            className="
              rounded-xl
              border border-neutral-200 dark:border-neutral-700
              bg-white dark:bg-[#111827]
              p-8
              shadow-sm
              transition-all duration-200 ease-out
              hover:-translate-y-[2px]
              hover:shadow-md
              hover:border-blue-500/40
              dark:hover:border-blue-400/40
              space-y-5
            "
          >
            <p className="text-neutral-600 dark:text-neutral-400">
              I started my career in graphic design, then moved into web development.
              Over time, I began to notice a recurring problem: many businesses had
              websites, but very few had systems that actually converted visitors into leads.
            </p>

            <p className="text-neutral-600 dark:text-neutral-400">
              Even when leads were captured, follow-up was often inconsistent or
              completely manual. Businesses were losing opportunities not because
              of poor products, but because their systems couldn’t keep up.
            </p>

            <p className="text-neutral-600 dark:text-neutral-400">
              That realization pushed me deeper into automation. I moved from
              working with individual tools to system thinking — designing
              connected workflows that capture leads, follow up automatically,
              and support sales without constant manual effort.
            </p>
          </div>
        </section>

        {/* WHAT I DO TODAY */}
        <section className="space-y-12">
          <h2 className="text-xs uppercase tracking-[0.22em] text-blue-500/80">
            What I Do Today
          </h2>

          <div
            className="
              rounded-xl
              border border-neutral-200 dark:border-neutral-700
              bg-white dark:bg-[#111827]
              p-8
              shadow-sm
              transition-all duration-200 ease-out
              hover:-translate-y-[2px]
              hover:shadow-md
              hover:border-blue-500/40
              dark:hover:border-blue-400/40
            "
          >
            <p className="text-neutral-600 dark:text-neutral-400">
              Today, I design and implement AI automation systems, sales-driven
              chatbots, and structured CRM workflows. These systems are built
              to capture leads, follow up intelligently, and move prospects
              through a clear, revenue-focused pipeline.
            </p>
          </div>
        </section>

        {/* WHY CLIENTS TRUST ME */}
        <section className="space-y-12">
          <h2 className="text-xs uppercase tracking-[0.22em] text-blue-500/80">
            Why Clients Trust Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Reliability",
                text: "I deliver what I commit to and keep projects moving without unnecessary friction."
              },
              {
                title: "Clear Communication",
                text: "You always know what’s happening, why decisions are made, and what comes next."
              },
              {
                title: "Calm Under Pressure",
                text: "I handle complex systems and edge cases methodically, without panic or shortcuts."
              },
              {
                title: "System Thinking",
                text: "I simplify complex problems into clear, scalable automation systems."
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

        {/* EXPERIENCE SNAPSHOT */}
        <section className="space-y-12">
          <h2 className="text-xs uppercase tracking-[0.22em] text-blue-500/80 text-center">
            Experience Snapshot
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[720px] mx-auto">
            {[
              { value: "20+", label: "Clients Worked With" },
              { value: "50+", label: "Projects Delivered" }
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

        {/* CTA */}
        <section className="flex justify-center">
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
              Ready to transform your business?
            </h2>

            <p className="text-neutral-600 dark:text-neutral-400">
              Let’s talk through your challenges and design automation systems
              that save time, reduce errors, and scale with you.
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
