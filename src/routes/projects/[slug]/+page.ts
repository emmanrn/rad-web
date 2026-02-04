import type { MarkdownProject } from "../../../types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
  const slug = params.slug;

  const project: MarkdownProject = await import(`../../../projects/${slug}.svx`);

  const { title, imgUrl, publishedAt, summary } = project.metadata;

  const content = project.default;

  return {
    content: content,
    title: title,
    imgUrl: imgUrl,
    publishedAt: publishedAt,
    summary: summary
  };
}
