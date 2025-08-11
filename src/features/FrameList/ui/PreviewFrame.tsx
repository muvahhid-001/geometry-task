import styles from "./PreviewFrame.module.scss";
import { DotsButton } from "@/shared/ui/DotsButton/DotsButton";
import { Indicator } from "@/shared/ui/Indicator/Indicator";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { setCount } from "@/entities/Blocks/model/blockSlice";

import type { PreviewFrameProps } from "@/entities/Blocks/model/types";

export const PreviewFrame = ({ blocks }: PreviewFrameProps) => {
  const dispatch = useDispatch();

  const handleCountChange = useCallback(
    (id: string, newCount: number) => {
      if (newCount < 0) return;
      dispatch(setCount({ id, count: newCount }));
    },
    [dispatch]
  );

  return (
    <div className={styles.PreviewFrameList}>
      {blocks.map((block) => {
        const isChanged =
          block.originalCount !== undefined &&
          block.count !== block.originalCount;
        return (
          <div key={block.id} className={styles.PreviewFrameListBlock}>
            <img
              src={block.image}
              alt="Фото Заметки"
              className={styles.PreviewFrameListImage}
            />
            <p
              className={`${styles.PreviewFrameListTitle} ${
                block.count > 10 ? styles.PreviewFrameListTitleSpicing : ""
              } ${block.count === 0 ? styles.indicatorNone : ""} ${
                block.count !== block.originalCount
                  ? styles.PreviewFrameListTitleLow
                  : ""
              }`}
            >
              {block.text}
            </p>

            <DotsButton />
            <Indicator
              count={block.count}
              isActive={isChanged}
              onClick={() => handleCountChange(block.id, block.count + 1)}
              right={"12px"}
            />
          </div>
        );
      })}
    </div>
  );
};
