import { useAnimateStore, useNavigationStore, useThemeStore } from "@/store";
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useState } from "react";
import GlowingBorder from "../Styles/GlowingBorder";
import { usePathname } from "next/navigation";
import { MdWarning } from "react-icons/md";
import Link from "next/link";

export default function ComingSoonModal() {
  const animateState = useAnimateStore();
  const [isOpen, setIsOpen] = useState(true);
  const theme = useThemeStore();
  const pathname = usePathname();
  const navigation = useNavigationStore();
  return (
    <Modal
      placement="center"
      backdrop="opaque"
      isOpen={isOpen && animateState.mode}
      onOpenChange={() => setIsOpen((prev) => !prev)}
      radius="md"
      isDismissable={false}
      className={`${theme.mode} bg-background text-foreground max-w-[750px] `}
      closeButton={<></>}
    >
      <ModalContent className="overflow-hidden relative glowing-border p-[2px]">
        <ModalHeader className="flex flex-col gap-1 font-montserrat text-center text-2xl bg-background/50 rounded-t-xl text-primary">
          Not So Fast Hero!
        </ModalHeader>
        <Divider />
        <ModalBody className="bg-background/50 ">
          {pathname === "/heroez-university" && (
            <p className="text-center">
              HERO UNIVERSITY ADMISSION IS NOT YET LIVE. <br /> ANNOUNCEMENT
              WILL BE MADE ONCE WE ARE TAKING NEW HEROES IN OUR ACADEMY. <br />
              PLEASE BE PATIENT. THANK YOU!
            </p>
          )}
          {pathname === "/quest-system" && (
            <p className="text-center">
              QUEST SYSTEM IS NOT YET LIVE. <br /> ANNOUNCEMENT WILL BE MADE.
              PLEASE BE PATIENT. THANK YOU!
            </p>
          )}
          {pathname === "/updates" && (
            <p className="text-center uppercase">
              This page is intended for announcements that revolves around
              HEROEZ! We will let everyone know once this page is up and
              running. PLEASE BE PATIENT. THANK YOU!
            </p>
          )}
          <span className="text-3xl mx-auto text-warning">
            <MdWarning />
          </span>
        </ModalBody>
        <Divider />
        <ModalFooter className="bg-background/50 rounded-b-xl ">
          <Button
            color="primary"
            variant="shadow"
            onPress={() => {
              setIsOpen(false);
              navigation.setWillNavigateTo("/");
            }}
            className="glowing-border p-[2px] relative bg-primary/10 after:bg-background/90 sm:after:hover:bg-background/50 "
          >
            <p className="text-xs font-montserrat p-3 text-primary">
              GO BACK TO HOME
            </p>
            <GlowingBorder />
          </Button>
        </ModalFooter>
        <GlowingBorder />
      </ModalContent>
    </Modal>
  );
}
