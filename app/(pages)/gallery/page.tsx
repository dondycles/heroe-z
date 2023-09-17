"use client";
import { Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Scrollable from "@/app/components/Layouts/Scrollable";
import UL_Grid from "@/app/components/Layouts/Scrollable_UL";
import Paragraph from "@/app/components/AnimatedTags/Paragraph";
import List from "@/app/components/AnimatedTags/List";
export default function Page() {
  return (
    <Scrollable>
      <Paragraph className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, velit
        fuga. Qui!
      </Paragraph>
      <UL_Grid type="grid">
        {Array.from({ length: 100 }, (_: any, i: number) => {
          return (
            <List className="" key={i}>
              <Card
                isFooterBlurred
                radius="lg"
                className="border-none aspect-square"
              >
                <Image
                  className="object-cover"
                  height={1200}
                  src={`https://picsum.photos/id/${i + i}/1200/1200`}
                  alt={String(i)}
                  width={1200}
                />
                <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <p className="text-tiny text-white/80">
                    <span>{i % 2 === 0 ? "Hero" : "Villain"}</span>
                    <span className="text-sm font-semibold"> #{i}</span>
                  </p>
                </CardFooter>
              </Card>
            </List>
          );
        })}
      </UL_Grid>
    </Scrollable>
  );
}
