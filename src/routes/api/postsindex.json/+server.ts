import fs from "fs-extra";
import { json } from "@sveltejs/kit";

const indexFile = "./static/search-index.json";

export const GET = async() => {
  const index = await fs.readFile(indexFile, 'utf-8');

  return json(JSON.parse(index))
}
