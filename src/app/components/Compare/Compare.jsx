"use client";
import useReveal from "../../hooks/useReveal";
import { comparisonFeatures } from "../../data/siteData";
import styles from "./Compare.module.css";
function Cell({ val, isScalup }) {
  if (val === "y") return <span className={styles.cellGreen}>✓</span>;
  if (val === "n") return <span className={styles.cellRed}>✗</span>;
  if (val === "p") return <span className={styles.cellYellow}>Partial</span>;
  return <span className={isScalup ? styles.cellGreen : styles.cellMuted}>{val}</span>;
}
export default function Compare() {
  const { ref, visible } = useReveal();
  return (
    <section className={styles.section} id="compare">
      <p className={styles.eyebrow}>WHY SWITCH</p>
      <h2 className={styles.sectionTitle}>Scalup vs the rest</h2>
      <p className={styles.sectionSub}>Stop duct-taping 8 tools together. Here&apos;s how we stack up.</p>
      <div ref={ref} className={`${styles.tableWrap} ${visible ? styles.visible : ""}`}>
        <table className={styles.compareTable}>
          <thead>
            <tr>
              <th>Features</th>
              <th className={styles.scalupCol}><span className={styles.scalupLabel}>✦ Scalup</span></th>
              <th>HubSpot</th>
              <th>MailChimp</th>
              <th>Instantly</th>
            </tr>
          </thead>
          <tbody>
            {comparisonFeatures.map(([feat, s, h, m, n], i) => (
              <tr key={i}>
                <td className={styles.featCell}>{feat}</td>
                <td className={styles.scalupCol}><Cell val={s} isScalup /></td>
                <td><Cell val={h} /></td>
                <td><Cell val={m} /></td>
                <td><Cell val={n} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
