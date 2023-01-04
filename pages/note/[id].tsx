import { id } from "date-fns/locale";
import Layout from "../../components/Layout";
import { getNoteData, getNoteIds } from "../../lib/notes";

export default function Post({ noteData }: { noteData: Note }) {
  return (
    <Layout>
      {noteData.title}
      <br />
      {noteData.id}
      <br />
      {noteData.date}w
      <br />
      <div dangerouslySetInnerHTML={{ __html: noteData.contentHtml }} />
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
