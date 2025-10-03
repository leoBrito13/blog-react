"use client";

import { deletePostAction } from "@/actions/post/delete-post-action";
import { Trash2Icon } from "lucide-react";
import { useTransition } from "react";

type DeletePostButtonProps = {
  id: string;
  title: string;
};

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
  const [isPending, startTransition] = useTransition();
  function handleClick() {
    startTransition(async () => {
      const result = await deletePostAction(id);
      alert("result:" + result);
    });
  }

  return (
    <button
      className="text-red-500 cursor-pointer hover:scale-120 hover:text-red-700 transition disabled:text-slate-600 disabled:cursor-not-allowed"
      aria-label={`Apagar o post : ${title}`}
      title={`Apagar o post : ${title}`}
      onClick={handleClick}
      disabled={isPending}
    >
      <Trash2Icon size={18} />
    </button>
  );
}
