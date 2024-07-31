"use client";

import { ReactNode } from "react";
import { Child } from "./Child";

type Props = {
  title: string,
  children: ReactNode
}

export default function TodoItem({title, children}: Props) {
  console.log("Todo item");
  return (
    <>
      <li onClick={() => {alert("I am todo item")}}>{title} {children}</li>

      {/* Here <Child> component is considered as Client component because it's used in client component. */}
      <Child />
    </>
  );
}
