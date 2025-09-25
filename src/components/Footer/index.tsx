import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <p className="text-center">
        <span>Copyright &copy; {new Date().getFullYear()} - </span>
        <Link href="/">Blog</Link>
      </p>
    </footer>
  );
}
