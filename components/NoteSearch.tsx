import { Box, Center, Input } from "@chakra-ui/react";
import React, { useState } from "react";

import FuzzySearch from "fuzzy-search";

type Props = {
  notes: Note[];
  setNotes: (newNotes: Note[]) => void;
};

export default function NoteSearch({ notes, setNotes }: Props) {
  const [query, setQuery] = useState("");

  const searcher = new FuzzySearch(notes, ["title", "contentHtml"], {
    caseSensitive: false,
  });

  const handleChange = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    const result = searcher.search(searchQuery);
    setNotes(result);
  };

  return (
    <Center>
      <Box w={"30rem"} padding={"3rem"}>
        <Input
          value={query}
          placeholder="Search Notes"
          onChange={handleChange}
        ></Input>
      </Box>
    </Center>
  );
}
