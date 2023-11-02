import { useNavigationStore, useThemeStore } from "@/store";
import {
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import { BsWalletFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import GlowingBorder from "../Styles/GlowingBorder";
import { MdDangerous } from "react-icons/md";
import useSWR from "swr";
import { IoIosWarning } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
export default function WalletChecker() {
  const theme = useThemeStore();
  const navigation = useNavigationStore();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const [message, setMessage] = useState(
    <span>Enter yout wallet address to check your eligiblity to summon.</span>
  );

  const { data: whitelistData, error: whitelistError } = useSWR(
    "/Wallets/whitelist.json",
    fetcher
  );
  const { data: ogData, error: ogError } = useSWR("/Wallets/OG.json", fetcher);
  const { data: gaData, error: gaError } = useSWR(
    "/Wallets/Guarranted.json",
    fetcher
  );

  const handleChecks = (addr: string) => {
    if (addr === "") {
      setMessage(
        <span>
          Enter yout wallet address to check your eligiblity to summon.
        </span>
      );
      return;
    }

    let isOG = false;
    let isWhitelist = false;
    let isGuaranteed = false;
    let isValidAddress = true;

    // Check if the address is valid
    if (String(addr).length !== 42) {
      isValidAddress = false;
      setMessage(
        <p className="text-warning flex flex-row items-center justify-center gap-2">
          <span>Not a valid address</span>
          <span className="text-2xl">
            <IoIosWarning />
          </span>
        </p>
      );
    }
    if (isValidAddress) {
      // Only check OG, Whitelist, and Guaranteed if the address is valid
      if (ogData) {
        const loweracc = ogData.map((acc: string) => acc.toLowerCase());
        const useradd = addr.toLowerCase();

        if (loweracc.includes(useradd)) {
          isOG = true;
        }
      }

      if (whitelistData) {
        const loweracc = whitelistData.map((acc: string) => acc.toLowerCase());
        const useradd = addr.toLowerCase();

        if (loweracc.includes(useradd)) {
          isWhitelist = true;
        }
      }

      if (gaData) {
        const loweracc = gaData.map((acc: string) => acc.toLowerCase());
        const useradd = addr.toLowerCase();

        if (loweracc.includes(useradd)) {
          isGuaranteed = true;
        }
      }

      // Update the message based on the results
      if (!isOG && !isWhitelist && !isGuaranteed) {
        setMessage(
          <p className="text-danger flex flex-row items-center justify-center gap-2">
            <span>Sorry! you are not qualified to summon a Hero.</span>
            <span className="text-2xl">
              <MdDangerous />
            </span>
          </p>
        );
      } else if (isOG) {
        setMessage(
          <p className="text-success flex flex-row items-center justify-center gap-2">
            <span>Congratulations! You are listed on OG mint.</span>
            <span className="text-2xl">
              <FaCheckCircle />
            </span>
          </p>
        );
      } else if (isWhitelist) {
        setMessage(
          <p className="text-success flex flex-row items-center justify-center gap-2">
            <span>Congratulations! You are listed on Whitelist mint.</span>
            <span className="text-2xl">
              <FaCheckCircle />
            </span>
          </p>
        );
      } else if (isGuaranteed) {
        setMessage(
          <p className="text-success flex flex-row items-center justify-center gap-2">
            <span>Congratulations! You are listed on Guaranteed mint.</span>
            <span className="text-2xl">
              <FaCheckCircle />
            </span>
          </p>
        );
      }
    }
  };

  useEffect(() => {
    if (!navigation.openWalletChecker) {
      setMessage(
        <span>
          Enter yout wallet address to check your eligiblity to summon.
        </span>
      );
    }
  }, [navigation.openWalletChecker]);

  return (
    <Modal
      placement="center"
      backdrop="opaque"
      isOpen={navigation.openWalletChecker}
      onOpenChange={() => {
        navigation.setOpenWalletChecker(false);
      }}
      radius="md"
      className={`${theme.mode} bg-background text-foreground `}
      closeButton={false}
    >
      <ModalContent className="overflow-hidden relative glowing-border">
        <ModalHeader className="flex flex-row items-center justify-center gap-2 font-montserrat text-center text-2xl bg-background/50 rounded-t-xl text-primary">
          Wallet Checker{" "}
          <span>
            <BsWalletFill />
          </span>
        </ModalHeader>
        <Divider />
        <ModalBody className="bg-background/50 py-4">
          <Input
            className="max-w-[500px] mx-auto"
            type={"text"}
            variant="bordered"
            color="primary"
            placeholder={"Wallet address"}
            onChange={(e) => {
              handleChecks(e.target.value);
            }}
          />
          <div className="text-center">{message}</div>
        </ModalBody>
        {/* <Divider /> */}
        {/* <ModalFooter className="bg-background/50 rounded-b-xl ">
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
        </ModalFooter> */}
        <GlowingBorder />
      </ModalContent>
    </Modal>
  );
}
