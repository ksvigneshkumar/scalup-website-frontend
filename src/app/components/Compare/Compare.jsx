"use client";
import useReveal from "../../hooks/useReveal";
import { comparisonFeatures } from "../../data/siteData";
import styles from "./Compare.module.css";

function Cell({ value }) {
  if (value === true)      return <span className={styles.yes}>✓</span>;
  if (value === false)     return <span className={styles.no}>✗</span>;
  if (value === "Partial") return <span className={styles.partial}>Partial</span>;
  return <span className={styles.price}>{value}</span>;
}

export default function Compare() {
  const { ref, visible } = useReveal();

  return (
    <section className={styles.section} id="compare">
      <p className={styles.label}>WHY SWITCH</p>
      <h2 className={styles.heading}>Scalup vs the rest</h2>
      <p className={styles.sub}>Stop duct-taping 8 tools together. Here's how we stack up.</p>

      <div ref={ref} className={`${styles.wrapper} ${visible ? styles.visible : ""}`}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.featureCol}>Features</th>
              <th className={styles.scalupCol}>✦ Scalup</th>
              <th>HubSpot</th>
              <th>MailChimp</th>
              <th>Instantly</th>
            </tr>
          </thead>
          <tbody>
            {comparisonFeatures.map((row, i) => (
              <tr key={i}>
                <td className={styles.featureCol}>{row.feature}</td>
                <td className={`${styles.scalupCol} ${styles.scalupCell}`}>
                  <Cell value={row.scalup} />
                </td>
                <td><Cell value={row.hubspot} /></td>
                <td><Cell value={row.mailchimp} /></td>
                <td><Cell value={row.instantly} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
