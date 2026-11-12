import Image from "next/image";
import Link from "next/link";
import type { Destino } from "@/types/destino";
import styles from "./CardDestino.module.css";
export default function CardDestino({ destino }: { destino: Destino }) {
  return <article className={styles.card}><Link href={`/destinos/${destino.id}`} className={styles.link}>
    <div className={styles.photo}><Image src={destino.imagem} alt={destino.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw" /><span className={styles.tag}>{destino.categoria}</span></div>
    <div className={styles.body}><p>{destino.estado}</p><h3>{destino.nome}<span aria-hidden="true">↗</span></h3><span className={styles.cta}>Conhecer destino</span></div>
  </Link></article>;
}
