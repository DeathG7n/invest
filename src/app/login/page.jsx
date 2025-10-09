"use client";

import styles from "./page.module.scss";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader } from "../register/page";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState([]);
  const [data, setData] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false);

  function handleLoading(load) {
    setLoading(load);
  }
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };
  function handleSubmit() {
    if (form.length === 0) {
      return;
    } else {
      setError(false)
      handleLoading(true);
      fetch("/api/login", {
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
        setData(data)
        console.log(res.status, data);
        if (res.status === 200) {
          const now = new Date()
          const expiryDate = now.setHours(now.getHours() + 2)
          localStorage.setItem('login', JSON.stringify({
            expiryDate : expiryDate,
            data : data
          }))
          router.push("/dashboard");
        } else {
            setError(true)
        }
      });
    }
  }
  return (
    <div className={styles.login}>
      {loading && <Loader />}
      <div className={styles.main}>
        <nav className={styles.nav}>
          <Image
            src="/logo.ico"
            alt="Coin Logo"
            className={styles.logo}
            width={150}
            height={65}
            priority
            onClick={() => router.push("/")}
          />
          <button className={styles.plain}>Haven't an account?</button>
          <button
            className={styles.grad}
            onClick={() => router.push("/register")}
          >
            Register
          </button>
        </nav>
        <h1>Login your Account</h1>
        <section className={styles.invest}>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              onChange={(e) => handleChange(e)}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              type="text"
              name="password"
              onChange={(e) => handleChange(e)}
              placeholder="Enter password"
            />
          </div>
          <p className={styles.error}>{data?.message}</p>
          <p>Forget password?</p>
          <button className={styles.grad} onClick={handleSubmit}>
            Login
          </button>
          <p>@ copyright 2013 - 2025 merchant invest.</p>
        </section>
      </div>
      <div className={styles.hero}>
        <Image
          src="/logo.jpg"
          alt="Coin Logo"
          className={styles.logo}
          width={550}
          height={350}
          priority
        />
      </div>
    </div>
  );
}
