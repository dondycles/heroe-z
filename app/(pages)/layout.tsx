export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-[100dvh] min-h-[100dvh] w-full bg-background/90 backdrop-blur-[2px] px-6 md:px-12 lg:px-24 xl:px-36 2xl:px-48 pt-24 pb-6">
      {children}
    </main>
  );
}
