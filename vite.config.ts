import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import fs from 'fs';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    }),
    {
      name: 'generate-docs-json',
      configResolved() {
        const docsPath = path.resolve(__dirname, 'src', 'docs');
        const outputPath = path.resolve(__dirname, 'src', 'utils', 'file-folder-list.json');

        if (fs.existsSync(docsPath)) {
          const items = fs.readdirSync(docsPath, { withFileTypes: true });

          const docsList = items.map((item) => ({
            name: item.name,
            type: item.isDirectory() ? 'folder' : 'file',
          }));

          // Write the list to a JSON file
          fs.writeFileSync(outputPath, JSON.stringify(docsList, null, 2));
          console.log(`Generated docs list: ${outputPath}`);
        } else {
          console.warn('The src/docs folder does not exist.');
        }
      },
    },
  ],
  base: '/hikma-docs/',
})
