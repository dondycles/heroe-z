"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import { Pagination, Button } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";
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
          className="bg-primaryblue/10 text-primaryblue"
          size="sm"
          variant="flat"
          onPress={() =>
            setCurrentPage((prev: number) => (prev > 1 ? prev - 1 : prev))
          }
        >
          <TbPlayerTrackPrevFilled />
        </Button>
        <Pagination
          total={2}
          color="primary"
          page={currentPage as number}
          onChange={setCurrentPage}
          className="text-content2"
          classNames={{
            item: "bg-transparent hover:bg-transparent active:bg-transparent  max-h-[32px]",
            cursor: "bg-primaryblue/10 text-primaryblue max-h-[32px]",
          }}
        />

        <Button
          className="bg-primaryblue/10 text-primaryblue"
          size="sm"
          variant="flat"
          onPress={() =>
            setCurrentPage((prev: number) => (prev < 2 ? prev + 1 : prev))
          }
        >
          <TbPlayerTrackNextFilled />
        </Button>
      </div>
    </div>
  );
}
