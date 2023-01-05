import React from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

type Props = {
  notes: Note[];
};

export default function NotesTable({ notes }: Props) {
  return (
    <>
      <TableContainer>
        <Table variant="striped" size="lg">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Tags</Th>
            </Tr>
          </Thead>
          <Tbody>
            {notes.map((note) => (
              <Tr
                onClick={() => (window.location.href = `/note/${note.id}`)}
                _hover={{
                  background: "cyan.300",
                  cursor: "pointer",
                }}
              >
                <Td>{note.title}</Td>

                <Td>{note.tags}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
