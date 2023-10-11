"use client";
import Paragraph from "@/app/components/AnimatedTags/Paragraph";
import Scrollable from "@/app/components/Layouts/Scrollable";
import RoadMapItem from "@/app/components/ui/RoadMapItem";
import { AnimatePresence } from "framer-motion";

export default function Page() {
  return (
    <Scrollable>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        dolore fuga mollitia.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        dolore fuga mollitia.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        dolore fuga mollitia.
      </Paragraph>
      <div className="max-h-full h-screen overflow-y-auto w-full flex flex-col gap-1 ">
        <AnimatePresence>
          {Array.from({ length: 4 }, (_, index) => {
            return <RoadMapItem index={index} />;
          })}
        </AnimatePresence>
      </div>
    </Scrollable>
  );
}
