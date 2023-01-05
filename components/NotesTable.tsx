import React from "react";

import { VStack, HStack, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

type Props = {
  notes: Note[];
};

export default function NotesTable({ notes }: Props) {
  return (
    <>
      <VStack>
        {notes.map((note) => (
          <Link
            as={NextLink}
            href={`/note/${note.id}`}
            _hover={{
              transform: "scale(1.05)",
              animationDuration: "250ms",
            }}
          >
            <HStack>
              <Text fontSize={"xl"} as="b">
                {note.title}
              </Text>
            </HStack>
          </Link>
        ))}
      </VStack>
    </>
  );
}
