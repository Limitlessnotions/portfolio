export default function Home() {
  return (
    <main style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>
        I build AI-powered automation systems for real businesses
      </h1>

      <p style={{ marginTop: "1.5rem", fontSize: "1.1rem", color: "#555" }}>
        WhatsApp automation, AI chatbots, backend workflows, OCR, and payment-ready systems —
        designed to reduce manual work and increase revenue.
      </p>

      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
        <a href="#contact">Book a call</a>
        <a href="#case-studies">View case studies</a>
      </div>
    </main>
  );
}

