"use client";
import useReveal from "../../hooks/useReveal";
import { features } from "../../data/siteData";
import styles from "./Features.module.css";
export default function Features() {
  const { ref, visible } = useReveal();
  return (
    <section className={styles.section} id="products">
      <p className={styles.eyebrow}>WHAT SCALUP DOES</p>
      <h2 className={styles.sectionTitle}>Your growth stack, unified</h2>
      <p className={styles.sectionSub}>A flexible sales and marketing suite that helps you go from lead to revenue.</p>
      <div ref={ref} className={`${styles.grid3} ${visible ? styles.visible : ""}`}>
        {features.map((f, i) => (
          <div
            key={i}
            className={styles.featureCard}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className={styles.featureIconBox} style={{ background: f.iconBg }}>
              <span>{f.icon}</span>
            </div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <div className={styles.badgeRow}>
              {f.badges.map((b, j) => (
                <span key={j} className={styles.chip}>{b}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
