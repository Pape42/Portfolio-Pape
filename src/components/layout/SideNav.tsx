"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./SideNav.module.css";

const navItems = [
  {
    href: "/qui-suis-je",
    label: "Qui suis-je ?",
    icon: "icon-earth",
  },
  {
    href: "/projets",
    label: "Projets",
    icon: "icon-jupiter",
  },
  {
    href: "/a-propos",
    label: "À propos",
    icon: "icon-saturne",
  },
  {
    href: "/contact",
    label: "Contact",
    icon: "icon-venus",
  },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.link} ${isActive ? styles.active : ""}`}
            aria-current={isActive ? "page" : undefined}
          >
            <div className={styles.iconWrapper}>
              <Image
                src={`/icons/${item.icon}.png`}
                alt={item.label}
                width={40}
                height={40}
                className={styles.icon}
              />

              <Image
                src={`/icons/${item.icon}-hover.png`}
                alt=""
                width={40}
                height={40}
                className={styles.iconHover}
                aria-hidden="true"
              />
            </div>

            <span className={styles.tooltip}>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}