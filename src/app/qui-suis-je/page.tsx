"use client";

import Image from "next/image";
import styles from "./style.module.css";

export default function QuiSuisJe() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Qui suis-je</h1>

<div className={styles.page}>
  <div className={styles["page-text"]}>
    <p>Je m'appelle <strong>Pape Bathily</strong>, étudiant en <strong>informatique</strong> à l’IIM Digital School. Passionné par la <strong>cybersécurité</strong>, je me forme pour devenir <strong>analyste SOC</strong>, capable de surveiller, détecter et réagir aux incidents de sécurité pour protéger les systèmes et les données.</p>
    <p>Curieux et méthodique, je combine mes compétences techniques avec une veille constante sur les menaces émergentes. Je m’intéresse également au <strong>développement web</strong>, ce qui me permet d’avoir une vision globale des technologies numériques et de proposer des solutions innovantes.</p>
    <p>Mon objectif : <strong>apprendre un maximum de choses</strong> et développer mes compétences dans tous les domaines de l’informatique et de la cybersécurité.</p>
  </div>
</div>

      {/* 👇 Cadre CV */}
      <div className={styles.cvSection}>
        <h2>Mon CV</h2>

        <div className={styles.cvFrame}>
          <Image
            src="/CV_Pape_Bathily.png"
            alt="CV Pape Bathily"
            width={800}
            height={1000}
            className={styles.cvImage}
            priority
          />
        </div>

        <a
          href="/CV_Pape_Bathily.png" 
          download
          className={styles["cv-button"]}
        >
        <span>Télécharger mon CV</span>
        </a>
      </div>
    </main>
  );
}