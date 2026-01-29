import styles from "./styles/index.module.css";
import icon from "../../../../assets/images/Clipboard.png";

export function EmptyState() {
  return (
    <div className={styles.container}>
      <img src={icon} alt="" className={styles.icon} />
      <h3>У вас нет задач</h3>
      <p>Добавьте первую задачу</p>
    </div>
  );
}
