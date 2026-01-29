import styles from "./styles/index.module.css";

export function TodoInput() {
  return (
    <>
      <form className={styles.container}>
        <input
          type="text"
          placeholder="Введите задачу"
          className={styles.input_place}
        />
        <button className={styles.add_button}>Добавить задачу</button>
      </form>
    </>
  );
}
