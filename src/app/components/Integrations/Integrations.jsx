"use client";
import useReveal from "../../hooks/useReveal";
import { integrations } from "../../data/siteData";
import styles from "./Integrations.module.css";

export default function Integrations() {
  const { ref, visible } = useReveal();

  return (
    <section className={styles.section} id="integrations">
      <p className={styles.eyebrow}>INTEGRATIONS</p>
      <h2 className={styles.sectionTitle}>Connects with tools you already use</h2>
      <p className={styles.sectionSub}>60+ direct integrations with no middleware needed.</p>

      <div ref={ref} className={`${styles.tagCloud} ${visible ? styles.visible : ""}`}>
        {integrations.map(([icon, name], idx) => (
          <span
            key={idx}
            className={styles.integTag}
            style={{ transitionDelay: `${idx * 40}ms` }}
          >
            {icon} {name}
          </span>
        ))}
      </div>
    </section>
  );
}
