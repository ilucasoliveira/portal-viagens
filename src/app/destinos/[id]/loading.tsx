import styles from "@/styles/Portal.module.css";

export default function LoadingDestino() {
  return (
    <section className={styles.section} aria-busy="true" aria-live="polite">
      <p className={styles.eyebrow}>PREPARANDO SUA PRÓXIMA PARADA</p>

      <p role="status">Carregando destino…</p>
    </section>
  );
}
