import styles from "./todoitem.module.css";
export default function TodoItems({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("deleetd", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    console.log("clicked", name);
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
    console.log(todos);
  }

  const s = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={s} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
