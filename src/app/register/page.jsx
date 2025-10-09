"use client";

import styles from "./page.module.scss";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  const [data, setData] = useState({})

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
    if (form.length === 0 && form?.email !== form?.retype_email) {
      return;
    } else {
      setError(false)
      handleLoading(true);
      fetch("/api/register", {
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
          router.push("/login");
        } else {
          setError(true)
        }
      });
    }
  }
  return (
    <div className={styles.register}>
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
          <button className={styles.plain}>Already registered?</button>
          <button className={styles.grad} onClick={() => router.push("/login")}>
            Login
          </button>
        </nav>
        <h1>Create an account</h1>
        <section className={styles.invest}>
          <div>
            <label htmlFor="">Full Name</label>
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="">User Name</label>
            <input
              type="text"
              name="user_name"
              onChange={(e) => handleChange(e)}
              placeholder="User Name"
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
          <div className={styles.email}>
            <label htmlFor="">Retype Email</label>
            <input
              type="text"
              name="retype_email"
              onChange={(e) => handleChange(e)}
              placeholder="Retype Email"
            />
          </div>
          <div>
            <label htmlFor="">Country</label>
            <input
              type="text"
              name="country"
              onChange={(e) => handleChange(e)}
              placeholder="Country"
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
          <p className={styles.error}>{data?.message}</p>
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
          <button className={styles.grad} onClick={handleSubmit}>
            Register
          </button>
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

export function Loader() {
  return (
    <section className={styles.loader}>
      <Image src="/logo.ico" alt="Coin Logo" width={50} height={50} priority />
    </section>
  );
}
