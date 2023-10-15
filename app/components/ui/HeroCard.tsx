import GlowingBorder from "@/app/components/Styles/GlowingBorder";
import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import { Key, useState } from "react";

export default function HeroCard({ nft }: { nft: any[any] }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div
      onClick={() => setShowDetails(false)}
      className=" h-full w-auto aspect-square glowing-border p-[2px] bg-primary/20 rounded-xl relative overflow-hidden"
    >
      <Image
        className="h-full w-auto aspect-square object-cover rounded-xl duration-100 "
        src={nft.src}
        quality={100}
        alt={String(nft.src)}
        placeholder="blur"
      />

      {/* <div
        onClick={(e) => e.stopPropagation()}
        className={`
    absolute bottom-2 h-1/2 left-2 right-2 rounded-xl text-white flex duration-300 z-10 flex-col bg-black/20 backdrop-blur-[2px] backdrop-brightness-75 cursor-pointer overflow-hidden ${
      !showDetails ? "max-h-[30px]" : "max-h-[400px]"
    }`}
      >
        <Button
          onClick={() => setShowDetails((prev) => !prev)}
          className="bg-transparent min-h-[30px] p-2"
        >
          <p className="text-sizing text-white drop-shadow-[0_1px_1px_#00000088] font-montserrat w-full text-center">
            Hero Name
            <span
              className={`${
                showDetails ? "rotate-180" : "rotate-0"
              } duration-500 text-white text-2xl`}
            >
              <MdOutlineKeyboardArrowUp />
            </span>
          </p>
        </Button>
        <Divider />
        <div className="py-2 overflow-hidden ">
          <div className="max-h-full overflow-auto rounded-xl px-2 ">
            <p>
              Skills: ipsum dolor sit amet consectetur adipisicing elit. Tempora
            </p>
            <br />
            <p>
              Skills: ipsum dolor sit amet consectetur adipisicing elit. Tempora
            </p>
            <br />

            <p>
              Skills: ipsum dolor sit amet consectetur adipisicing elit. Tempora
            </p>
          </div>
        </div>
      </div> */}

      <div className="absolute top-0 bottom-0 left-0 right-0">
        <GlowingBorder />
      </div>
    </div>
  );
}
