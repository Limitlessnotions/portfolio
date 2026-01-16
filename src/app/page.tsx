export default function About() {
  return (
    <main className="px-6 pt-32 pb-44">
      <div className="max-w-[760px] mx-auto space-y-32">

        <section className="space-y-6">
          <h1 className="text-[30px] md:text-[36px] font-medium leading-[1.25]">
            About me
          </h1>

          <p className="text-[17px] leading-[1.75] text-neutral-600 dark:text-neutral-400">
            I’m an Automation Engineer focused on building AI-powered systems
            that help businesses capture leads, follow up consistently,
            and drive sales.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xs uppercase tracking-[0.22em] text-blue-500/80">
            My Journey
          </h2>

          <p className="text-neutral-600 dark:text-neutral-400">
            I started in graphic design, moved into web development, and gradually
            shifted into automation and AI systems as I saw how much time and
            money businesses were losing through manual processes.
          </p>

          <p className="text-neutral-600 dark:text-neutral-400">
            What began as working with individual tools evolved into system
            thinking — building connected workflows that actually work together.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xs uppercase tracking-[0.22em] text-blue-500/80">
            Why Clients Trust Me
          </h2>

          <p className="text-neutral-600 dark:text-neutral-400">
            Clients value my reliability, clear communication, calm approach,
            and ability to simplify complex problems into practical systems.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xs uppercase tracking-[0.22em] text-blue-500/80">
            Next Step
          </h2>

          <p className="text-neutral-600 dark:text-neutral-400">
            Ready to transform your business? Let’s talk through your challenges
            and design systems that scale.
          </p>

          <a
            href="https://calendar.app.google/oZm3C48pYcJPJ7di7"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4
                       transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            Book a free consultation
          </a>
        </section>

      </div>
    </main>
  );
}
