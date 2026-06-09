"use client";
import { useState } from "react";
import useReveal from "../../hooks/useReveal";
import { products } from "../../data/siteData";
import styles from "./Products.module.css";

const TABS = ["marketing", "sales", "support"];

export default function Products() {
  const [tab, setTab] = useState("marketing");
  const { ref, visible } = useReveal();

  return (
    <section className={styles.section} id="products">
      <p className={styles.label}>OUR PRODUCTS</p>
      <h2 className={styles.heading}>10 tools. One suite.</h2>

      <div className={styles.tabs}>
        {TABS.map((t) => (
          <button
            key={t}
            className={`${styles.tab} ${tab === t ? styles.active : ""}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div ref={ref} className={`${styles.grid} ${visible ? styles.visible : ""}`}>
        {products[tab].map((p, i) => (
          <div key={i} className={styles.card} style={{ animationDelay: `${i * 60}ms` }}>
            <span className={styles.icon}>{p.icon}</span>
            <h3 className={styles.name}>{p.name}</h3>
            <p className={styles.desc}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
