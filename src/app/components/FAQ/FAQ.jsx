"use client";
import { useState } from "react";
import useReveal from "../../hooks/useReveal";
import { faqs } from "../../data/siteData";
import styles from "./FAQ.module.css";
export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);
  const { ref, visible } = useReveal();
  return (
    <section className={styles.section} id="questions">
      <h2 className={styles.sectionTitle}>FAQ</h2>
      <p className={styles.sectionSub}>Got questions?</p>
      <div ref={ref} className={`${styles.faqList} ${visible ? styles.visible : ""}`}>
        {faqs.map(([q, a], i) => (
          <div
            key={i}
            className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ""}`}
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className={styles.faqHeader}>
              <span>{q}</span>
              <span className={styles.faqIcon}>{openFaq === i ? "−" : "+"}</span>
            </div>
            <div className={styles.faqBody}>
              <p>{a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
