"use client";
import useReveal from "../../hooks/useReveal";
import { integrations } from "../../data/siteData";
import styles from "./Integrations.module.css";

export default function Integrations() {
  const { ref, visible } = useReveal();

  return (
    <section className={styles.section} id="integrations">
      <p className={styles.label}>INTEGRATIONS</p>
      <h2 className={styles.heading}>Connects with tools you already use</h2>
      <p className={styles.sub}>60+ direct integrations with no middleware needed.</p>

      <div ref={ref} className={`${styles.grid} ${visible ? styles.visible : ""}`}>
        {integrations.map((item, i) => (
          <div
            key={i}
            className={styles.tag}
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
