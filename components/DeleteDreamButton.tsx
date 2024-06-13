"use client";

import { useTransition } from "react";
import { deleteDream } from "../services/deleteDream";
import { useNavigatePage, useInvalidateRoot } from "../lib/router";

interface DeleteDreamButtonProps {
  id: string;
}
export default function DeleteDreamButton({ id }: DeleteDreamButtonProps) {
  const [isPending, startTransition] = useTransition();
  const navigatePage = useNavigatePage();
  const invalidateRoot = useInvalidateRoot();
  const onClick = () => {
    startTransition(async () => {
      await deleteDream(id);
      navigatePage("all");
      invalidateRoot();
    });
  };
  return (
    <button disabled={isPending} onClick={onClick} className="client-component">
      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
}
