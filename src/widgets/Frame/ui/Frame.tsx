import { NoteFrame } from "@entities/Blocks/ui/NoteFrame/NoteFrame";
import { PreviewFrame } from "@entities/Blocks/ui/PreviewFrame/PreviewFrame";
import { useAppSelector } from "@/shared/hooks";
import { selectBlocks } from "@entities/Blocks/model/blockSlice";
import { ErrorBoundary } from "@/shared/ui/ErrorBoundary/ErrorBoundary";
import { Fallback } from "@/shared/ui/Fallback/Fallback";
import { DevControls } from "@features/DevControl/DevControl";

import styles from "./Frame.module.scss";

export const Frame = () => {
  const blocks = useAppSelector(selectBlocks);

  const blocksWithImage = blocks.filter((b) => b.image?.trim() !== "");
  const blocksWithoutImage = blocks.filter((b) => !b.image?.trim());

  return (
    <section className={styles.section}>
      <ErrorBoundary fallback={<Fallback message="Ошибка в NoteFrame" />}>
        <NoteFrame blocks={blocksWithoutImage} />
      </ErrorBoundary>

      <ErrorBoundary fallback={<Fallback message="Ошибка в PreviewFrame" />}>
        <PreviewFrame blocks={blocksWithImage} />
      </ErrorBoundary>

      <DevControls />
    </section>
  );
};
