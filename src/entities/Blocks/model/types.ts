export type Frame = {
  id: string;
  text: string;
  image?: string;
  content?: {
    id: string;
    text: string;
    image?: string;
  };
  count: number;
  originalCount?: number;
};

export type NoteFrameProps = {
  blocks: Frame[];
};

export type FramePreview = {
  id: string;
  text: string;
  image?: string;
  content?: { id: string; text: string; image?: string };
  count: number;
  originalCount?: number;
};
export type PreviewFrameProps = { blocks: FramePreview[] };
