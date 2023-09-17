export default function Scrollable_UL({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "flex" | "grid";
}) {
  return (
    <>
      {type === "flex" && (
        <ul className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col gap-3 rounded-xl pb-12 ">
          {children}
        </ul>
      )}
      {type === "grid" && (
        <ul className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-y-auto overflow-x-hidden rounded-xl pb-12">
          {children}
        </ul>
      )}
    </>
  );
}
