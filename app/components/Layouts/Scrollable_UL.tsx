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
        <ul className="flex flex-col flex-1 gap-3 pb-12 overflow-x-hidden overflow-y-auto rounded-xl ">
          {children}
        </ul>
      )}
      {type === "grid" && (
        <ul className="grid grid-cols-1 gap-3 pb-12 overflow-x-hidden overflow-y-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded-xl">
          {children}
        </ul>
      )}
    </>
  );
}
