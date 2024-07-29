import { Metadata } from "next";
import React from "react";

// Root Metadata will get overridden on about page.
export const metadata: Metadata = {
  title: "About meta data",
  description: "About meta desc",
}

export default function Layout({children}:{children: React.ReactNode;}) {
  return <>
    <h1>Hi from Layout About</h1>
    {children}
  </>
}
