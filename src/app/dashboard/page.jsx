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
import { coins } from "../coins";
import { Loader } from "../register/page";

export default function Home() {
  const [login, setLogin] = useState(undefined);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  function truncate(str, maxLength) {
  return str.length > maxLength
    ? str.slice(0, maxLength) + "..."
    : str;
  }

  function logOut() {
    localStorage.removeItem("login");
    router.push("/login");
  }

  useEffect(() => {
    const item = localStorage.getItem("login");

    if (!item) {
      setLogin(null);
      return;
    }

    try {
      setLogin(JSON.parse(item));
    } catch {
      localStorage.removeItem("login");
      setLogin(null);
    }
  }, []);

  const expiryDate = login?.expiryDate;
  const data = login?.data;

  useEffect(() => {
    if (login === undefined) return;
    if (login === null) {
      router.replace("/");
      return;
    }

    if (login?.expiryDate && Date.now() > login.expiryDate) {
      localStorage.removeItem("login");
      router.replace("/");
    }
  }, [login, router]);

  useEffect(() => {
    if (!data?.data?.email) return;

    const fetchData = async () => {
      const userRes = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.data.email,
        }),
      });

      const userData = await userRes.json();
      setUser(userData);

      if (userData.data.agree === "true") {
        const usersRes = await fetch("/api/users");
        setUsers(await usersRes.json());
      }
    };

    fetchData();
  }, [data?.data?.email]);
  console.log(user);
  const assets = user?.data?.portfolio?.assets?.coins;
  const prices = assets?.map((asset, i) => {
    const coin = coins?.find(
      (i) =>
        i?.symbol.toLowerCase() == asset?.sym.toLowerCase().trim() ||
        i?.symbol.toLowerCase() == asset?.name.toLowerCase().trim(),
    );
    console.log(coin?.current_price, asset?.amount);
    return (coin?.current_price ?? 0) * asset.amount;
  });
  const total = prices?.reduce((sum, p) => sum + p, 0) ?? 0;

  console.log(total);

  return (
    <div className={styles.body}>
      {loading && <Loader />}
      <main className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.header}>
            <p>WALLET ID: {data?.data?.id.slice(0, 6)}</p>
            <PersonIcon />
            <LogoutIcon onClick={logOut} />
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
          {user?.data?.agree === "true"
            ? users?.data?.map((account) => {
                return (
                  <User
                    key={account.id}
                    user={account}
                    handleLoading={setLoading}
                  />
                );
              })
            : assets?.map((asset, i) => {
                const coin = coins?.find(
                  (coin) =>
                    coin?.symbol.toLowerCase() ===
                      asset?.sym.toLowerCase().trim() ||
                    coin?.symbol.toLowerCase() ===
                      asset?.name.toLowerCase().trim(),
                );
                const price = coin?.current_price ?? 0;
                return (
                  <div
                    className={styles.asset}
                    key={`${asset.sym}-${asset.name}`}
                  >
                    <span className={styles.name}>
                      <p>&</p>
                      <div>
                        <p>{asset?.name}</p>
                        <h3>${truncate(String(price), 7)}</h3>
                      </div>
                    </span>
                    <span className={styles.amount}>
                      <h3>${truncate(String(price * asset?.amount), 6)}</h3>
                      <p>
                        {asset?.amount} {asset?.sym}
                      </p>
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
          <div
            className={styles.active}
            onClick={() => router.push("/dashboard")}
          >
            Home
          </div>
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

export function User({ user, handleLoading }) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    email: user?.email,
    name: "",
    sym: "",
    amount: "",
  });
  function handleClick() {
    setShow(!show);
  }
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  function handleUpdate() {
    if (!form.name || !form.amount || !form.sym) {
      return;
    } else {
      handleLoading(true);
      fetch("/api/update", {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify({
          ...form,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }).then(async (res) => {
        handleLoading(false);
        const data = await res.json();
        if (res.status === 200) {
          window.location.reload();
        } else {
        }
      });
    }
  }
  function handleDelete() {
    if (!form.name || !form.amount || !form.sym) {
      return;
    } else {
      handleLoading(true);
      fetch("/api/delete", {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify({
          ...form,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }).then(async (res) => {
        handleLoading(false);
        const data = await res.json();
        if (res.status === 200) {
          window.location.reload();
        } else {
        }
      });
    }
  }
  return (
    <div className={styles.user}>
      <p onClick={handleClick}>{user?.email}</p>
      {user?.portfolio?.assets?.coins?.map((coin, i) => {
        return (
          <p key={i} onClick={handleClick}>
            <span>{coin?.name}</span>
            <span>{coin?.amount}</span>
            <span>{coin?.sym}</span>
          </p>
        );
      })}
      <div className={styles.details}>
        <select
          name="name"
          value={form.name}
          onChange={(e) => {
            const selectedCoin = coins.find(
              (coin) => coin.name === e.target.value,
            );

            setForm({
              ...form,
              name: selectedCoin?.name || "",
              sym: selectedCoin?.symbol || "",
            });
          }}
        >
          <option value="">Select Crypto</option>

          {coins.map((coin) => (
            <option key={coin.symbol} value={coin.name}>
              {coin.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Amount"
          name="amount"
          value={form.amount}
          onChange={handleChange}
        />

        <input
          type="text"
          name="sym"
          value={form.sym}
          readOnly
          placeholder="Symbol"
        />
        <div className={styles.btns}>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}
