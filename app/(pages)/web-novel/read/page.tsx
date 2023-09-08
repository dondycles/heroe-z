"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import { Pagination, Button } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2";

export default function ReadChapter() {
  const searchparams = useSearchParams();
  const [currentPage, setCurrentPage] = React.useState<number>(
    Number(searchparams.get("chapter"))
  );

  return (
    <div className="flex flex-col h-full">
      <AnimatePresence>
        {currentPage === 1 && <Chapter1 />}
        {currentPage === 2 && <Chapter2 />}
      </AnimatePresence>

      <div className="flex gap-2 w-full justify-center items-center mt-6">
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
        <Pagination
          total={2}
          color="primary"
          page={currentPage as number}
          onChange={setCurrentPage}
          className="text-content2"
        />

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
