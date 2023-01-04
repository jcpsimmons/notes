import { v1 } from "https://deno.land/std/uuid/mod.ts";

const existingNoteNames = [...Deno.readDirSync("_notes")].map(
  (n) => n.name.split(".")[0]
);

let uuid = v1.generate() + "";

while (existingNoteNames.includes(uuid)) {
  uuid = v1.generate() + "";
}

const content = `---
title: ""
tags: ""
---
`;

const noteFilename = `${uuid}.md`;

await Deno.writeTextFile(`_notes/${noteFilename}`, content);
console.log(`_notes/${noteFilename}`);
await Deno.run({ cmd: ["code", `_notes/${noteFilename}`] }).status();
