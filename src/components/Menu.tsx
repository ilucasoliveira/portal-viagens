"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Layout.module.css";
export default function Menu() {
  const pathname = usePathname();
  return <nav aria-label="Navegação principal" className={styles.nav}>
    <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>Início</Link>
    <Link href="/destinos" aria-current={pathname.startsWith("/destinos") ? "page" : undefined}>Destinos <span aria-hidden="true">↗</span></Link>
  </nav>;
}
