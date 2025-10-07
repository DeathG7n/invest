"use client";

import styles from "./page.module.scss";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter()
  const [form, setForm] = useState([]);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form)
  };

  function handleSubmit() {
    if (form.length === 0 && form?.password !== form?.confirm_password) {
      return;
    } else {
      fetch("/api/register", {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify({
          ...form,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then(async(res) => {
          const data = await res.json();
          console.log(res.status, data);
          if (res.status === 200) {
            router.push("/login");
          } else {
          }
        })
    }
  }
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
          <button className={styles.grad} onClick={()=> router.push("/login")}>Login</button>
        </nav>
        <h1>Create an account</h1>
        <section className={styles.invest}>
          <div>
            <label htmlFor="">First Name</label>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              name="last_name"
              onChange={(e) => handleChange(e)}
              placeholder="Last Name"
            />
          </div>
          <div>
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="user_name"
              onChange={(e) => handleChange(e)}
              placeholder="User name"
            />
          </div>
          <div>
            <label htmlFor="">Phone</label>
            <input
              type="number"
              name="phone"
              onChange={(e) => handleChange(e)}
              placeholder="Phone"
            />
          </div>
          <div className={styles.email}>
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              onChange={(e) => handleChange(e)}
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              type="text"
              name="password"
              onChange={(e) => handleChange(e)}
              placeholder="Password"
            />
          </div>
          <div>
            <label htmlFor="">Confirm Password</label>
            <input
              type="text"
              name="confirm_password"
              onChange={(e) => handleChange(e)}
              placeholder="Confirm Password"
            />
          </div>
        </section>
        <section className={styles.footer}>
          <div>
            <input
              type="checkbox"
              name="agree"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="">I agree to the Privacy policy</label>
          </div>
          <button className={styles.grad} onClick={handleSubmit}>Register</button>
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
        />
      </div>
    </div>
  );
}
