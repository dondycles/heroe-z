"use client";
import Paragraph from "@/app/components/AnimatedTags/Paragraph";
import Scrollable from "@/app/components/Layouts/Scrollable";
import { Link } from "@nextui-org/react";
export default function Page() {
  return (
    <Scrollable>
      <Paragraph>
        Claiming of Hero license is not yet available. This feature will be
        unlocked in future events.
      </Paragraph>
      <Paragraph className=" text-warning">
        (Please check the{" "}
        <Link underline="always" href="/updates" className="text-primaryblue">
          updates
        </Link>{" "}
        section for announcements, stay tune.)
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae dolor
        atque corporis, deserunt nam molestiae ab? Commodi non autem nulla minus
        nisi porro facilis incidunt repellat officiis expedita fugit placeat, ur
        aliquam do non.
      </Paragraph>
    </Scrollable>
  );
}
