"use client";

import { useTransition } from "react";
import { deleteDream } from "../services/deleteDream";
import { useNavigate } from "../lib/router";

interface DeleteDreamButtonProps {
  id: string;
}
export default function DeleteDreamButton({ id }: DeleteDreamButtonProps) {
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();
  const onClick = () => {
    startTransition(async () => {
      await deleteDream(id);
      navigate("all");
    });
  };
  return (
    <button disabled={isPending} onClick={onClick}>
      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
}
