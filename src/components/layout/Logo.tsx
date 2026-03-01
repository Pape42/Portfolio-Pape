"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <Link 
        href="/" 
        className={styles.logoLink} 
        aria-label="Retour à la landing"
      >
        <Image
          src="/logo/logo-trounoir.svg"
          alt="Logo Pape Bathily"
          width={65}
          height={65}
          priority
          className={styles.logo}
        />
      </Link>
    </div>
  );
}