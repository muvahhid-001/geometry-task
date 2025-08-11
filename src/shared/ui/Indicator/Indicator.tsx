import styles from "./Indicator.module.scss";

type IndicatorProps = {
  count: number;
  onClick?: () => void;
  isActive?: boolean;
  right?: string;
};

export const Indicator = ({
  count,
  onClick,
  isActive,
  right,
}: IndicatorProps) => {
  if (count === 0) return null;

  return (
    <p
      onClick={onClick}
      className={`${styles.indicator} ${isActive ? styles.active : ""}`}
      style={right ? { right } : undefined}
    >
      {isActive ? `+${count}` : count}
    </p>
  );
};
