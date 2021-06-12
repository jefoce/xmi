import {
  AlignVideo,
  AnimationVideo,
  CommonVideo,
  ConvertVideo,
  CopyVideo,
  CreateVideo,
  DeleteVideo,
  DndVideo,
  ImportVideo,
  MovingVideo,
  RenderVideo,
  SizeVideo,
} from "../../../../assets/videos";

import { DocumentationProps } from "../../components/Documentation/Documentation";

export const documentation: DocumentationProps[] = [
  {
    src: ConvertVideo,
    title: "Easy series converting",
    paragraphs: ["Mi Band 4", "Mi Band 5"],
  },
  {
    src: CommonVideo,
    title: "Manage elements from toolbar or watch screen",
    paragraphs: ["Select with mouse", "Control preview with keyboard"],
  },
  {
    src: DndVideo,
    title: `Import new images with Drag'n'Drop`,
    paragraphs: ["Select some images with pressed CTRL or SHIFT", "Drag some images"],
  },
  {
    src: ImportVideo,
    title: "Import with classic method",
    paragraphs: ["Select images to replace like DnD", "Import some images"],
  },
  {
    src: CreateVideo,
    title: "Create items",
    paragraphs: ["Toggle item", "Add images", "Set size"],
  },
  {
    src: DeleteVideo,
    title: "Delete items",
    paragraphs: ["With toolbar", "Using DELETE key"],
  },
  {
    src: MovingVideo,
    title: "Move items",
    paragraphs: ["With mouse", "Change X and Y fields", `Using WASD or ← ↑ → ↓`],
  },
  {
    src: AnimationVideo,
    title: "Animation speed",
    paragraphs: ["less 100 - pause", "more 100 - play"],
  },
  {
    src: AlignVideo,
    title: "Align items",
    paragraphs: ["Vertical 3 steps", "Horizontal 3 steps"],
  },
  {
    src: SizeVideo,
    title: "Change container size",
    paragraphs: ["Value 0 or double click by tag", "Resets to max size"],
  },
  {
    src: RenderVideo,
    title: "Create your text style",
    paragraphs: ["Set color", "Font", "Size", "Apply"],
  },
  {
    src: CopyVideo,
    title: "Copy items",
    paragraphs: ["Select item", "Images", "Right Button", "Copy", "Paste"],
  },
];
