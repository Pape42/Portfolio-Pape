"use client";

import styles from "./style.module.css";

const projects = [
  { 
    id: 1,
    title: "Aucun", 
    desc: "A venir..." 
  },
  { 
    id: 2,
    title: "Aucun", 
    desc: "A venir..." 
  },
  { 
    id: 3,
    title: "Aucun", 
    desc: "A venir..." 
  },
];

export default function Projets() {
  return (
    <main className={styles.page}>
      <h1>Projets</h1>

      <div className={styles.grid}>
        {projects.map((p) => (
          <div key={p.id} className={styles.card}>
            <h2>{p.title}</h2>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}