"use client";
import useReveal from "../../hooks/useReveal";
import { companyCards } from "../../data/siteData";
import styles from "./Company.module.css";
export default function Company() {
  const { ref, visible } = useReveal();
  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>COMPANY</p>
      <h2 className={styles.sectionTitle}>The Complete AI Growth Suite for Every Company</h2>
      <div ref={ref} className={`${styles.grid3} ${visible ? styles.visible : ""}`}>
        {companyCards.map((c, i) => (
          <div
            key={i}
            className={styles.companyCard}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <h3 className={styles.companyLabel}>{c.title}</h3>
            <p className={styles.companyDesc}>{c.desc}</p>
            <hr className={styles.hr} />
            <ul className={styles.checkList}>
              {c.features.map((f, j) => (
                <li key={j}>
                  <span className={styles.checkMark}>✓</span>{f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
