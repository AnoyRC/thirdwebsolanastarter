import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useProgram, useTransferToken } from "@thirdweb-dev/react/solana";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

const Home: NextPage = () => {
  const { program } = useProgram(
    "H99DdjF9Pn1aTEbTmu6fQWSjBbEPfm8YxhTUjUzkPuSy",
    "token"
  );
  const { mutateAsync: transfer, isLoading, error } = useTransferToken(program);

  return (
    <>
      <WalletMultiButtonDynamic />
      <button
        onClick={() =>
          transfer({
            receiverAddress: "FdK7Kuaa6Qao1PQH9mMPYgvEKeC2jAViM67skuAcV1iM",
            amount: 1,
          })
        }
      >
        Transfer
      </button>
    </>
  );
};

export default Home;
