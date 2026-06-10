"use client";
import useReveal from "../../hooks/useReveal";
import { pricingPlans } from "../../data/siteData";
import styles from "./Pricing.module.css";
export default function Pricing() {
  const { ref, visible } = useReveal();
  return (
    <section className={styles.section} id="pricing">
      <p className={styles.eyebrow}>Pricing</p>
      <h2 className={styles.sectionTitle}>Simple Pricing For Everyone</h2>
      <div ref={ref} className={`${styles.priceGrid} ${visible ? styles.visible : ""}`}>
        {pricingPlans.map((p, i) => (
          <div
            key={i}
            className={`${styles.priceCard} ${p.highlight ? styles.priceHighlight : ""}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {p.highlight && <div className={styles.popularBadge}>Most Popular</div>}
            <h3 className={styles.planName}>{p.name}</h3>
            <div className={styles.planPrice}>
              <span className={styles.planDollar}>$</span>
              <span className={styles.planNum}>{p.price}</span>
            </div>
            <p className={styles.planPeriod}>{p.period}</p>
            <p className={styles.planSub}>{p.sub}</p>
            <ul className={styles.planFeatures}>
              {p.features.map((f, j) => (
                <li key={j} className={f.y ? styles.planIncluded : styles.planExcluded}>
                  <span>{f.y ? "✓" : "–"}</span> {f.t}
                </li>
              ))}
            </ul>
            <button className={p.highlight ? styles.primaryBtn : styles.outlineBtn}>
              {p.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
