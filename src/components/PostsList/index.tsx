import { postRepository } from "@/repositories/post";

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div className="py-8">
      {posts.map((post) => {
        return (
          <p key={post.id} className="text-center">
            {post.title}
          </p>
        );
      })}
    </div>
  );
}
