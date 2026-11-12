import Link from "next/link";
import Menu from "./Menu";
import styles from "./Layout.module.css";
export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={styles.layout}>
    <a className={styles.skip} href="#conteudo">Pular para o conteúdo</a>
    <header className={styles.header}><div className={styles.inner}>
      <Link href="/" className={styles.logo} aria-label="Bora — página inicial">bora<span>↗</span></Link>
      <Menu />
    </div></header>
    <main id="conteudo" className={styles.main}>{children}</main>
    <footer className={styles.footer}><div className={styles.inner}>
      <p><strong>bora ↗</strong> Um novo lugar. Uma nova história.</p>
      <p>Portal de viagens · Projeto de estudo<br /><a href="/creditos.txt">Créditos das fotografias</a></p>
    </div></footer>
  </div>;
}
