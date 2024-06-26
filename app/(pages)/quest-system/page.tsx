"use client";
import Paragraph from "@/app/components/AnimatedTags/Paragraph";
import Scrollable from "@/app/components/Layouts/Scrollable";
import ComingSoonModal from "@/app/components/modals/ComingSoon";
import { Link } from "@nextui-org/react";
export default function Page() {
  return (
    <Scrollable>
      <ComingSoonModal />
    </Scrollable>
  );
}
