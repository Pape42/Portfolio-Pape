"use client";

import styles from "./style.module.css";

export default function APropos() {
  return (
    <main className={styles.page}>
      <h1>À propos</h1>

      <div className={styles.page}>
  <div className={styles["page-text"]}>
    <p>Je suis <strong>Pape Bathily</strong>, étudiant en informatique à l’IIM Digital School et passionné par la cybersécurité. J’ai développé mes compétences en participant à de nombreux <strong>CTF (Capture The Flag)</strong> et en explorant des challenges pratiques sur <strong>TryHackMe</strong>.</p>

    <p>Je travaille actuellement sur la certification <strong>Sal1</strong> afin de renforcer mes connaissances en sécurité des systèmes et réseaux. Ces expériences m’ont permis de me familiariser avec l’analyse de vulnérabilités, la défense des infrastructures et la résolution de problèmes réels en cybersécurité.</p>

    <p>Voici quelques-uns des langages et outils que j’utilise régulièrement sur TryHackMe et pour mes projets :</p>

    <div className={styles.toolsGrid}>
      <img src="/images/python.png" alt="Python" title="Python" />
      <img src="/images/bash.webp" alt="Bash" title="Bash" />
      <img src="/images/powershell.svg" alt="PowerShell" title="PowerShell" />
      <img src="/images/sql.png" alt="SQL" title="SQL" />
      <img src="/images/html.png" alt="HTML" title="HTML" />
      <img src="/images/css.png" alt="CSS" title="CSS" />
      <img src="/images/js.png" alt="JavaScript" title="JavaScript" />
    </div>

    <p>Mon objectif : <strong>apprendre un maximum sur tout ce qui touche à mes passions</strong> et appliquer ces connaissances dans des projets concrets et stimulants.</p>
  </div>
  </div>
    </main>
  );
}