import Head from "next/head";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { getAllNotesData } from "../lib/notes";
import NotesTable from "../components/NotesTable";

export default function Home({ notes }: { notes: Note[] }) {
  return (
    <Layout>
      <Head>
        <title>Notes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NotesTable notes={notes} />
      </main>
    </Layout>
  );
}
export async function getStaticProps() {
  const allNotes = await getAllNotesData();
  console.log(allNotes.map((n) => n.id));
  return {
    props: { notes: allNotes },
  };
}
