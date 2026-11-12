import Image from "next/image";
import Link from "next/link";
import CardDestino from "@/components/CardDestino";
import { destinos } from "@/data/destinos";
import styles from "@/styles/Portal.module.css";
export default function Home() {
 return <><section className={styles.hero}>
  <Image src="/images/rio.jpg" alt="Montanhas e mar na paisagem do Rio de Janeiro" fill priority sizes="100vw" className={styles.heroImage} />
  <div className={styles.heroContent}><p className={styles.eyebrow}>PERTINHO OU LONGE. VÁ ALÉM.</p><h1>Seu próximo<br />“uau” está<br /><em>por aí.</em></h1><p>O Brasil tem muitas histórias esperando por você.<br />Encontre um lugar para começar a sua.</p><Link className={styles.button} href="/destinos">Explorar destinos <span aria-hidden="true">↗</span></Link></div>
  <span className={styles.caption}>01 / Rio de Janeiro, Brasil</span>
 </section>
 <section className={styles.section} aria-labelledby="favoritos"><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>UM PAÍS, MUITAS POSSIBILIDADES</p><h2 id="favoritos">Para onde a gente vai?</h2></div><Link className={styles.textLink} href="/destinos">Ver todos os destinos ↗</Link></div><div className={styles.grid}>{destinos.map(destino => <CardDestino key={destino.id} destino={destino} />)}</div></section>
 <section className={styles.banner}><p className={styles.eyebrow}>MENOS ROTINA, MAIS DESCOBERTAS</p><h2>A melhor parte da viagem?<br />Ter uma história para contar.</h2><Link className={styles.textLink} href="/destinos">Encontre sua próxima parada ↗</Link></section></>;
}
