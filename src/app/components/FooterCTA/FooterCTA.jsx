import styles from "./FooterCTA.module.css";

export default function FooterCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} />
      <p className={styles.label}>GET STARTED TODAY</p>
      <h2 className={styles.heading}>
        Stop stitching tools.<br />
        <span className={styles.grad}>Start growing.</span>
      </h2>
      <p className={styles.sub}>
        Join 50,000+ businesses that replaced their fragmented tool stack with
        Scalup and saw 120% revenue growth.
      </p>
      <div className={styles.btns}>
        <a href="#" className={styles.btnPrimary}>Started for free</a>
        <a href="#" className={styles.btnSecondary}>Get a Personalized demo</a>
      </div>
      <p className={styles.note}>
        No credit card required · Free migration · Cancel anytime
      </p>
    </section>
  );
}
