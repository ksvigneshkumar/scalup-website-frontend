import Navbar     from "./components/Navbar/Navbar";
import Hero       from "./components/Hero/Hero";
import Features   from "./components/Features/Features";
import Products   from "./components/Products/Products";
import Integrations from "./components/Integrations/Integrations";
import FAQ        from "./components/FAQ/FAQ";
import Company    from "./components/Company/Company";
import Pricing    from "./components/Pricing/Pricing";
import Compare    from "./components/Compare/Compare";
import FooterCTA  from "./components/FooterCTA/FooterCTA";
import Footer     from "./components/Footer/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Integrations />
      <FAQ />
      <Company />
      <Pricing />
      <Compare />
      <FooterCTA />
      <Footer />
    </main>
  );
}
