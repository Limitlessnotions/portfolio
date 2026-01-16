export default function About() {
  return (
    <main className="px-6 pt-32 pb-44">
      <div className="max-w-[760px] mx-auto space-y-32">

        {/* INTRO */}
        <section className="space-y-6">
          <h1 className="text-[30px] md:text-[36px] font-medium leading-[1.25]">
            About me
          </h1>

          <p className="text-[17px] leading-[1.75] text-neutral-600 dark:text-neutral-400">
            I’m an Automation Engineer focused on building smart systems that help
            businesses capture leads, follow up consistently, and drive sales
            without relying on manual effort.
          </p>
        </section>

        {/* JOURNEY */}
        <section className="space-y-6">
          <h2 className="text-xs uppercase tracking-[0.22em] text-neutral-400">
            My Journey
          </h2>

          <p className="text-[16px] leading-[1.75] text-neutral-600 dark:text-neutral-400">
            I started my career in graphic design, helping businesses improve how
            they looked. From there, I moved into web development, where I learned
            how structure, layout, and messaging influence user behavior.
          </p>

          <p className="text-[16px] leading-[1.75] text-neutral-600 dark:text-neutral-400">
            Over time, I began to notice a recurring problem. Many businesses had
            websites that didn’t convert at all. Others had decent websites but
            no proper system to capture leads. And even when leads were collected,
            there was often no structured follow-up. At the same time, teams were
            drowning in manual tasks that consumed time and energy.
          </p>

          <p className="text-[16px] leading-[1.75] text-neutral-600 dark:text-neutral-400">
            That realization pushed me toward automation. As I started building
            automated workflows, I saw how much time and money businesses could
            save when systems were set up correctly. This naturally led me into
            CRM systems, and eventually into AI-powered automation and chatbots.
          </p>

          <p className="text-[16px] leading-[1.75] text-neutral-600 dark:text-neutral-400">
            What began as working with individual tools evolved into something
            bigger: system thinking. Instead of isolated solutions, I now focus
            on building connected systems that work together reliably.
          </p>
        </section>

        {/* WHAT I DO TODAY */}
        <section className="space-y-6">
          <h2 className="text-xs uppercase tracking-[0.22em] text-neutral-400">
            What I Do Today
          </h2>

          <p className="text-[16px] leading-[1.75] text-neutral-600 dark:text-neutral-400">
            Today, I work as an Automation Engineer designing AI-powered systems
            that drive sales and capture leads into well-structured CRM pipelines.
            These systems automate follow-ups, reduce manual work, and ensure
            businesses respond to opportunities consistently.
          </p>

          <p className="text-[16px] leading-[1.75] text-neutral-600 dark:text-neutral-400">
            My work typically spans AI automation, CRM setup and optimization,
            sales and support chatbots across web and messaging platforms, workflow
            automation, web systems, and visual design where it supports business
            outcomes.
          </p>
        </section>

        {/* WHY CLIENTS TRUST ME */}
        <section className="space-y-6">
          <h2 className="text-xs uppercase tracking-[0.22em] text-neutral-400">
            Why Clients Trust Me
          </h2>

          <p className="text-[16px] leading-[1.75] text-neutral-600 dark:text-neutral-400">
            Clients trust me because I’m reliable, communicative, and calm under
            pressure. I take time to understand the real problem before proposing
            a solution, and I focus on clarity rather than complexity.
          </p>

          <p className="text-[16px] leading-[1.75] text-neutral-600 dark:text-neutral-400">
            I’m particularly valued for my ability to simplify complex workflows
            and translate them into systems that teams can actually use. My goal
            is always to deliver solutions that feel intuitive, stable, and easy
            to maintain.
          </p>
        </section>

        {/* EXPERIENCE & TOOLS */}
        <section className="space-y-6">
          <h2 className="text-xs uppercase tracking-[0.22em] text-neutral-400">
            Experience & Tools
          </h2>

          <p className="text-[16px] leading-[1.75] text-neutral-600 dark:text-neutral-400">
            I’ve worked with 20+ clients across 50+ projects, building automation
            and system solutions for different business models.
          </p>

          <p className="text-[16px] leading-[1.75] text-neutral-600 dark:text-neutral-400">
            My experience includes CRM platforms like GoHighLevel, HubSpot, and
            Airtable; automation tools such as Zapier, Make, and n8n; chatbot
            systems across websites, WhatsApp, Facebook, and Instagram; and
            chatbot tools including ManyChat, Landbot, and Chatbase.
          </p>

          <p className="text-[16px] leading-[1.75] text-neutral-600 dark:text-neutral-400">
            I also bring a design background, using tools like CorelDRAW,
            Photoshop, and Figma, which helps me build systems that are not only
            functional but clear and user-friendly.
          </p>

          <p className="text-[16px] leading-[1.75] text-neutral-600 dark:text-neutral-400">
            My certifications include Zapier Expert, n8n Specialist, Airtable
            Expert, and AI Automation Expert.
          </p>
        </section>

        {/* CTA */}
        <section className="space-y-6">
          <h2 className="text-xs uppercase tracking-[0.22em] text-neutral-400">
            Next Step
          </h2>

          <p className="text-[16px] leading-[1.75] text-neutral-600 dark:text-neutral-400">
            Ready to transform your business? Let’s chat about your challenges and
            explore how automation can help you save time, reduce errors, and
            scale more efficiently.
          </p>

          <a
            href="https://calendar.app.google/oZm3C48pYcJPJ7di7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block underline underline-offset-4 transition-colors hover:text-neutral-900 dark:hover:text-neutral-200"
          >
            Book a free consultation
          </a>
        </section>

      </div>
    </main>
  );
}
