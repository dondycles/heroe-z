"use client";
import Div from "@/app/components/AnimatedTags/Div";
import Paragraph from "@/app/components/AnimatedTags/Paragraph";
import Scrollable from "@/app/components/Layouts/Scrollable";
import RoadMapItem from "@/app/components/ui/RoadMapItem";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { AiOutlineNodeIndex } from "react-icons/ai";
import { PiPathBold } from "react-icons/pi";

export default function Page() {
  return (
    <Scrollable>
      <div className="m-auto h-full w-full flex flex-col gap-3 items-center justify-center">
        <Paragraph className="font-montserrat mb-6">
          HEROEZ! The "Community" is a key element that revolves around the
          roadmap. As we progress through our hero adventure and jointly uncover
          the future, we will have completed each of the phases stated below.
          (This road map is presently being created; more items will be added as
          we move through each step.)
        </Paragraph>
        <div className="overflow-y-auto w-full flex flex-col gap-3 pb-10">
          <AnimatePresence>
            {Array.from({ length: 3 }, (_, index) => {
              return (
                <React.Fragment key={index}>
                  <RoadMapItem index={index + 1} />
                  <span
                    hidden={index === 2}
                    className="text-2xl mx-auto text-center text-primary"
                  >
                    <PiPathBold />
                  </span>
                </React.Fragment>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </Scrollable>
  );
}
