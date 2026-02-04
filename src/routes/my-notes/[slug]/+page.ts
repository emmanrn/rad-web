import type { Notes } from "../../../types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
  const slug = params.slug;

  const note: Notes = await import(`../../../notes/${slug}.svx`)

  const { title, imgUrl, publishedAt } = note.metadata;

  const content = note.default;

  return {
    content: content,
    title: title,
    imgUrl: imgUrl,
    publishedAt: publishedAt,
  }
};
