export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" h-[100dvh] min-h-[100dvh] w-full flex-col items-center justify-between bg-background/95 backdrop-blur-[2px] px-6 md:px-32 lg:px-48 xl:px-72 2xl:px-96 pt-24 pb-6 ">
      {children}
    </main>
  );
}
