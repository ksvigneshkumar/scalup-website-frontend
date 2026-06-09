"use client";
import useReveal from "../../hooks/useReveal";
import { companyCards } from "../../data/siteData";
import styles from "./Company.module.css";

export default function Company() {
  const { ref, visible } = useReveal();

  return (
    <section className={styles.section} id="company">
      <p className={styles.label}>COMPANY</p>
      <h2 className={styles.heading}>The Complete AI Growth Suite for Every Company</h2>

      <div ref={ref} className={`${styles.grid} ${visible ? styles.visible : ""}`}>
        {companyCards.map((c, i) => (
          <div key={i} className={styles.card} style={{ transitionDelay: `${i * 100}ms` }}>
            <p className={styles.cardLabel}>{c.label}</p>
            <h3 className={styles.cardHeading}>{c.heading}</h3>
            <p className={styles.cardDesc}>{c.desc}</p>
            <hr className={styles.divider} />
            <ul className={styles.featureList}>
              {c.features.map((f, j) => (
                <li key={j}>
                  <span className={styles.check}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
