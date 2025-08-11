import styles from "./NoteFrame.module.scss";
import { DotsButton } from "@/shared/ui/DotsButton/DotsButton";
import { Indicator } from "@/shared/ui/Indicator/Indicator";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { setCount } from "@/entities/Blocks/model/blockSlice";

import type { NoteFrameProps } from "@/entities/Blocks/model/types";

export const NoteFrame = ({ blocks }: NoteFrameProps) => {
  const dispatch = useDispatch();

  const handleCountChange = useCallback(
    (id: string, newCount: number) => {
      if (newCount < 0) return;
      dispatch(setCount({ id, count: newCount }));
    },
    [dispatch]
  );

  return (
    <div className={styles.NoteFrameList}>
      {blocks.map((block) => {
        const isChanged =
          block.originalCount !== undefined &&
          block.count !== block.originalCount;

        return (
          <div key={block.id} className={styles.NoteFrameListBlock}>
            <p
              className={`${styles.NoteFrameListTitle} ${
                block.count > 101 ? styles.NoteFrameListTitleSpacing : ""
              }`}
            >
              {block.text}
            </p>
            <DotsButton />

            <Indicator
              count={block.count}
              isActive={isChanged}
              onClick={() => handleCountChange(block.id, block.count + 1)}
            />
          </div>
        );
      })}
    </div>
  );
};
