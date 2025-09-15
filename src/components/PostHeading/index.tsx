import Link from "next/link";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};

export function PostHeading({
  children,
  url,
  as: Tag = "h2",
}: PostHeadingProps) {
  const HeadingClassesMap = {
    h1: "text-2xl/tight sm:text-4xl font-extrabold",
    h2: "text-2xl/tight font-bold",
  };
  const CommomClasses = "";
  return (
    <Tag className={`${HeadingClassesMap[Tag]} ${CommomClasses}`}>
      <Link className="text-slate-600" href={url}>
        Lorem ipsum dolor sit ame {children}
      </Link>
    </Tag>
  );
}
