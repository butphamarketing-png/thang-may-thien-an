/**
 * Regenerate src/data/site-images.ts from public/images/*.jpg
 * Run: node scripts/sync-gallery-images.mjs
 */
import { readdir, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const imagesDir = join(root, "public", "images");
const outFile = join(root, "src", "data", "site-images.ts");

const files = (await readdir(imagesDir))
  .filter((f) => f.toLowerCase().endsWith(".jpg"))
  .sort();

const lines = files.map((f) => `  "${f}",`).join("\n");
const content = `/** Auto-listed gallery images from public/images (*.jpg). Regenerate when adding photos. */
import { publicUrl } from "@/lib/public-url";

export const GALLERY_IMAGE_FILES = [
${lines}
] as const;

export const GALLERY_IMAGES = GALLERY_IMAGE_FILES.map((f) => publicUrl(\`images/\${f}\`));

export function galleryAt(index: number): string {
  return GALLERY_IMAGES[index % GALLERY_IMAGES.length] ?? GALLERY_IMAGES[0]!;
}
`;

await writeFile(outFile, content, "utf8");
console.log(`Wrote ${files.length} images → ${outFile}`);
