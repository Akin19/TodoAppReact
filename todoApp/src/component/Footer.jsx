import styles from "./footer.module.css";
export default function Footer({ completeTodos, totalTodos, remainTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Complete Task: {completeTodos}</span>
      <span className={styles.item}>Total Task: {totalTodos}</span>
      <span className={styles.item}>Remain Task: {remainTodos}</span>
    </div>
  );
}
