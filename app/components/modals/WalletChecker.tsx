import { useAnimateStore, useNavigationStore, useThemeStore } from "@/store";
import {
  Button,
  Divider,
  Input,
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

export default function WalletChecker() {
  const animateState = useAnimateStore();
  const [isOpen, setIsOpen] = useState(true);
  const theme = useThemeStore();
  const pathname = usePathname();
  const navigation = useNavigationStore();
  return (
    <Modal
      placement="center"
      backdrop="opaque"
      isOpen={navigation.openWalletChecker}
      onOpenChange={() => {
        navigation.setOpenWalletChecker(false);
      }}
      radius="md"
      isDismissable={false}
      className={`${theme.mode} bg-background text-foreground `}
      closeButton={false}
    >
      <ModalContent className="overflow-hidden relative glowing-border p-[2px]">
        <ModalHeader className="flex flex-col gap-1 font-montserrat text-center text-2xl bg-background/50 rounded-t-xl text-primary">
          Wallet Checker
        </ModalHeader>
        <Divider />
        <ModalBody className="bg-background/50 ">
          <p>Enter yout wallet address to check your eligiblity to summon.</p>
          <Input
            placeholder="Wallet Address"
            className="max-w-[500px] mx-auto"
          />
        </ModalBody>
        <Divider />
        <ModalFooter className="bg-background/50 rounded-b-xl ">
          <Button
            color="primary"
            variant="shadow"
            onPress={() => {}}
            className="glowing-border p-[2px] relative bg-primary/10 after:bg-background/90 sm:after:hover:bg-background/50 "
          >
            <p className="text-xs font-montserrat p-3 text-primary">
              CHECK WALLET
            </p>
            <GlowingBorder />
          </Button>
          {/* <Button
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
          </Button> */}
        </ModalFooter>
        <GlowingBorder />
      </ModalContent>
    </Modal>
  );
}
