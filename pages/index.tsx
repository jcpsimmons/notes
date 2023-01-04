import Head from "next/head";
import { getAllNotesData } from "../lib/notes";

import styles from "../styles/Home.module.css";

export default function Home({ notes }: { notes: Note[] }) {
  return (
    <>
      <Head>
        <title>Notes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <ul>
            {notes.map((n) => (
              <li>
                <a href={"/note/" + n.id}>{n.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
export async function getStaticProps() {
  const allNotes = await getAllNotesData();

  return {
    props: { notes: allNotes },
  };
}
