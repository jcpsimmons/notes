import { getNoteData, getNoteIds } from "../../lib/notes";

export default function Post({ postData }) {
  return (
    <div>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getNoteData(params.id);

  return {
    props: {
      postData,
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
