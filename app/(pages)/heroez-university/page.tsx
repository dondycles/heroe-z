"use client";
import { Link } from "@nextui-org/react";
import Scrollable from "@/app/components/Layouts/Scrollable";
import Paragraph from "@/app/components/AnimatedTags/Paragraph";
import ComingSoonModal from "@/app/components/modals/ComingSoon";
export default function Page() {
  return (
    <Scrollable>
      {/* <Paragraph>
        Claiming of Hero license is not yet available. This feature will be
        unlocked in future events.
      </Paragraph>
      <Paragraph className="text-warning">
        (Please check the{" "}
        <Link underline="always" href="/updates" className="text-primaryblue">
          updates
        </Link>{" "}
        section for announcements, stay tune.)
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, illo id
        nemo sint expedita dignissimos adipisci quas quod impedit commodi magni
        repudiandae accusamus nihil ut natus voluptatum quasi cumque rum unde
        est, exercitationem sapiente culpa, doloribus assumenda ex labore ea.
        Voluptatem aperiam et maiores delectus sit rerum ad corrupti.
        Repellendus repudiandae commodi nemo et dolores voluptates velit.
        Molestias eligendi minus provident inventore laborum? Vitae
        dignissimosrecusandae fugiat harum blanditiis explicabo illo ducimus
        sunt facilis. Quo, dolore.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, illo id
        nemo sint expedita dignissimos adipisci quas quod impedit commodi magni
        repudiandae accusamus nihil ut natus voluptatum quasi cumque rum unde
        est, exercitationem sapiente culpa, doloribus assumenda ex labore ea.
        Voluptatem aperiam et maiores delectus sit rerum ad corrupti.
        Repellendus repudiandae commodi nemo et dolores voluptates velit.
        Molestias eligendi minus provident inventore laborum? Vitae
        dignissimosrecusandae fugiat harum blanditiis explicabo illo ducimus
        sunt facilis. Quo, dolore.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, illo id
        nemo sint expedita dignissimos adipisci quas quod impedit commodi magni
        repudiandae accusamus nihil ut natus voluptatum quasi cumque rum unde
        est, exercitationem sapiente culpa, doloribus assumenda ex labore ea.
        Voluptatem aperiam et maiores delectus sit rerum ad corrupti.
        Repellendus repudiandae commodi nemo et dolores voluptates velit.
        Molestias eligendi minus provident inventore laborum? Vitae
        dignissimosrecusandae fugiat harum blanditiis explicabo illo ducimus
        sunt facilis. Quo, dolore.
      </Paragraph> */}
      <ComingSoonModal />
    </Scrollable>
  );
}
