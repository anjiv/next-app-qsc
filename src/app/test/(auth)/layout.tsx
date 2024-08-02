export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <h1>Layout Auth</h1>
    {children}
    </>
  );
}
