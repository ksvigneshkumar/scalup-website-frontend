"use client";
import Counter from "../../utils/Counter";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.grid} />

      <div className={styles.badge}>
        <span className={styles.dot} />
        Trusted by 50,000+ businesses across 40+ countries
      </div>

      <h1 className={styles.title}>
        Join 50,000+ companies driving{" "}
        <span className={styles.grad}>exponential growth</span>
      </h1>

      <p className={styles.desc}>
        One suite for all your sales and marketing needs. AI-powered tools for
        inbound growth, lead capturing, outreach, and building AI agents.
      </p>

      <div className={styles.btns}>
        <a href="#" className={styles.btnPrimary}>Start for free — no credit card needed</a>
        <a href="#" className={styles.btnSecondary}> Watch 2-min Demo</a>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <strong><Counter target={50000} suffix="+" /></strong>
          <span>Businesses</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <strong><Counter target={40} suffix="+" /></strong>
          <span>Countries</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <strong><Counter target={120} suffix="%" /></strong>
          <span>Avg revenue growth</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <strong><Counter target={60} suffix="+" /></strong>
          <span>Integrations</span>
        </div>
      </div>
    </section>
  );
}
