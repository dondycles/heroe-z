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
      <Paragraph className="text-primary font-bold">
        HEROEZ! roadman revolves around one important component, the
        "Community". The phase listed below is the journey we will take and will
        be completed as we advance through our hero quest and discover the
        future together. (This roadman is under development and new things will
        be added as we progress to each phases.)
      </Paragraph>

      <div className="max-h-full h-screen overflow-y-auto w-full flex flex-col gap-2 ">
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
    </Scrollable>
  );
}
