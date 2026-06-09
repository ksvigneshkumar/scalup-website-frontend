"use client";
import useReveal from "../../hooks/useReveal";
import { pricingPlans } from "../../data/siteData";
import styles from "./Pricing.module.css";

export default function Pricing() {
  const { ref, visible } = useReveal();

  return (
    <section className={styles.section} id="pricing">
      <p className={styles.label}>Pricing</p>
      <h2 className={styles.heading}>Simple Pricing For Everyone</h2>

      <div ref={ref} className={`${styles.grid} ${visible ? styles.visible : ""}`}>
        {pricingPlans.map((plan, i) => (
          <div
            key={i}
            className={`${styles.card} ${plan.highlight ? styles.highlight : ""}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {plan.highlight && <span className={styles.badge}>Most Popular</span>}
            <p className={styles.planName}>{plan.name}</p>
            <div className={styles.price}>
              <span className={styles.dollar}>$</span>
              <span className={styles.amount}>{plan.price}</span>
              <span className={styles.period}>/{plan.period}</span>
            </div>
            <p className={styles.desc}>{plan.desc}</p>

            <ul className={styles.features}>
              {plan.features.map((f, j) => (
                <li key={j} className={f.included ? styles.included : styles.excluded}>
                  <span>{f.included ? "✓" : "-"}</span>
                  {f.text}
                </li>
              ))}
            </ul>

            <a href="#" className={`${styles.cta} ${plan.highlight ? styles.ctaHighlight : ""}`}>
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
