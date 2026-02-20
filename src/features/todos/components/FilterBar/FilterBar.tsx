import styles from "./styles/index.module.css";

type FilterBarProps = {
  currentFilter: "all" | "active" | "completed";
  onFilterChange: (filter: "all" | "active" | "completed") => void;
};

export function FilterBar({ currentFilter, onFilterChange }: FilterBarProps) {
  const filters = [
    { key: "all" as const, label: "Все" },
    { key: "active" as const, label: "Активные" },
    { key: "completed" as const, label: "Завершенные" },
  ];

  return (
    <div className={styles.container}>
      {filters.map((filter) => (
        <button
          key={filter.key}
          type="button"
          className={`${styles.filterButton}  ${
            currentFilter === filter.key ? styles.activeFilter : ""
          }`}
          onClick={() => onFilterChange(filter.key)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
