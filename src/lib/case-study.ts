import type { CaseStudyBlock, ImageBlock, ImageItem, ItemBlock } from "@/types";

/** What the page actually renders. Built from the raw blocks in the data files. */
export type BlockUnit =
  | { kind: "text"; text: string }
  | { kind: "image"; image: ImageBlock }
  | { kind: "images"; items: ImageItem[] }
  | { kind: "feature"; item: ItemBlock; image: ImageBlock; imageFirst: boolean }
  | { kind: "cards"; items: ItemBlock[] };

/** Images wider than this take the full row, so they are not placed next to text. */
const MAX_SIDE_IMAGE_WIDTH = 800;

const isSideImage = (block?: CaseStudyBlock): block is ImageBlock =>
  block?.type === "image" && block.width <= MAX_SIDE_IMAGE_WIDTH;

/**
 * Groups raw blocks into layout units:
 * - an item next to a narrow image becomes a "feature" (text + image side by side)
 * - items next to each other become one "cards" grid
 */
export function groupBlocks(blocks: CaseStudyBlock[]): BlockUnit[] {
  const units: BlockUnit[] = [];

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];

    if (block.type === "text") {
      units.push({ kind: "text", text: block.text });
    } else if (block.type === "images") {
      units.push({ kind: "images", items: block.items });
    } else if (block.type === "image") {
      const next = blocks[i + 1];
      const afterNext = blocks[i + 2];
      // narrow image followed by an item that has no image of its own -> image on the left
      if (isSideImage(block) && next?.type === "item" && !isSideImage(afterNext)) {
        units.push({ kind: "feature", item: next, image: block, imageFirst: true });
        i++;
      } else {
        units.push({ kind: "image", image: block });
      }
    } else {
      const next = blocks[i + 1];
      if (isSideImage(next)) {
        units.push({ kind: "feature", item: block, image: next, imageFirst: false });
        i++; // the image is already used
        continue;
      }

      const last = units[units.length - 1];
      if (last?.kind === "cards") last.items.push(block);
      else units.push({ kind: "cards", items: [block] });
    }
  }

  return units;
}
