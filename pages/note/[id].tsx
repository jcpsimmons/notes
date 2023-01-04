import { getNoteData, getNoteIds } from "../../lib/notes";

export default function Post({ noteData }: { noteData: Note }) {
  return (
    <div>
      {noteData.title}
      <br />
      {noteData.id}
      <br />
      {noteData.date}w
      <br />
      <div dangerouslySetInnerHTML={{ __html: noteData.contentHtml }} />
    </div>
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
  console.log("noteIds", noteIds);

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
