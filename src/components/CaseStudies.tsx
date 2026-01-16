const caseStudies = [
  {
    title: "Paylite — WhatsApp Credit Platform",
    summary:
      "AI-powered WhatsApp system for credit requests, vouchers, and repayments.",
    stack: ["WhatsApp API", "Node.js", "Firebase", "Paystack"],
    link: "#",
  },
  {
    title: "Restaurant Operations Automation",
    summary:
      "OCR-driven daily reporting system across 5 restaurant locations.",
    stack: ["WhatsApp", "OCR", "Zapier", "Google Sheets"],
    link: "#",
  },
  {
    title: "Joyous Legacy — AI Memorial System",
    summary:
      "Automated story generation and keepsake delivery using AI workflows.",
    stack: ["Wix", "GPT", "Make", "Canva"],
    link: "#",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-semibold">
          Featured case studies
        </h2>
        <p className="mt-4 text-neutral-600">
          Selected systems I’ve built for clients and product demos.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <div
            key={study.title}
            className="rounded-lg border border-neutral-200 p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold">
                {study.title}
              </h3>
              <p className="mt-3 text-neutral-600">
                {study.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-sm text-neutral-500">
                {study.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-neutral-200 px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={study.link}
              className="mt-6 inline-block text-sm font-medium text-black"
            >
              View case study →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
