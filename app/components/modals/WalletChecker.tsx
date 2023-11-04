import { useAnimateStore, useNavigationStore, useThemeStore } from "@/store";
import {
  Button,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Spinner,
} from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { BsWalletFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import GlowingBorder from "../Styles/GlowingBorder";
import { MdDangerous } from "react-icons/md";
import useSWR from "swr";
import { IoIosWarning, IoMdAdd } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
export default function WalletChecker() {
  const theme = useThemeStore();
  const navigation = useNavigationStore();
  const animate = useAnimateStore();
  const [isLoading, setIsLoading] = useState(false);
  const [address, setAddress] = useState<string | undefined>();
  const [eligibility, setEligibility] = useState<
    "og" | "white" | "ga" | "none" | "invalid" | undefined
  >();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const [message, setMessage] = useState(
    "Enter your wallet address to check your eligiblity to summon."
  );

  const { data: whitelistData, error: whitelistError } = useSWR(
    "/Wallets/Whitelist.json",
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
        "Enter your wallet address to check your eligiblity to summon."
      );
      return;
    }
    let isOG = false;
    let isWhitelist = false;
    let isGuaranteed = false;
    let isValidAddress = true;
    // Check if the address is valid
    if (String(addr).length !== 42 && addr !== "") {
      isValidAddress = false;
      setEligibility("invalid");
      setMessage("Not a valid address");
    }
    if (isValidAddress) {
      // Only check OG, Whitelist, and Guaranteed if the address is valid
      if (ogData) {
        const loweracc = ogData.map((acc: string) => acc.toLowerCase());
        const useradd = addr.toLowerCase();

        if (loweracc.includes(useradd)) {
          isOG = true;
          setEligibility("og");
        }
      }

      if (whitelistData) {
        const loweracc = whitelistData.map((acc: string) => acc.toLowerCase());
        const useradd = addr.toLowerCase();

        if (loweracc.includes(useradd)) {
          isWhitelist = true;
          setEligibility("white");
        }
      }

      if (gaData) {
        const loweracc = gaData.map((acc: string) => acc.toLowerCase());
        const useradd = addr.toLowerCase();

        if (loweracc.includes(useradd)) {
          isGuaranteed = true;
          setEligibility("ga");
        }
      }

      // Update the message based on the results
      if (!isOG && !isWhitelist && !isGuaranteed) {
        setMessage("Sorry! you are not qualified to summon a Hero.");
        setEligibility("none");
      } else if (isOG) {
        setMessage("You are listed on OG mint.");
      } else if (isWhitelist) {
        setMessage("You are listed on Whitelist mint.");
      } else if (isGuaranteed) {
        setMessage("You are listed on Guaranteed mint.");
      }
    }
  };

  useEffect(() => {
    if (!address) {
      setIsLoading(false);
      setEligibility(undefined);
      handleChecks("");
      return;
    }
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
      handleChecks(address);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [address]);

  useEffect(() => {
    if (!navigation.openWalletChecker) {
      setMessage(
        "Enter your wallet address to check your eligiblity to summon."
      );
    }
  }, [navigation.openWalletChecker]);

  useEffect(() => {
    navigation.setOpenWalletChecker(false);
    setEligibility(undefined);
    setIsLoading(false);
    handleChecks("");
  }, []);

  return (
    <Modal
      placement="center"
      backdrop="opaque"
      isOpen={navigation.openWalletChecker && animate.mode}
      onOpenChange={() => {
        navigation.setOpenWalletChecker(false);
        setAddress("");
      }}
      radius="md"
      isDismissable
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
            color={
              eligibility
                ? eligibility === "invalid" || eligibility === "none"
                  ? "danger"
                  : "success"
                : "primary"
            }
            label={"Enter your wallet address to check your eligibility"}
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <div className="text-center">
            {isLoading ? (
              <Spinner size="sm" color="primary" />
            ) : (
              <div
                className={`
                ${
                  eligibility === "invalid" || eligibility === "none"
                    ? "text-danger"
                    : "text-success"
                } 
                font-black flex flex-col gap-2 justify-center items-center
                `}
              >
                <AnimatePresence>
                  {eligibility && (
                    <>
                      {eligibility === "invalid" || eligibility === "none" ? (
                        <motion.span
                          key={"error"}
                          initial={{ scale: 0.1, opacity: 0, rotate: "60deg" }}
                          animate={{ scale: 1, opacity: 1, rotate: "0deg" }}
                          transition={{
                            type: "spring",
                            duration: 0.5,
                            damping: 12,
                          }}
                          className="text-4xl flex flex-col gap-2 items-center justify-center"
                        >
                          <MdDangerous />
                          <p className="text-danger text-xs">{message}</p>
                        </motion.span>
                      ) : (
                        <motion.div
                          key={"success"}
                          initial={{ scale: 0.1, opacity: 0, rotate: "60deg" }}
                          animate={{ scale: 1, opacity: 1, rotate: "0deg" }}
                          transition={{
                            type: "spring",
                            duration: 0.5,
                            damping: 12,
                          }}
                          className="text-4xl flex flex-col gap-2 justify-center items-center"
                        >
                          <FaCheckCircle />
                          <p className="text-success text-xs">{message}</p>
                          <Button
                            className="text-xs font-black text-white"
                            color="primary"
                            variant="shadow"
                          >
                            GO TO MINT
                          </Button>
                        </motion.div>
                      )}
                    </>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
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
