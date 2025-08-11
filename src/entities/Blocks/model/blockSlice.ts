import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type FrameContent = {
  id: string;
  text: string;
  image?: string;
};

export type Frame = {
  id: string;
  text: string;
  image?: string;
  content?: FrameContent;
  count: number;
  originalCount?: number;
};

const initialState: Frame[] = [
  {
    id: "block-1",
    text: "quenching your thirst. It plays a cru",
    image: "/images/image.svg",
    content: {
      id: "content-1",
      text: "Drinking water isn't just about quenching",
      image: "/images/image.png",
    },
    count: 10,
    originalCount: 10,
  },
  {
    id: "block-2",
    text: "Drinking water isn't just about quenching",
    image: "",
    content: {
      id: "content-2",
      text: "Drinking water isn't just about quenching your thirst. It plays a crucial role in about quenching bbbbbbbb",
      image: "/images/image.png",
    },
    count: 1,
    originalCount: 1,
  },
  {
    id: "block-3",
    text: "Drinking water isn't just about quenching your thirst. It plays a crucial role in maintaining the proper functioning of your",
    image: "/images/image.svg",
    content: {
      id: "content-3",
      text: "Drinking water isn't just about quenching your thirst. It plays a crucial role in maintaining the proper functioning of your",
      image: "/images/image.png",
    },
    count: 10,
    originalCount: 10,
  },
  {
    id: "block-4",
    text: "Drinking water isn't just about quenching your thirst. It plays a crucial role in about quenchng bbb",
    image: "",
    content: {
      id: "content-4",
      text: "Drinking water isn't just about quenching your thirst. It plays a crucial role in maintaining the proper functioning of your body, and staying properly hydrated is vital",
      image: "/images/image.png",
    },
    count: 100,
    originalCount: 100,
  },
  {
    id: "block-5",
    text: "Drinking water isn't just about quenching your thirst. It plays a crucial role in maintaining the proper functioning of your",
    image: "",
    count: 10,
    originalCount: 9,
  },
  {
    id: "block-6",
    text: "Drinking water isn't just about quenching your thirst. It plays a crucial role in maintaining the proper functioning of your body, and staying properly hydrated is vital",
    image: "",
    content: {
      id: "content-7",
      text: "Drinking water a crucial role in maintaining the proper functioning of your body, and staying properly hydrated is vital",
      image: "/images/image.png",
    },
    count: 0,
    originalCount: 0,
  },
  {
    id: "block-7",
    text: "Drinking water isn't just about quenching your thirst. It plays a crucial role in  in maintaining the a bbbbbbbbb",
    image: "/images/image.svg",
    content: {
      id: "content-6",
      text: "Drinking w It plays a crucial role in maintaining the proper functioning of your body, and staying properly hydrated is vital",
      image: "/images/image.png",
    },
    count: 10,
    originalCount: 10,
  },
  {
    id: "block-8",
    text: "Drinking water isn't just about quenching your thirst. It plays a crucial role in maintaining the proper functing of your body a bbbbbbbbb",
    image: "/images/image.svg",
    content: {
      id: "content-8",
      text: "Drinking w It plays a crucial role in maintaining the proper functioning of your body, and staying properly hydrated is vital",
      image: "/images/image.png",
    },
    count: 10,
    originalCount: 10,
  },
];

const blocksSlice = createSlice({
  name: "blocks",
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<{ id: string; count: number }>) => {
      const block = state.find((b) => b.id === action.payload.id);
      if (block) {
        block.count = action.payload.count;
      }
    },
    setOriginalCount: (
      state,
      action: PayloadAction<{ id: string; originalCount: number }>
    ) => {
      const block = state.find((b) => b.id === action.payload.id);
      if (block) {
        block.originalCount = action.payload.originalCount;
      }
    },
    setText: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const block = state.find((b) => b.id === action.payload.id);
      if (block) {
        block.text = action.payload.text;
      }
    },
  },
});

export const { setCount, setOriginalCount, setText } = blocksSlice.actions;
export const selectBlocks = (state: { blocks: Frame[] }) => state.blocks;
export default blocksSlice.reducer;
