import styles from "./Indicator.module.scss";

type IndicatorProps = {
  count: number;
  onClick?: () => void;
  isActive?: boolean;
};

export const Indicator = ({ count, onClick, isActive }: IndicatorProps) => {
  if (count === 0) return null;

  return (
    <p
      onClick={onClick}
      className={`${styles.indicator} ${isActive ? styles.active : ""}`}
    >
      {isActive ? `+${count}` : count}
    </p>
  );
};
