import {
  FaTiktok,
  FaDiscord,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa6";

import Link from "next/link";
import Image from "next/image";
import elixer from "@/public/images/icons/elixir.ico";
import rethinkable from "@/public/images/icons/rethinkable.ico";

import { TeamData } from "./hero-data";
import { Chip, Divider } from "@nextui-org/react";

type HeroModalTypes = {
  showModal: boolean;
  heroIndexToShow: number;
  setShowModal: (status: boolean) => void;
  theme: "light" | "dark";
};

export default function HeroModal({
  showModal,
  setShowModal,
  heroIndexToShow,
  theme,
}: HeroModalTypes) {
  const team = TeamData;
  return (
    <div
      onClick={() => setShowModal(false)}
      className={`fixed flex items-center justify-center top-0 left-0 bottom-0 right-0 overflow-hidden duration-150 p-6 ${
        showModal
          ? "backdrop-blur-sm backdrop-brightness-50"
          : "backdrop-blur-none backdrop-brightness-100 pointer-events-none"
      }`}
    >
      <div
        className={`max-h-[70dvh] h-screen max-w-[350px] w-screen    relative z-10 glowing-border rounded-xl overflow-hidden duration-500 
              ${showModal ? "opacity-100" : "opacity-0 pointer-events-none"}
              ${
                theme === "dark"
                  ? " drop-shadow-[0_0_4px_#ff444488]"
                  : " drop-shadow-[0_0_4px_#0099ff88]"
              }
              `}
      >
        <div className="absolute top-0 left-0 bottom-0 right-0">
          <div
            key={"glowingborder"}
            className={`absolute bg-gradient-to-b blur-lg from-primary via-transparent to-primary top-[0dvh] left-[-350px] translate-x-[-50%] translate-y-[-50%]   aspect-square w-auto h-[100dvh] object-center  z-[-1] rotationalpanelborder duration-[2000ms] pointer-events-none `}
          />
        </div>
        <div
          className={`absolute top-[12px] left-[12px] right-[12px] bottom-[12px] z-10 overflow-y-auto overflow-x-hidden rounded-xl`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" rounded-xl flex gap-3 flex-col"
          >
            <Image
              src={team[heroIndexToShow].img}
              alt={team[heroIndexToShow].name}
              placeholder="blur"
              quality={100}
              priority
              className="rounded-xl w-full h-auto object-cover"
            />
            <div>
              <p className="font-montserrat text-primary text-2xl">
                {team[heroIndexToShow].name}
              </p>
              {team[heroIndexToShow].moto && (
                <p className=" text-warning italic text-sm">
                  "{team[heroIndexToShow].moto}"
                </p>
              )}
            </div>
            <Divider className="" />
            <div className="flex flex-wrap gap-1">
              {team[heroIndexToShow].roles.map((role) => {
                return (
                  <Chip
                    key={role}
                    color={
                      role.includes("HEROEZ!")
                        ? "primary"
                        : role.includes("Founder")
                        ? "secondary"
                        : "warning"
                    }
                    variant="dot"
                    size="sm"
                    className={
                      role.includes("HEROEZ!")
                        ? "border-primary"
                        : role.includes("Founder")
                        ? "border-secondary"
                        : "border-warning"
                    }
                  >
                    <p>{role}</p>
                  </Chip>
                );
              })}
            </div>
            <Divider className="" />
            <p className="text-sm">{team[heroIndexToShow].description}</p>

            {team[heroIndexToShow].communities && (
              <>
                <Divider className="" />

                <div className=" flex flex-wrap items-center gap-1">
                  <p>Communities:</p>

                  {team[heroIndexToShow].communities?.map((community) => {
                    return (
                      <Chip
                        key={community}
                        color="default"
                        variant="bordered"
                        size="sm"
                        className="text-xs text-content2"
                      >
                        {community}
                      </Chip>
                    );
                  })}
                </div>
              </>
            )}
            {team[heroIndexToShow].socials && (
              <>
                <Divider className="" />
                <div className=" flex flex-wrap gap-1 items-center">
                  {team[heroIndexToShow].socials?.map((social) => {
                    return (
                      <Link
                        key={social.link}
                        target="_blank"
                        href={social.link}
                        className="p-2 bg-content2/10 rounded-xl text-xl"
                      >
                        {social.type === "x" && (
                          <span className=" text-content2">
                            <FaXTwitter />
                          </span>
                        )}
                        {social.type === "dc" && (
                          <span className=" text-indigo-500">
                            <FaDiscord />
                          </span>
                        )}
                        {social.type === "fb" && (
                          <span className=" text-blue-500">
                            <FaFacebookF />
                          </span>
                        )}
                        {social.type === "ig" && (
                          <span className=" text-pink-500 ">
                            <FaInstagram />
                          </span>
                        )}
                        {social.type === "tt" && (
                          <span className=" text-fuchsia-500 ">
                            <FaTiktok />
                          </span>
                        )}
                        {social.type === "yt" && (
                          <span className=" text-red-500">
                            <FaYoutube />
                          </span>
                        )}
                        {social.type === "elixir" && (
                          <Image
                            src={elixer}
                            alt="elixir"
                            width={20}
                            height={20}
                          />
                        )}
                        {social.type === "rtk" && (
                          <Image
                            src={rethinkable}
                            alt="rethinkable"
                            width={20}
                            height={20}
                          />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
