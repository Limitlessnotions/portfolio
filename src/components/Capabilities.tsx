const capabilities = [
  {
    title: "WhatsApp Automation",
    description:
      "End-to-end WhatsApp systems using Meta-approved flows for sales, support, and operations.",
  },
  {
    title: "AI Chatbots & Assistants",
    description:
      "Custom GPT-powered assistants for lead qualification, onboarding, and customer support.",
  },
  {
    title: "Backend Systems",
    description:
      "Production-ready Node.js and Firebase logic powering real business workflows.",
  },
  {
    title: "OCR & Data Extraction",
    description:
      "Automated extraction of structured data from images, receipts, and uploaded documents.",
  },
  {
    title: "Payments & Fintech Logic",
    description:
      "Payment-aware systems including credits, vouchers, repayments, and transaction tracking.",
  },
  {
    title: "CRM & Workflow Automation",
    description:
      "Zapier, Make, and custom integrations that eliminate manual operational work.",
  },
];

export default function Capabilities() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold mb-12">What I build</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((item) => (
          <div
            key={item.title}
            className="rounded-lg border border-neutral-200 p-6"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 text-neutral-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
