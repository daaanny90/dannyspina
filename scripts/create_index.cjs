const fs = require("fs-extra");
const path = require("path");
const matter = require( "gray-matter");

const postsDir = "./src/routes/blog";
const outputFile = "./static/search-index.json";

async function generateIndex() {
  const files = await fs.readdir(postsDir);
  const cleanFiles = files.filter(file => { 
    if (
      file !== "categories" && 
      file !== "+page.svelte" && 
      file !== "+page.ts" && 
      file !== "post.svelte" &&
      file !== "index.md"
    ) {
      return file
    }
  })

  const index = [];

  for (const file of cleanFiles) {
    const filePath = path.join(postsDir, file, "+page.md");
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    index.push({
      id: file.replace(".md", ""),
      title: data.title || "Senza titolo",
      subtitle: data.subtitle || "",
      content: content,
      tags: data.tags || [],
      date: data.date || "",
    });
  }

  await fs.writeJson(outputFile, index, { spaces: 2 });
  console.log(`Index created with ${index.length} articles.`);
}

generateIndex();
