import { PostFeatured } from "@/components/PostFeatured";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export const dinamic = "force-static";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader ContainerClasses=" min-h-200 mb-16" />}>
        <PostFeatured />
        <PostsList />
      </Suspense>
    </>
  );
}
