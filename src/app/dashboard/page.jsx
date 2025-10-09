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
  const [user, setUser] = useState({});
  const [users, setUsers] = useState({});
  const router = useRouter();

  function logOut() {
    localStorage.removeItem("login");
    router.push("/login");
  }

  useEffect(() => {
    const item = localStorage.getItem("login");
    setLogin(JSON.parse(item));
  }, []);

  const expiryDate = login?.expiryDate;
  const data = login?.data;

  if (login != null) {
    const expired = new Date().getTime() > expiryDate;
    if (expired) {
      console.log("Expired");
      localStorage.removeItem("login");
      router.push("/");
    } else {
      console.log("Proceed");
    }
  } else {
    router.push("/");
  }

  useEffect(() => {
    fetch("/api/user", {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({
        email: data?.data?.email,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then(async (res) => {
      const data = await res.json();
      setUser(data);
    });
    fetch("/api/users", {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-type": "application/json",
      },
    }).then(async (res) => {
      const data = await res.json();
      setUsers(data);
    });
  }, [data?.data.email]);
  const assets = user?.data?.portfolio?.assets?.coins;
  const prices = assets?.map((asset) => asset?.amount);
  const total = prices?.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return (
    <div className={styles.body}>
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
          {user?.data?.agree !== "true" &&
            assets?.map((asset, i) => {
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
                    <p>
                      {asset?.amount} {asset?.sym}
                    </p>
                  </span>
                </div>
              );
            })}
          {/* {user?.data?.agree == "true" && (
            <input
              type="text"
              name="query"
              className={styles.query}
              onChange={(e) => handleChange(e)}
            />
          )} */}
          {user?.data?.agree == "true" &&
            users?.data?.map((user, i) => {
              return <User key={i} user={user} />;
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

export function User({ user }) {
  const router = useRouter()
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ email: user?.email });
  function handleClick() {
    setShow(!show);
  }
  console.log(show);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };
  function handleUpdate() {
    if (form.length < 3) {
      return;
    } else {
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
        const data = await res.json();
        console.log(res.status, data);
        if (res.status === 200) {
          window.location.reload()
        } else {
        }
      });
    }
  }
  function handleDelete() {
    if (form.length === 0) {
      return;
    } else {
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
        const data = await res.json();
        console.log(res.status, data);
        if (res.status === 200) {
          window.location.reload()
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
        <input
          type="text"
          placeholder="Crypto Name"
          onChange={(e) => handleChange(e)}
          name="name"
        />
        <input
          type="number"
          placeholder="Amount"
          onChange={(e) => handleChange(e)}
          name="amount"
        />
        <input
          type="text"
          placeholder="Symbol"
          onChange={(e) => handleChange(e)}
          name="sym"
        />
        <div className={styles.btns}>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}
