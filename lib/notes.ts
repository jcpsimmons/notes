import { NOTES_DIRECTORY } from "./constants";
import path from "path";
import { remark } from "remark";
import fs from "fs";
import html from "remark-html";
import matter from "gray-matter";

export const getNoteData = async (id: string) => {
  const fullPath = path.join(NOTES_DIRECTORY, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
};

export const getNoteIds = (): string[] => {
  const rawNames = fs.readdirSync(NOTES_DIRECTORY);
  const parsedNames = rawNames.map((rawName) => rawName.split(".")[0]);
  return parsedNames;
};
