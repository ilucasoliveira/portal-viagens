import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buscarDestino, destinos } from "@/data/destinos";
import styles from "@/styles/Portal.module.css";
type Props = { params: Promise<{ id: string }> };
export function generateStaticParams() { return destinos.map(({ id }) => ({ id })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const destino = buscarDestino((await params).id);
  return { title: destino?.nome ?? "Destino não encontrado", description: destino?.descricao };
}
export default async function DetalheDestino({ params }: Props) {
  const destino = buscarDestino((await params).id);
  if (!destino) notFound();
  return <article className={styles.section}><Link className={styles.textLink} href="/destinos">← Voltar para destinos</Link><div className={styles.detailHeading}><p className={styles.eyebrow}>{destino.estado} / {destino.categoria}</p><h1>{destino.nome}</h1></div><div className={styles.detailImage}><Image src={destino.imagem} alt={destino.alt} fill priority sizes="(max-width: 1200px) 100vw, 1200px" /></div><div className={styles.detailBody}><div><p className={styles.eyebrow}>CONHEÇA O DESTINO</p><h2>Uma paisagem.<br />Muitas descobertas.</h2><p>{destino.descricao}</p></div><aside className={styles.highlights}><h2>Para colocar no roteiro</h2><ul>{destino.destaques.map(item => <li key={item}>{item}</li>)}</ul></aside></div></article>;
}
