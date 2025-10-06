"use client";

import styles from "./page.module.scss";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Register() {
  return (
    <div className={styles.register}>
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
          <button className={styles.plain}>Already registered?</button>
          <button className={styles.grad}>Login</button>
        </nav>
        <h1>Create an account</h1>
        <section className={styles.invest}>
          <div>
            <label htmlFor="">First Name</label>
            <input type="text" name="" id="" placeholder="First Name" />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input type="text" name="" id="" placeholder="Last Name" />
          </div>
          <div>
            <label htmlFor="">Username</label>
            <input type="text" name="" id="" placeholder="User name" />
          </div>
          <div>
            <label htmlFor="">Phone</label>
            <input type="text" name="" id="" placeholder="Phone" />
          </div>
          <div className={styles.email}>
            <label htmlFor="">Email</label>
            <input type="text" name="" id="" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="text" name="" id="" placeholder="Password" />
          </div>
          <div>
            <label htmlFor="">Confirm Password</label>
            <input type="text" name="" id="" placeholder="Confirm Password" />
          </div> 
        </section>
        <section className={styles.footer}>
            <div><input type="checkbox" name="" id="" /><label htmlFor="">I agree to the Privacy policy</label></div>
            <button className={styles.grad}>Login</button>
            <p>@ copyright 2013 - 2025 merchant invest.</p>
        </section>
      </div>
      <div className={styles.hero}>
        <Image
          src="/logo.jpg"
          alt="Coin Logo"
          className={styles.logo}
          width={450}
          height={250}
          priority
          onClick={() => router.push("/")}
        />
      </div>
    </div>
  );
}
