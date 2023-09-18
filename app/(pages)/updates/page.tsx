"use client";
import Paragraph from "@/app/components/AnimatedTags/Paragraph";
import Scrollable from "@/app/components/Layouts/Scrollable";

export default function Page() {
  return (
    <Scrollable>
      <Paragraph>
        This page is intended for announcements that revolves around HEROEZ!
      </Paragraph>
      <Paragraph className=" text-warning">
        We will let everyone know once this page is up and running.{" "}
      </Paragraph>
    </Scrollable>
  );
}
