"use client";

export default function Error({ error, reset }: any) {
  return (
    <>
      <h1>Error</h1>
      <button onClick={reset}>{error.message}</button>
    </>
  )
}
