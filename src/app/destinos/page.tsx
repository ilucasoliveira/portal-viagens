import type { Metadata } from "next";
import CardDestino from "@/components/CardDestino";
import { destinos } from "@/data/destinos";
import styles from "@/styles/Portal.module.css";
export const metadata: Metadata = { title: "Destinos" };
export default function Destinos() {
  return <section className={styles.section}><div className={styles.intro}><p className={styles.eyebrow}>DESCUBRA O BRASIL</p><h1>Qual é a sua<br /><em>próxima parada?</em></h1><p>Do encontro com o mar às ladeiras cheias de história.<br />Escolha um destino e comece a imaginar sua viagem.</p></div><div className={styles.listHeader}><h2>Todos os destinos</h2><span>{destinos.length} lugares para descobrir</span></div><div className={styles.grid}>{destinos.map(destino => <CardDestino key={destino.id} destino={destino} />)}</div></section>;
}
