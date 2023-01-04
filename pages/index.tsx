import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { getAllNotesData } from "../lib/notes";

export default function Home({ notes }: { notes: Note[] }) {
  return (
    <Layout>
      <Head>
        <title>Notes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <ul>
            {notes.map((n) => (
              <li>
                <Link href={"/note/" + n.id}>{n.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
}
export async function getStaticProps() {
  const allNotes = await getAllNotesData();

  return {
    props: { notes: allNotes },
  };
}
