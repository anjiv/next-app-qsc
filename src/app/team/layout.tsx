import React from "react";

export default function Layout({children}:{children: React.ReactNode;}) {
  return <>
    <h1>Hi from Layout Team</h1>
    {children}
  </>
}
