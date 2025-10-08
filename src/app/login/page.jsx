"use client";

import styles from "./page.module.scss";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState([]);
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
        const data = await res.json();
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
        }
      });
    }
  }
  return (
    <div className={styles.login}>
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
