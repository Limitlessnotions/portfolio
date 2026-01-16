export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-neutral-50 border-t border-neutral-200"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">
          Ready to automate your business?
        </h2>

        <p className="mt-4 text-neutral-600">
          Let’s discuss your workflow and design a system that removes manual
          work and scales with your business.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://calendar.app.google/oZm3C48pYcJPJ7di7"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-black px-8 py-3 text-white font-medium"
          >
            Book a call
          </a>

          <a
            href="mailto:silasmomoh2017@gmail.com"
            className="rounded-md border border-neutral-300 px-8 py-3 font-medium"
          >
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
