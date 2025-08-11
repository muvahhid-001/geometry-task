import { DotsButton } from "@/shared/ui/DotsButton/DotsButton";
import { Indicator } from "@/shared/ui/Indicator/Indicator";
import type { NoteFrameProps } from "@/entities/Blocks/model/types";
import { getTitleClass } from "./lib/getTitleClass";
import { useHandleCountChange } from "./hooks/useHandleCountChange";

import styles from "./NoteFrame.module.scss";

export const NoteFrame = ({ blocks }: NoteFrameProps) => {
  const handleCountChange = useHandleCountChange();

  return (
    <div className={styles.NoteFrameList}>
      {blocks.map((block) => {
        const isChanged =
          block.originalCount !== undefined &&
          block.count !== block.originalCount;

        return (
          <div key={block.id} className={styles.NoteFrameListBlock}>
            <p className={getTitleClass(block)}>{block.text}</p>
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
