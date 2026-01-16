export default function Home() {
  return (
    <main className="px-6 py-24">
      <div className="max-w-2xl mx-auto space-y-16">

        {/* Intro */}
        <section className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            I build AI-powered automation systems for real businesses.
          </h1>

          <p className="text-lg text-neutral-600">
            I design and implement WhatsApp automation, AI assistants,
            backend workflows, and operational systems that reduce
            manual work and scale reliably.
          </p>

          <p className="text-neutral-500">
            Currently working on WhatsApp-based fintech and operations systems.
          </p>
        </section>

        {/* Selected Work */}
        <section className="space-y-8">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500">
            Selected Work
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-medium">
                Paylite — WhatsApp Credit Platform
              </h3>
              <p className="text-neutral-600">
                AI-powered WhatsApp system for credit requests,
                vouchers, and repayments.
              </p>
            </div>

            <div>
              <h3 className="font-medium">
                Restaurant Operations Automation
              </h3>
              <p className="text-neutral-600">
                OCR-driven daily reporting across five restaurant locations.
              </p>
            </div>

            <div>
              <h3 className="font-medium">
                Joyous Legacy
              </h3>
              <p className="text-neutral-600">
                AI-generated memorial stories and automated keepsake delivery.
              </p>
            </div>
          </div>
        </section>

        {/* What I Do */}
        <section className="space-y-4">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500">
            What I Do
          </h2>

          <p className="text-neutral-600">
            I work across WhatsApp automation, AI chatbots, backend systems,
            OCR pipelines, payments logic, and workflow automation using
            Node.js, Firebase, and modern automation tools.
          </p>
        </section>

        {/* Process */}
        <section className="space-y-4">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500">
            Process
          </h2>

          <p className="text-neutral-600">
            My work usually starts with understanding the real workflow,
            then designing the system, building and testing it in production,
            and handing over a stable, documented solution.
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500">
            Contact
          </h2>

          <p className="text-neutral-600">
            If you want to work together, reach me at{" "}
            <a
              href="mailto:silasmomoh2017@gmail.com"
              className="underline"
            >
              silasmomoh2017@gmail.com
            </a>{" "}
            or{" "}
            <a
              href="https://calendly.com/YOUR-LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              book a call
            </a>.
          </p>
        </section>

      </div>
    </main>
  );
}
