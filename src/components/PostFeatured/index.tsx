import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";
import { PostSummary } from "../PostSummary";

export function PostFeatured() {
  const slug = "qualquer";
  const postLink = `/post/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: "/images/bryen_9.png",
          alt: "Alt da imagem",
          priority: true,
        }}
        alt={""}
      />

      <PostSummary
        postHeading="h1"
        postLink="#"
        title="Rerum, vel ex? Impedit ullam harum blanditiis"
        createdAt="2025-04-20"
        excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. In velitdolorem est dolor porro"
      />
    </section>
  );
}
