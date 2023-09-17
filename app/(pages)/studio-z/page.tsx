"use client";
import Paragraph from "@/app/components/AnimatedTags/Paragraph";
import Scrollable from "@/app/components/Layouts/Scrollable";
export default function Page() {
  return (
    <Scrollable>
      <Paragraph className="">
        Studio Z is the upcoming animation studio that will give benefits/value
        to our dearly beloved HEROEZ! things such as merchandise production,
        shared generated profit to the community and more things to give back to
        our community.
      </Paragraph>
      <Paragraph className="">
        Studio Z forte is all about animation industry, with the help of our
        partnered VC and decades of skills and experience of our team, we are
        confident that we can give value to our community.
      </Paragraph>
      <Paragraph className=" text-warning">All for one. One for All.</Paragraph>
    </Scrollable>
  );
}
