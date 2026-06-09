"use client";
import { useState } from "react";
import useReveal from "../../hooks/useReveal";
import { faqs } from "../../data/siteData";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const { ref, visible } = useReveal();

  return (
    <section className={styles.section} id="questions">
      <p className={styles.label}>FAQ</p>
      <h2 className={styles.heading}>Got questions?</h2>

      <div ref={ref} className={`${styles.list} ${visible ? styles.visible : ""}`}>
        {faqs.map((faq, i) => (
          <div key={i} className={styles.item} style={{ transitionDelay: `${i * 60}ms` }}>
            <button
              className={styles.question}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span>{faq.q}</span>
              <span className={`${styles.arrow} ${open === i ? styles.rotated : ""}`}>
                ›
              </span>
            </button>
            <div className={`${styles.answer} ${open === i ? styles.open : ""}`}>
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
