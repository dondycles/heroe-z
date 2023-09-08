"use client";
import React from "react";
import { Pagination, Button } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
export default function PaginationC() {
  const searchparams = useSearchParams();
  const [currentPage, setCurrentPage] = React.useState<number>(
    Number(searchparams.get("chapter"))
  );

  return (
    <div className="flex flex-col">
      <p className="text-small text-content-3">
        Chapter: {currentPage as number}
      </p>
      <h1 className="text-2xl text-primaryblue">Chapter Title</h1>
      <Pagination
        total={2}
        color="primary"
        page={currentPage as number}
        onChange={setCurrentPage}
        className="text-content2"
      />
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="flat"
          color="primary"
          onPress={() =>
            setCurrentPage((prev: number) => (prev > 1 ? prev - 1 : prev))
          }
        >
          Previous
        </Button>
        <Button
          size="sm"
          variant="flat"
          color="primary"
          onPress={() =>
            setCurrentPage((prev: number) => (prev < 10 ? prev + 1 : prev))
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
}
