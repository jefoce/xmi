import {
  AlignVideo,
  AlignVideoPreview,
  AnimationVideo,
  AnimationVideoPreview,
  CommonVideo,
  CommonVideoPreview,
  ConvertVideo,
  ConvertVideoPreview,
  CopyVideo,
  CopyVideoPreview,
  CreateVideo,
  CreateVideoPreview,
  DeleteVideo,
  DeleteVideoPreview,
  DndVideo,
  DndVideoPreview,
  ImportVideo,
  ImportVideoPreview,
  MovingVideo,
  MovingVideoPreview,
  RenderVideo,
  RenderVideoPreview,
  SizeVideo,
  SizeVideoPreview,
} from "../../../../assets/videos";

import { DocumentationProps } from "../../components/Documentation/Documentation";

export const documentation: DocumentationProps[] = [
  {
    src: {
      main: ConvertVideo,
      preview: ConvertVideoPreview
    },
    title: "Easy series converting",
    paragraphs: ["Mi Band 4", "Mi Band 5"],
  },
  {
    src: {
      main: CommonVideo,
      preview: CommonVideoPreview
    },
    title: "Manage elements from toolbar or watch screen",
    paragraphs: ["Select with mouse", "Control preview with keyboard"],
  },
  {
    src: {
      main: DndVideo,
      preview: DndVideoPreview
    },
    title: `Import new images with Drag'n'Drop`,
    paragraphs: ["Select some images with pressed CTRL or SHIFT", "Drag some images"],
  },
  {
    src: {
      main: ImportVideo,
      preview: ImportVideoPreview
    },
    title: "Import with classic method",
    paragraphs: ["Select images to replace like DnD", "Import some images"],
  },
  {
    src: {
      main: CreateVideo,
      preview: CreateVideoPreview
    },
    title: "Create items",
    paragraphs: ["Toggle item", "Add images", "Set size"],
  },
  {
    src: {
      main: DeleteVideo,
      preview: DeleteVideoPreview
    },
    title: "Delete items",
    paragraphs: ["With toolbar", "Using DELETE key"],
  },
  {
    src: {
      main: MovingVideo,
      preview: MovingVideoPreview
    },
    title: "Move items",
    paragraphs: ["With mouse", "Change X and Y fields", `Using WASD or ← ↑ → ↓`],
  },
  {
    src: {
      main: AnimationVideo,
      preview: AnimationVideoPreview
    },
    title: "Animation speed",
    paragraphs: ["less 100 - pause", "more 100 - play"],
  },
  {
    src: {
      main: AlignVideo,
      preview: AlignVideoPreview
    },
    title: "Align items",
    paragraphs: ["Vertical 3 steps", "Horizontal 3 steps"],
  },
  {
    src: {
      main: SizeVideo,
      preview: SizeVideoPreview
    },
    title: "Change container size",
    paragraphs: ["Value 0 or double click by tag", "Resets to max size"],
  },
  {
    src: {
      main: RenderVideo,
      preview: RenderVideoPreview
    },
    title: "Create your text style",
    paragraphs: ["Set color", "Font", "Size", "Apply"],
  },
  {
    src: {
      main: CopyVideo,
      preview: CopyVideoPreview
    },
    title: "Copy items",
    paragraphs: ["Select item", "Images", "Right Button", "Copy", "Paste"],
  },
];
