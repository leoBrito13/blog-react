"use client";

type ErrorMessageProps = {
  title: string;
  pageTitle: string;
  message: React.ReactNode;
};

export default function ErrorMessage({
  title,
  pageTitle,
  message,
}: ErrorMessageProps) {
  return (
    <>
      <title>{title}</title>
      <div className="min-h-[320px] bg-slate-900 text-slate-100 mb-16 p-8 rounded-xl flex items-center justify-center text-center">
        <div>
          <h1 className="text-xl/tight mb-4 font-extrabold">{pageTitle}</h1>
          <div>{message}</div>
        </div>
      </div>
    </>
  );
}
