import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { postRepository } from "@/repositories/post";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  const posts = await postRepository.findAll();

  return (
    <Container>
      <Header />
      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link href={"#"} className="w-full h-full overflow-hidden rounded-xl">
          <Image
            src={"/images/bryen_0.png"}
            width={1200}
            height={720}
            alt="Título"
            className="h-full w-full object-cover object-center group-hover:scale-105 transition"
            priority
          />
        </Link>
        <div className="flex flex-col gap-4 sm:justify-center">
          <time
            className="text-slate-600 text-sm/tight block"
            dateTime="2025-10-11"
          >
            11/10/2025
          </time>
          <h1 className="text-2xl/tight sm:text-4xl">
            <Link href={"#"}> Lorem ipsum dolor sit amet </Link>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eius
            molestias omnis aut quisquam laboriosam vel illum molestiae optio,
            quo facilis deserunt nulla ipsam, amet eligendi ducimus eaque ad
            dolorum?
          </p>
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer className="text-6xl font-bold text-center"></footer>
    </Container>
  );
}
