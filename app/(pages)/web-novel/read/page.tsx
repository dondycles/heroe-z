"use client";

import { useSearchParams } from "next/navigation";
import { Pagination, Button } from "@nextui-org/react";
import { useNavigationStore } from "@/store";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";

import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2";

export default function ReadChapter() {
  const searchparams = useSearchParams();
  const navigation = useNavigationStore();
  const [isMounted, setIsMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(
    Number(searchparams.get("chapter"))
  );
  const chapters = [
    {
      chapter: (
        <motion.div>
          <p className=" text-content3">Select Chapter</p>{" "}
        </motion.div>
      ),
    },
    { chapter: <Chapter1 /> },
    { chapter: <Chapter2 /> },
  ];

  useEffect(() => {
    if (!isMounted) return;
    window.history.pushState(
      null,
      "/web-novel/read",
      `?chapter=${currentPage}`
    );
  }, [currentPage]);

  useEffect(() => {
    if (!searchparams.get("chapter"))
      return navigation.setWillNavigateTo("/web-novel");
    setIsMounted(true);
  }, []);

  if (searchparams.get("chapter"))
    return (
      <div className="flex flex-col h-full">
        <AnimatePresence>
          {chapters.map((chapter, i) => {
            if (i === currentPage)
              return <React.Fragment key={i}>{chapter.chapter}</React.Fragment>;
          })}
        </AnimatePresence>
        {currentPage !== 0 && (
          <motion.div
            layout
            className="flex gap-2 w-full justify-center items-center mt-3"
          >
            <Button
              className="bg-primary/10 text-primary"
              size="sm"
              variant="flat"
              onPress={() => {
                setCurrentPage((prev: number) => (prev > 1 ? prev - 1 : prev));
                // window.history.pushState(
                //   null,
                //   "/web-novel/read",
                //   `?chapter=${currentPage}`
                // );
              }}
            >
              <TbPlayerTrackPrevFilled />
            </Button>
            <Pagination
              onClick={() => {
                window.history.pushState(
                  "object or string",
                  "Title",
                  "new url"
                );
              }}
              total={2}
              color="primary"
              page={currentPage as number}
              onChange={setCurrentPage}
              className="text-content2"
              classNames={{
                item: "bg-transparent hover:bg-transparent active:bg-transparent  max-h-[32px] pointer-events-none",
                cursor: `${
                  currentPage >= 1 && currentPage <= 2
                    ? " bg-primary/10 text-primary max-h-[32px] "
                    : "invisible"
                }`,
              }}
            />
            <Button
              className="bg-primary/10 text-primary"
              size="sm"
              variant="flat"
              onPress={() => {
                setCurrentPage((prev: number) => (prev < 2 ? prev + 1 : prev));
              }}
            >
              <TbPlayerTrackNextFilled />
            </Button>
          </motion.div>
        )}
      </div>
    );
}
