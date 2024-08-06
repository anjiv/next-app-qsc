"use client";

import Script from "next/script";

export default function Home() {
  return (
    <>
      <h1 onClick={() => {
        $("Hi").text("Bye")
      }}>Hi</h1>
      <Script data-id="test" src="https://code.jquery.com/jquery-3.7.1.min.js" onLoad={() => {
        console.log("loaded")
      }}/>
    </>
  );
}
