import Hero from "../components/Hero";
import ProofBar from "../components/ProofBar";
import Capabilities from "../components/Capabilities";
import CaseStudies from "../components/CaseStudies";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProofBar />
      <Capabilities />
      <CaseStudies />
      <ContactCTA />
    </main>
  );
}
