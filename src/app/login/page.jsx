"use client"

import styles from "./page.module.scss";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.main}>
        <nav className={styles.nav}>
          <Image
            src="/logo.jpg"
            alt="Coin Logo"
            className={styles.logo}
            width={90}
            height={65}
            priority
            onClick={() => router.push("/")}
          />
          <button className={styles.plain}>Haven't an account?</button>
          <button className={styles.grad}>Register</button>
        </nav>
        <h1>Login your Account</h1>
        <section className={styles.invest}>
          <div>
            <label htmlFor="">Email</label>
            <input type="text" name="" id="" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="text" name="" id="" placeholder="Enter password" />
          </div>
          <p>Forget password?</p>
          <button className={styles.grad}>Login</button>
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
            onClick={() => router.push("/")}
          />
      </div>
    </div>
  );
}
