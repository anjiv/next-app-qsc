"use client";
import React, { useOptimistic } from "react";
import { toggleTodo } from "../actions/todos";

export default function TodoItem({
  id,
  title,
  completed,
}: {
  id: number;
  title: string;
  completed: boolean;
}) {
  const [optimisticComp, setOptimisticComp] = useOptimistic(completed);

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={optimisticComp}
          onChange={async (e) => {
            setOptimisticComp(e.target.checked);
            await toggleTodo(id, e.target.checked);
          }}
        />
        {title}
      </label>
    </li>
  );
}
