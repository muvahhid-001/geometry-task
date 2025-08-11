import styles from "../NoteFrame.module.scss";
import type { Frame } from "@/entities/Blocks/model/types";

export const getTitleClass = (block: Frame): string => {
  let baseClass = styles.NoteFrameListTitle;

  if (block.count > 999)
    baseClass += ` ${styles.NoteFrameListTitleSpicingHight}`;
  else if (block.count > 99)
    baseClass += ` ${styles.NoteFrameListTitleSpicingLow}`;
  else if (block.count > 10)
    baseClass += ` ${styles.NoteFrameListTitleSpicing}`;

  if (block.count === 0) baseClass += ` ${styles.indicatorNone}`;

  if (
    block.originalCount !== undefined &&
    block.count !== block.originalCount
  ) {
    baseClass += ` ${styles.NoteFrameListTitleSpicingLow}`;
  }

  return baseClass;
};
