export default function Home() {
  return (
    <main className="px-6 pt-36 pb-44">
      <div className="max-w-[640px] mx-auto space-y-28">

        {/* Intro */}
        <section className="space-y-8">
          <h1 className="text-[28px] md:text-[34px] font-medium leading-[1.25] tracking-tight">
            I build AI-powered automation systems for real businesses.
          </h1>

          <p className="text-[17px] leading-[1.75] text-neutral-600">
            I build AI automation systems, sales-driven chatbots, and high-impact websites.
            My work focuses on CRM optimization, workflow automation, lead capture,
            and revenue-generating systems for growing businesses.
          </p>
        </section>

        {/* Selected Work */}
        <section className="space-y-14">
          <h2 className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">
            Selected Work
          </h2>

          <div className="space-y-14">
            <div className="space-y-1">
              <h3 className="font-medium leading-snug cursor-pointer transition-colors duration-200 hover:text-neutral-900">
                Paylite — WhatsApp Credit Platform
              </h3>
              <p className="text-[15px] leading-[1.6] text-neutral-500">
                AI-powered WhatsApp system for credit requests, vouchers,
                and repayments.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="font-medium leading-snug cursor-pointer transition-colors duration-200 hover:text-neutral-900">
                Restaurant Operations Automation
              </h3>
              <p className="text-[15px] leading-[1.6] text-neutral-500">
                OCR-driven daily reporting across five restaurant locations.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="font-medium leading-snug cursor-pointer transition-colors duration-200 hover:text-neutral-900">
                Joyous Legacy
              </h3>
              <p className="text-[15px] leading-[1.6] text-neutral-500">
                AI-generated memorial stories and automated keepsake delivery.
              </p>
            </div>
          </div>
        </section>

        {/* What I Do */}
        <section className="space-y-6">
          <h2 className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">
            What I Do
          </h2>

          <p className="text-[16px] leading-[1.7] text-neutral-600">
            I work across AI automation, smart chatbots, CRM systems,
            workflow automation, and conversion-focused websites,
            using modern tools and scalable backend logic.
          </p>
        </section>

        {/* Process */}
        <section className="space-y-6">
          <h2 className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">
            Process
          </h2>

          <p className="text-[16px] leading-[1.7] text-neutral-600">
            I start by understanding the real business workflow,
            then design, build, test, and deliver a stable system
            that removes manual work and scales with growth.
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-6">
          <h2 className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">
            Contact
          </h2>

          <p className="text-[16px] leading-[1.7] text-neutral-600">
            If you’d like to work together, reach me at{" "}
            <a
              href="mailto:silasmomoh2017@gmail.com"
              className="underline underline-offset-4 transition-colors duration-200 hover:text-neutral-900"
            >
              silasmomoh2017@gmail.com
            </a>{" "}
            or{" "}
            <a
              href="https://calendar.app.google/oZm3C48pYcJPJ7di7"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors duration-200 hover:text-neutral-900"
            >
              book a call
            </a>.
          </p>
        </section>

      </div>
    </main>
  );
}
