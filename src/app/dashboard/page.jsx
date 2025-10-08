"use client";

import styles from "./page.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [login, setLogin] = useState({});
  const router = useRouter();

  useEffect(() => {
    const item = localStorage.getItem("login");
    setLogin(JSON.parse(item));
  }, []);

  const expiryDate = login?.expiryDate;
  const data = login?.data;
  console.log(login);

  if (login != null) {
    const expired = new Date().getTime() > expiryDate;
    if (expired) {
      console.log("Expired");
      localStorage.removeItem("login");
      router.push("/");
    } else {
      console.log("Proceed");
    }
  } else{
      router.push("/");
  }

  function sum(arr) {
    return arr?.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  }

  const assets = data?.data?.portfolio?.assets?.coins;
  const prices = assets?.map((asset) => asset?.amount);
  const total = prices?.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(assets)
  return (
    <div className={styles.body}>
      <main className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.header}>
            <p>WALLET ID: {data?.data?.id.slice(0, 6)}</p>
            <PersonIcon />
            <LogoutIcon />
          </div>
          <div className={styles.total}>
            <p>TOTAL BALANCE</p>
            <h1 className={styles.balance}>${total}</h1>
          </div>

          <div className={styles.actions}>
            <div>
              <ArrowUpwardIcon />
              <p>Buy</p>
            </div>
            <div>
              <ArrowDownwardIcon />
              <p>Withdraw</p>
            </div>
            <div>
              <MultipleStopIcon />
              <p>Transfer</p>
            </div>
          </div>
        </div>

        <div className={styles.portfolio}>
          <p>My Portfolio</p>
          {assets?.map((asset, i) => {
            return (
              <div className={styles.asset} key={i}>
                <span className={styles.name}>
                  <p>&</p>
                  <div>
                    <p>{asset?.name}</p>
                    <h3>$0</h3>
                  </div>
                </span>
                <span className={styles.amount}>
                  <h3>$0.00</h3>
                  <p>{asset?.amount} {asset?.sym}</p>
                </span>
              </div>
            );
          })}
        </div>

        <div className={styles.footer}>
          <div className={styles.item}>
            .
            <div>
              <AccountBalanceWalletIcon />
              <p>Connect</p>
            </div>
          </div>
          <div className={styles.item}>
            .
            <div>
              <MultipleStopIcon sx={{ color: "#00b2ff" }} />
              <p>Send</p>
            </div>
          </div>
          <div className={styles.active} onClick={()=>router.push("/dashboard")}>Home</div>
          <div className={styles.item}>
            .
            <div>
              <SystemUpdateAltIcon sx={{ color: "#00b2ff" }} />
              <p>Withdraw</p>
            </div>
          </div>
          <div className={styles.item}>
            .
            <div>
              <CreditCardIcon sx={{ color: "#a51e03ff" }} />
              <p>Card</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
