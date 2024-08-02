import { ReactNode } from "react";

// Order of output - Layout, template, page.
export default function TeamTemplate({children}: {children: ReactNode}) {
  return (
    <>
      <p>Template</p>
      {children}
    </>
  );
}
