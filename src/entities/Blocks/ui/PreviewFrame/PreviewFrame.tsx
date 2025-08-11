import { DotsButton } from "@/shared/ui/DotsButton/DotsButton";
import { Indicator } from "@/shared/ui/Indicator/Indicator";
import { useHandleCountChange } from "./hooks/useHandleCountChange";
import { getTitleClass } from "./lib/getTitleClass";

import type { PreviewFrameProps } from "@/entities/Blocks/model/types";

import styles from "./PreviewFrame.module.scss";

export const PreviewFrame = ({ blocks }: PreviewFrameProps) => {
  const handleCountChange = useHandleCountChange();

  return (
    <div className={styles.PreviewFrameList}>
      {blocks.map((block) => {
        const isChanged =
          block.originalCount !== undefined &&
          block.count !== block.originalCount;
        const titleClass = getTitleClass(block.count, block.originalCount);

        return (
          <div key={block.id} className={styles.PreviewFrameListBlock}>
            <img
              src={block.image}
              alt="Фото Заметки"
              className={styles.PreviewFrameListImage}
            />
            <p
              className={`${styles.PreviewFrameListTitle} ${styles[titleClass]}`}
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
