"use client";
import useReveal from "../../hooks/useReveal";
import { features } from "../../data/siteData";
import styles from "./Features.module.css";

export default function Features() {
  const { ref, visible } = useReveal();

  return (
    <section className={styles.section} id="features">
      <p className={styles.label}>WHAT SCALUP DOES</p>
      <h2 className={styles.heading}>Your growth stack, unified</h2>
      <p className={styles.sub}>
        A flexible sales and marketing suite that helps you go from lead to revenue.
      </p>

      <div ref={ref} className={`${styles.grid} ${visible ? styles.visible : ""}`}>
        {features.map((f, i) => (
          <div
            key={i}
            className={styles.card}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className={styles.iconBox} style={{ background: f.color }}>
              <span className={styles.iconEmoji}>{f.icon}</span>
            </div>
            <h3 className={styles.cardTitle}>{f.title}</h3>
            <p className={styles.cardDesc}>{f.desc}</p>
            <div className={styles.badges}>
              {f.badges.map((b, j) => (
                <span key={j} className={styles.badge}>{b}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
