import { Code, Stack, StackDivider, Text, VStack } from "@chakra-ui/react";
import { format, formatDistance } from "date-fns";
import { id } from "date-fns/locale";
import Layout from "../../components/Layout";
import { getNoteData, getNoteIds } from "../../lib/notes";

export default function Post({ noteData }: { noteData: Note }) {
  return (
    <Layout>
      <VStack align={"left"}>
        <Text fontSize={"4xl"} as="b">
          {noteData.title}
        </Text>
        <Text fontSize={"xl"}>
          Last edited:{" "}
          {formatDistance(new Date(noteData.date * 1000), new Date())} ago.
        </Text>
        <Code display={"inline-block"} marginRight={"auto !important"}>
          ID: {noteData.id}
        </Code>

        <div dangerouslySetInnerHTML={{ __html: noteData.contentHtml }} />
      </VStack>
    </Layout>
  );
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const noteData = await getNoteData(params.id);

  return {
    props: {
      noteData,
    },
  };
}

export async function getStaticPaths() {
  const noteIds = getNoteIds();

  return {
    paths: noteIds.map((noteId) => {
      return {
        params: {
          id: noteId,
        },
      };
    }),
    fallback: false,
  };
}
// http://localhost:3000/notes/72336628-27dd-4666-acca-5fadf036772b
