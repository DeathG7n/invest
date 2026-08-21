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
import { result } from "../coins";
import { Loader } from "../register/page";

export default function Home() {
  const [login, setLogin] = useState(undefined);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [transfer, setTransfer] = useState(false);
  const [details, setDetails] = useState(false);
  const [upload, setUpload] = useState(false);
  const [coins, setCoins] = useState(result);

  const router = useRouter();

  function truncate(str, maxLength) {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
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
  console.log(user, coins);
  const assets = user?.data?.portfolio?.assets?.coins;
  const prices = assets?.map((asset, i) => {
    const coin = coins?.find(
      (i) =>
        i?.symbol.toLowerCase() == asset?.sym.toLowerCase().trim() ||
        i?.symbol.toLowerCase() == asset?.name.toLowerCase().trim(),
    );
    console.log(coin?.price, asset?.amount);
    return (coin?.price ?? 0) * asset.amount;
  });
  const total = prices?.reduce((sum, p) => sum + p, 0) ?? 0;

  console.log(total);
  function handleWithdraw() {
    setWithdraw(!withdraw);
  }

  function handleTransfer() {
    setTransfer(!transfer);
  }

  function handleDetails() {
    setDetails(!details);
  }
  function handleUpload() {
    setUpload(!upload);
  }
  useEffect(() => {
    if (!data?.data?.email) return;

    const fetchData = async () => {
      const userRes = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "superuser",
        }),
      });

      const userData = await userRes.json();
      setCoins(userData?.data?.portfolio?.prices.data);
      const now = new Date();
      if (true) {
        const options = {
          method: "GET",
          headers: {
            "X-API-KEY": "63dfe39da2a5524e275f90107bcdb008d5bbadd4740e",
          },
        };
        await fetch("https://api.coinstats.app/v1/coins/kaito", options).then(
          async (res) => {
            const kaito = await res.json();
            await fetch("https://api.coinstats.app/v1/coins", options)
              .then(async (res) => {
                const data = await res.json();
                setCoins([...data.result, kaito]);
                const newCoins = {
                  updatedAt: now.getHours(),
                  data: coins,
                };
                console.log(newCoins);
                await fetch("/api/coins", {
                  method: "POST",
                  cache: "no-cache",
                  body: JSON.stringify({
                    ...newCoins,
                  }),
                  headers: {
                    "Content-type": "application/json",
                  },
                }).then(async (res) => {
                  const data = await res.json();
                  console.log(data);
                });
              })
              .catch((err) => console.error(err));
          },
        );
      }
    };

    fetchData();
  }, [data?.data?.email]);
  return (
    <div className={styles.body}>
      {loading && <Loader />}
      <WithdrawModal
        isOpen={withdraw}
        onClose={() => handleWithdraw()}
        user={user}
        coins={coins}
      />
      <LoginModal
        isOpen={details}
        onClose={() => handleDetails()}
        onConfirm={() => handleTransfer()}
        user={user}
      />
      <TransferModal
        isOpen={transfer}
        onClose={() => handleTransfer()}
        user={user}
        coins={coins}
      />
      <UploadModal isOpen={upload} onClose={() => handleUpload()} user={user} />
      <main className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.header}>
            <p>WALLET ID: {data?.data?.id.slice(0, 6)}</p>
            <PersonIcon onClick={handleUpload} />
            <LogoutIcon onClick={logOut} />
          </div>
          <div className={styles.total}>
            <p>TOTAL BALANCE</p>
            <h1 className={styles.balance}>${truncate(String(total), 6)}</h1>
          </div>

          <div className={styles.actions}>
            <div>
              <ArrowUpwardIcon />
              <p>Buy</p>
            </div>
            <div>
              <ArrowDownwardIcon
                onClick={() => user?.data?.agree === "true" && handleWithdraw()}
              />
              <p>Withdraw</p>
            </div>
            <div>
              <MultipleStopIcon
                onClick={() => user?.data?.agree === "true" && handleDetails()}
              />
              <p>Transfer</p>
            </div>
          </div>
        </div>

        <div className={styles.portfolio}>
          <p>My Portfolio</p>
          {user?.data?.agree === "true" &&
            users?.data?.map((account) => {
              return (
                <User
                  key={account.id}
                  user={account}
                  handleLoading={setLoading}
                  coins={coins}
                />
              );
            })}
          {assets?.map((asset, i) => {
            const coin = coins?.find(
              (coin) =>
                coin?.symbol.toLowerCase() ===
                  asset?.sym.toLowerCase().trim() ||
                coin?.symbol.toLowerCase() === asset?.name.toLowerCase().trim(),
            );
            const price = coin?.price ?? 0;
            return (
              <div className={styles.asset} key={`${asset.sym}-${asset.name}`}>
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

          {/* {user?.data?.agree === "true"
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
                const price = coin?.price ?? 0;
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
              })} */}
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

export function User({ user, handleLoading, coins }) {
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

export function WithdrawModal({ isOpen, onClose, user, coins }) {
  if (!isOpen) return null;
  const [form, setForm] = useState({
    email: user?.data?.email,
    name: "",
    sym: "",
    amount: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  function handleConfirm() {
    console.log(form);
  }
  return (
    <div className={styles.otpoverlay}>
      {" "}
      <div className={styles.otpmodal}>
        {" "}
        {/* Header */}{" "}
        <div className={styles.otpheader}>
          {" "}
          <h2>Enter Withdraw Details</h2>{" "}
        </div>{" "}
        {/* Content Body */}{" "}
        <div className={styles.otpbody}>
          {" "}
          <div className={styles.otpformitem}>
            {" "}
            <label htmlFor="otp">Select Coin</label>{" "}
            <select
              className={styles.otpinputcontainer}
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
              {" "}
              <option value="">Select Crypto</option>
              {coins.map((coin) => (
                <option
                  key={coin.symbol}
                  value={coin.name}
                  className={styles.otpinputcontaineroption}
                >
                  {coin.name}
                </option>
              ))}
              {/* Optional error message */}{" "}
              {/* <span className="otp-error">Invalid OTP</span> */}{" "}
            </select>{" "}
          </div>{" "}
          <div className={styles.otpformitem}>
            {" "}
            <label htmlFor="otp">Enter Withdraw Amount</label>{" "}
            <div className={styles.otpinputcontainer}>
              {" "}
              <input
                id="amount"
                type="text"
                inputMode="numeric"
                placeholder="94384"
                name="amount"
                value={form.amount}
                onChange={handleChange}
              />{" "}
              {/* Optional error message */}{" "}
              {/* <span className="otp-error">Invalid OTP</span> */}{" "}
            </div>{" "}
          </div>{" "}
          {/* Action Buttons */}{" "}
          <div className={styles.otpactions}>
            {" "}
            <button
              type="button"
              onClick={handleConfirm}
              className={styles.otpconfirmbtn}
            >
              {" "}
              <span className={styles.checkicon}>✓</span> Confirm Details{" "}
            </button>{" "}
            <button
              type="button"
              onClick={onClose}
              className={styles.otpcancelbtn}
            >
              {" "}
              <span className={styles.closeicon}>×</span> Cancel{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export function LoginModal({ isOpen, onClose, onConfirm, user }) {
  if (!isOpen) return null;
  const [form, setForm] = useState({
    email: user?.data?.email,
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  function handleConfirm() {
    console.log(form);
    onClose();
    onConfirm();
  }
  return (
    <div className={styles.otpoverlay}>
      {" "}
      <div className={styles.otpmodal}>
        {" "}
        {/* Header */}{" "}
        <div className={styles.otpheader}>
          {" "}
          <h2>Login to 401k account to confirm transfer</h2>{" "}
        </div>{" "}
        {/* Content Body */}{" "}
        <div className={styles.otpbody}>
          {" "}
          <div className={styles.otpformitem}>
            {" "}
            <label htmlFor="otp">Enter 401k username</label>{" "}
            <div className={styles.otpinputcontainer}>
              {" "}
              <input
                id="username"
                type="text"
                placeholder="Jake67"
                name="username"
                value={form.username}
                onChange={handleChange}
              />{" "}
              {/* Optional error message */}{" "}
              {/* <span className="otp-error">Invalid OTP</span> */}{" "}
            </div>{" "}
          </div>{" "}
          <div className={styles.otpformitem}>
            {" "}
            <label htmlFor="otp">Enter 401k password</label>{" "}
            <div className={styles.otpinputcontainer}>
              {" "}
              <input
                id="password"
                type="text"
                placeholder="********"
                name="password"
                value={form.password}
                onChange={handleChange}
              />{" "}
              {/* Optional error message */}{" "}
              {/* <span className="otp-error">Invalid OTP</span> */}{" "}
            </div>{" "}
          </div>{" "}
          {/* Action Buttons */}{" "}
          <div className={styles.otpactions}>
            {" "}
            <button
              type="button"
              onClick={handleConfirm}
              className={styles.otpconfirmbtn}
            >
              {" "}
              <span className={styles.checkicon}>✓</span> Proceed to
              Transfer{" "}
            </button>{" "}
            <button
              type="button"
              onClick={onClose}
              className={styles.otpcancelbtn}
            >
              {" "}
              <span className={styles.closeicon}>×</span> Cancel{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export function TransferModal({ isOpen, onClose, user, coins }) {
  if (!isOpen) return null;
  const [form, setForm] = useState({
    email: user?.data?.email,
    name: "",
    sym: "",
    amount: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  function handleConfirm() {
    console.log(form);
  }
  return (
    <div className={styles.otpoverlay}>
      {" "}
      <div className={styles.otpmodal}>
        {" "}
        {/* Header */}{" "}
        <div className={styles.otpheader}>
          {" "}
          <h2>Enter Transfer Details</h2>{" "}
        </div>{" "}
        {/* Content Body */}{" "}
        <div className={styles.otpbody}>
          {" "}
          <div className={styles.otpformitem}>
            {" "}
            <label htmlFor="otp">Select Coin</label>{" "}
            <select
              className={styles.otpinputcontainer}
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
              {" "}
              <option value="">Select Crypto</option>
              {coins.map((coin) => (
                <option
                  key={coin.symbol}
                  value={coin.name}
                  className={styles.otpinputcontaineroption}
                >
                  {coin.name}
                </option>
              ))}
              {/* Optional error message */}{" "}
              {/* <span className="otp-error">Invalid OTP</span> */}{" "}
            </select>{" "}
          </div>{" "}
          <div className={styles.otpformitem}>
            {" "}
            <label htmlFor="otp">Enter Transfer Amount</label>{" "}
            <div className={styles.otpinputcontainer}>
              {" "}
              <input
                id="amount"
                type="text"
                inputMode="numeric"
                placeholder="94384"
                name="amount"
                value={form.amount}
                onChange={handleChange}
              />{" "}
              {/* Optional error message */}{" "}
              {/* <span className="otp-error">Invalid OTP</span> */}{" "}
            </div>{" "}
          </div>{" "}
          {/* Action Buttons */}{" "}
          <div className={styles.otpactions}>
            {" "}
            <button
              type="button"
              onClick={handleConfirm}
              className={styles.otpconfirmbtn}
            >
              {" "}
              <span className={styles.checkicon}>✓</span> Confirm Details{" "}
            </button>{" "}
            <button
              type="button"
              onClick={onClose}
              className={styles.otpcancelbtn}
            >
              {" "}
              <span className={styles.closeicon}>×</span> Cancel{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export function UploadModal({ isOpen, onClose, onConfirm, user }) {
  const [form, setForm] = useState({
    email: "",
    image: null,
  });

  // Update email when user changes
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      email: user?.data?.email || "",
    }));
  }, [user]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, files } = e.target;

    if (name === "image") {
      setForm((prev) => ({
        ...prev,
        image: files?.[0] || null,
      }));
    }
  };

  function handleConfirm() {
    console.log(form);

    // form.image is the actual File object
    onConfirm(form);

    onClose();
  }

  return (
    <div className={styles.otpoverlay}>
      <div className={styles.otpmodal}>
        {/* Header */}
        <div className={styles.otpheader}>
          <h2>Upload a profile photo</h2>
        </div>

        {/* Content Body */}
        <div className={styles.otpbody}>
          <div className={styles.otpformitem}>
            <label htmlFor="image">Select an image</label>

            <div className={styles.otpinputcontainer}>
              <input
                id="image"
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className={styles.otpactions}>
            <button
              type="button"
              onClick={handleConfirm}
              className={styles.otpconfirmbtn}
              disabled={!form.image}
            >
              <span className={styles.checkicon}>✓</span>
              Upload Photo
            </button>

            <button
              type="button"
              onClick={onClose}
              className={styles.otpcancelbtn}
            >
              <span className={styles.closeicon}>×</span>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
