import { footerLinks } from "../../data/siteData";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
       
        <div className={styles.footerBrand}>
          <div className={styles.logo}>
            <span className={styles.logoS}>S</span> Scalup
          </div>
          <p>One suite for all your sales and marketing needs. AI-powered and built for growth.</p>
        </div>

      
        <div className={styles.footerCol}>
          <h4>PRODUCTS</h4>
          {footerLinks.products.map((p, i) => <a key={i} href="#">{p}</a>)}
        </div>

        
        <div className={styles.footerCol}>
          <h4>COMPANY</h4>
          {footerLinks.company.map((l, i) => <a key={i} href="#">{l}</a>)}
        </div>

     
        <div className={styles.footerCol}>
          <h4>POLICY</h4>
          {footerLinks.policy.map((l, i) => <a key={i} href="#">{l}</a>)}
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2026 Scalup. All rights reserved.</p>
        <div className={styles.socials}>
          {["Twitter","LinkedIn","Facebook","Instagram","Reddit"].map((s,i) => (
            <a key={i} href="#">{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
