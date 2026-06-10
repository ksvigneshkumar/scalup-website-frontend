import styles from "./FooterCTA.module.css";

export default function FooterCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.ctaGlow} />
      <p className={styles.eyebrow}>GET STARTED TODAY</p>
      <h2 className={styles.ctaTitle}>
        Stop stitching tools.<br />Start growing.
      </h2>
      <p className={styles.ctaDesc}>
        Join 50,000+ businesses that replaced their fragmented tool stack with Scalup
        and saw 120% revenue growth.
      </p>
      <div className={styles.ctaBtns}>
        <button className={styles.primaryBtn}>Start for free</button>
        <button className={styles.ghostBtn}>Get a Personalized demo</button>
      </div>
      <p className={styles.ctaFine}>No credit card required · Free migration · Cancel anytime</p>
    </section>
  );
}
