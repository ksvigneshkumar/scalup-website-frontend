"use client";
import { useState } from "react";
import useReveal from "../../hooks/useReveal";
import { products } from "../../data/siteData";
import styles from "./Products.module.css";
export default function Products() {
  const [tab, setTab] = useState("marketing");
  const { ref, visible } = useReveal();
  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>OUR PRODUCTS</p>
      <h2 className={styles.sectionTitle}>10 tools. One suite.</h2>
      <div className={styles.tabRow}>
        {["marketing", "sales", "support"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`${styles.tabBtn} ${tab === t ? styles.tabActive : ""}`}
          >
            {t}
          </button>
        ))}
      </div>
      <div ref={ref} className={`${styles.grid3} ${visible ? styles.visible : ""}`}>
        {products[tab].map((p, i) => (
          <div
            key={`${tab}-${i}`}
            className={`${styles.productCard} ${styles.fadeIn}`}
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <div className={styles.productEmoji}>{p[0]}</div>
            <h3>{p[1]}</h3>
            <p>{p[2]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
