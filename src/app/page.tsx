import Image from "next/image";

export default function Home() {
  return (
    <main id="home" className="px-6 pt-32 pb-44">
      <div className="max-w-[900px] mx-auto space-y-36">

        <section className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-12 items-center">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/Silas.jpeg"
              alt="Silas Momoh"
              width={144}
              height={144}
              priority
              className="rounded-full object-cover shadow-sm ring-1 ring-neutral-200 dark:ring-neutral-700"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-[32px] md:text-[38px] font-medium leading-[1.25]">
              I design AI-powered systems that reduce operational friction
              and turn leads into revenue at scale.
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
                className="rounded-md bg-blue-600 px-5 py-2.5 text-white text-sm transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                Book a Strategy Call
              </a>

              <a
                href="/#services"
                className="rounded-md border border-neutral-300 px-5 py-2.5 text-sm transition-colors hover:border-blue-600 dark:border-neutral-600 dark:hover:border-blue-400"
              >
                View Services
              </a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
