import { productConfig } from "../config/product";
import CheckoutButton from "./CheckoutButton";
import { AudienceSection, FaqSection, FinalCtaSection, OfferSection } from "./DecisionSections";
import { BonusesSection, ProductInteriorSection, SimpleUseSection } from "./ExperienceSections";
import Hero from "./Hero";
import Journey from "./Journey";
import { MechanismSection, ProblemSection } from "./ProblemMechanism";
import StickyMobileCta from "./StickyMobileCta";

export default function Landing() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <a className="brand" href="#inicio">
          <span className="brand-mark" aria-hidden="true">N</span>
          <span><b>{productConfig.brandName}</b><small>{productConfig.productName}</small></span>
        </a>
        <CheckoutButton className="header-cta" label="ACESSAR O SISTEMA" location="header" />
      </header>

      <main id="conteudo">
        <Hero />
        <ProblemSection />
        <MechanismSection />
        <Journey />
        <SimpleUseSection />
        <ProductInteriorSection />
        <BonusesSection />
        <AudienceSection />
        <FaqSection />
        <OfferSection />
        <FinalCtaSection />
      </main>

      <footer className="site-footer">
        <div><span className="brand-mark" aria-hidden="true">N</span><strong>{productConfig.brandName}</strong></div>
        <p>{productConfig.productName} — organização e direção para o momento pós-edital.</p>
        <small>Este produto não promete aprovação e não substitui o estudo.</small>
      </footer>
      <StickyMobileCta />
    </div>
  );
}
