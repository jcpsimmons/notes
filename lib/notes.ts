import { NOTES_DIRECTORY } from "./constants";
import path from "path";
import { remark } from "remark";
import fs from "fs";
import html from "remark-html";
import matter from "gray-matter";
import { exec } from "child_process";
import { getUnixTime, parse, parseISO, toDate } from "date-fns";

export const getNoteData = async (id: string) => {
  const fullPath = path.join(NOTES_DIRECTORY, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const modDate = await new Promise<string>((resolve) => {
    exec(
      `git log -n 1 --pretty=format:%cd ${fullPath} | cat`,
      (_err, stdout) => {
        resolve(stdout.trim());
      }
    );
  });

  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // https://github.com/jonschlinkert/gray-matter/issues/135
  const title = (matterResult.data?.title || "") as string;
  const tags = (matterResult.data?.tags || "") as string;

  return {
    id,
    contentHtml,
    title,
    tags,
    date: modDate ? gitDateToUnixDate(modDate) : Date.now(),
  };
};

export const gitDateToUnixDate = (dateStr: string) => {
  const parsed = parse(dateStr, "E MMM d HH:mm:ss yyyy x", new Date());
  return getUnixTime(parsed);
};

export const getNoteIds = (): string[] => {
  const rawNames = fs.readdirSync(NOTES_DIRECTORY);
  const parsedNames = rawNames
    .filter((fname) => fname.match(/.md$/))
    .map((rawName) => rawName.split(".")[0]);
  return parsedNames;
};

export const getAllNotesData = async (): Promise<Note[]> => {
  const noteIds = getNoteIds();
  const noteData = await Promise.all(noteIds.map((nid) => getNoteData(nid)));
  const sortedNotes = noteData.sort((a, b) => {
    return b.date - a.date;
  });
  return sortedNotes;
};
