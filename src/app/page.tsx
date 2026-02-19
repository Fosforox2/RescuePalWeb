"use client";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>

      <div className={styles.layout}>

        {/* PANEL PERSONAJE */}
        <aside className={styles.characterPanel}>
          <div className={styles.characterStand}></div>
          <div className={styles.character}></div>
        </aside>

        {/* PANEL PRINCIPAL */}
        <main className={styles.mainPanel}>
          <h1>Quantum Forge</h1>
        </main>

      </div>

      {/* ACTION BAR */}
      <div className={styles.actionBar}>
        <button className={styles.gameButton}>Inventario</button>
        <button className={styles.gameButton}>Misiones</button>
        <button className={styles.gameButton}>Tienda</button>
      </div>

    </div>
  );
}
