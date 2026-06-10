"use client";
import Counter from "../../utils/Counter";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.heroGrid} />

      <p className={styles.badge}>
        <span className={styles.badgeDot} />
        Trusted by 50,000+ businesses across 40+ countries
      </p>

      <h1 className={styles.heroTitle}>
        Join 50,000+ 
        <br />companies
         driving <br />
        <span className={styles.heroGradient}>exponential
          <br /> growth</span>
      </h1>

      <p className={styles.heroDesc}>
        One suite for all your sales and marketing needs. AI-powered tools for inbound growth,
        lead capturing, outreach, and building AI agents.
      </p>

      <div className={styles.heroBtns}>
        <button className={styles.primaryBtn}>Start for free — no credit card needed</button>
        <button className={styles.ghostBtn}>▶ Watch 2-min Demo</button>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.stat}>
          <strong><Counter target={50000} suffix="+" /></strong>
          <span>Businesses</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <strong><Counter target={40} suffix="+" /></strong>
          <span>Countries</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <strong><Counter target={120} suffix="%" /></strong>
          <span>Avg Revenue Growth</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <strong><Counter target={60} suffix="+" /></strong>
          <span>Integrations</span>
        </div>
      </div>
    </section>
  );
}
