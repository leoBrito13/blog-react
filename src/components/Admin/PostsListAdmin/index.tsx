import { findAllPostsAdmin } from "@/lib/post/queries/admin";
import Link from "next/link";
import { DeletePostButton } from "../Admin/DeletePostButton";
import { Dialog } from "../Dialog";
import ErrorMessage from "../ErrorMessage";

export const dynamic = "force-dynamic";
export default async function PostsListAdmin() {
  const posts = await findAllPostsAdmin();
  if (posts.length <= 0)
    return <ErrorMessage title={"Ei"} message={"Não há nenhum post criado"} />;

  return (
    <div className="mb-16">
      {posts.map((post) => {
        return (
          <div
            className="py-2 px-2 flex gap-2 items-center justify-between"
            key={post.id}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>
            {!post.published && (
              <span className="text-xs text-slate-600 italic">
                (Não Publicado)
              </span>
            )}
            <DeletePostButton id={post.id} title={post.title} />
          </div>
        );
      })}
    </div>
  );
}
