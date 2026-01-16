export default function Hero() {
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          I build AI-powered automation systems for real businesses
        </h1>

        <p className="mt-6 text-lg text-neutral-600">
          WhatsApp automation, AI chatbots, backend workflows, OCR, and payment-ready systems —
          designed to reduce manual work and increase revenue.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#contact"
            className="rounded-md bg-black px-6 py-3 text-white font-medium"
          >
            Book a call
          </a>

          <a
            href="#case-studies"
            className="rounded-md border border-neutral-300 px-6 py-3 font-medium"
          >
            View case studies
          </a>
        </div>
      </div>
    </section>
  );
}
