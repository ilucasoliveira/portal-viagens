import Link from "next/link";
import styles from "@/styles/Portal.module.css";
export default function NotFound() { return <section className={styles.section}><div className={styles.intro}><p className={styles.eyebrow}>404 · FORA DO ROTEIRO</p><h1>Esse caminho<br />não está no mapa.</h1><p>Vamos encontrar um destino que existe?</p><Link className={styles.button} href="/destinos">Explorar destinos ↗</Link></div></section>; }
