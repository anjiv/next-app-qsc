"use client";
import React, { useTransition } from "react";
import { toggleTodo } from "../actions/todos";

export default function SelectAllButton({ ids }: { ids: number[] }) {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      onClick={() => {
        startTransition(async () => {
          await Promise.all(ids.map((id) => toggleTodo(id, true)));
        });
      }}
    >
      {isPending? "Loading" : "Select All Button"}
    </button>
  );
}
