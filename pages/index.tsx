import Head from "next/head";

import Layout from "../components/Layout";
import { getAllNotesData } from "../lib/notes";
import NotesTable from "../components/NotesTable";
import { useState } from "react";
import NoteSearch from "../components/NoteSearch";

export default function Home({ notes: initialNotes }: { notes: Note[] }) {
  const [notes, setNotes] = useState(initialNotes);

  return (
    <Layout>
      <Head>
        <title>Notes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NoteSearch notes={initialNotes} setNotes={setNotes} />
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
