import { footerLinks } from "../../data/siteData";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <a href="#" className={styles.logo}>
            <span className={styles.logoIcon}>S</span>
            <span>Scalup</span>
          </a>
          <p>One suite for all your sales and marketing needs. AI-powered and built for growth.</p>
        </div>

        <div className={styles.columns}>
          <div>
            <p className={styles.colLabel}>PRODUCTS</p>
            {footerLinks.products.map((l, i) => <a key={i} href="#">{l}</a>)}
          </div>
          <div>
            <p className={styles.colLabel}>COMPANY</p>
            {footerLinks.company.map((l, i) => <a key={i} href="#">{l}</a>)}
          </div>
          <div>
            <p className={styles.colLabel}>POLICY</p>
            {footerLinks.policy.map((l, i) => <a key={i} href="#">{l}</a>)}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 Scalup. All rights reserved.</p>
        <div className={styles.socials}>
          {["Twitter", "LinkedIn", "Facebook", "Instagram", "Reddit"].map((s, i) => (
            <a key={i} href="#">{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
