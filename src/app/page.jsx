"use client";
import styles from "./page.module.scss";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShieldMoonIcon from "@mui/icons-material/ShieldMoon";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SpeedIcon from "@mui/icons-material/Speed";
import MoodIcon from "@mui/icons-material/Mood";
import HeadsetIcon from "@mui/icons-material/Headset";
import LockIcon from "@mui/icons-material/Lock";

export function Navbar() {
  const [pop, setPop] = useState(false);
  const router = useRouter();
  function handleClick() {
    setPop(!pop);
  }
  return (
    <nav className={styles.nav}>
      <Image
        src="/logo.ico"
        alt="Coin Logo"
        className={styles.logo}
        width={150}
        height={50}
        priority
        onClick={() => router.push("/")}
      />
      <ul>
        <li onClick={() => router.push("/")}>Products</li>
        <li onClick={() => router.push("/investment/plan")}>
          Apps and Services
        </li>
        <li onClick={() => router.push("/about")}>Learn</li>
        <li onClick={() => router.push("/about")}>For Business</li>
        <li onClick={() => router.push("/blog")}>For Developers</li>
        <li onClick={() => router.push("/blog")}>Support</li>
      </ul>
      <div className={styles.select}>
        <button className={styles.plain} onClick={() => router.push("/login")}>
          Login
        </button>
        <button
          className={styles.grad}
          onClick={() => router.push("/register")}
        >
          Register
        </button>
      </div>
      {pop && (
        <main>
          <ol>
            <li onClick={() => router.push("/")}>Products</li>
            <li onClick={() => router.push("/investment/plan")}>
              Apps and Services
            </li>
            <li onClick={() => router.push("/about")}>Learn</li>
            <li onClick={() => router.push("/about")}>For Business</li>
            <li onClick={() => router.push("/blog")}>For Developers</li>
            <li onClick={() => router.push("/blog")}>Support</li>
            <li onClick={() => router.push("/blog")}>EN</li>
          </ol>
          <div>
            <button
              className={styles.plain}
              onClick={() => router.push("/login")}
            >
              Login
            </button>
            <button
              className={styles.grad}
              onClick={() => router.push("/register")}
            >
              Register
            </button>
          </div>
        </main>
      )}
      <div className={styles.menu} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default function Page() {
  const router = useRouter();
  return (
    <div className={styles.page}>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className={styles.content}>
            <h3>SECURE FUND</h3>
            <h1>
              A secure and powerful wallet. <br />
              <span>Powerful Web3 experiences</span>
            </h1>

            <p>
              Unlock the power of your cryptocurrency assets. Buy, store, swap
              tokens & NFTs and explore the world of Web3.
            </p>
            <div className={styles.btn}>
              <button
                className={styles.grad}
                onClick={() => router.push("/register")}
              >
                Get Started →
              </button>
            </div>
          </div>
          <div className={styles.image}>
            <Image
              src="/phone1.png"
              alt="Coin Logo"
              className={styles.image1}
              width={200}
              height={200}
              priority
            />
            <Image
              src="/phone2.png"
              alt="Coin Logo"
              className={styles.image2}
              width={200}
              height={200}
              priority
            />
            <Image
              src="/phone3.png"
              alt="Coin Logo"
              className={styles.image3}
              width={200}
              height={200}
              priority
            />
          </div>
        </section>
        <section className={styles.hero2}>
          <div className={styles.content}>
            <h1>You are the owner of crypto assets</h1>
            <p>
              We secure your wallet, but don't control or have access to your
              private keys or secret phrase - only you do.
            </p>
            <div className={styles.btn}>
              <button
                className={styles.plain}
                onClick={() => router.push("/register")}
              >
                Discover
              </button>
            </div>
          </div>
          <div className={styles.image}>
            <Image
              src="/hero-image.png"
              alt="Coin Logo"
              // className={styles.logo}
              width={600}
              height={600}
              priority
              onClick={() => router.push("/")}
            />
          </div>
        </section>

        <Find />

        <section className={styles.hero3}>
          <div className={styles.image}>
            <Image
              src="/connect-image.png"
              alt="Coin Logo"
              width={500}
              height={500}
              priority
              onClick={() => router.push("/")}
            />
          </div>
          <div className={styles.content}>
            <h1>
              Secure your transactions with the{" "}
              <span>Web3 Connect crypto wallets</span> 🔒
            </h1>
          </div>
        </section>

        <section className={styles.coins}>
          <div className={styles.header}>
            <h1>Thousands of supported coins and tokens</h1>
            <div className={styles.btn}>
              <button className={styles.plain} onClick={() => router.push("/register")}>
                See all supported cryptos
              </button>
            </div>
          </div>
          <p>Bitcoin, Ethereum, USDT, Solana and more...</p>
          <div></div>
        </section>

        <section className={styles.connect}>
          <div className={styles.header}>
            <h1>
              <span>Web3 Connect Live</span>– The crypto companion app for your
              crypto wallet
            </h1>
          </div>
          <div className={styles.image}>
            <Image
              src="/web1.png"
              alt="Coin Logo"
              // className={styles.logo}
              width={400}
              height={400}
              priority
              onClick={() => router.push("/")}
            />
            <Image
              src="/web2.png"
              alt="Coin Logo"
              // className={styles.logo}
              width={400}
              height={400}
              priority
              onClick={() => router.push("/")}
            />
            <Image
              src="/web3.png"
              alt="Coin Logo"
              // className={styles.logo}
              width={400}
              height={400}
              priority
              onClick={() => router.push("/")}
            />
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h2>Buying, selling and swapping</h2>
              <p>
                Use Web3 Connect Live to connect your hardware wallet to trade
                or swap your crypto on-market. Find out more about Web3 Connect
                Live here.
              </p>
            </div>
            <div className={styles.card}>
              <h2>Staking crypto</h2>
              <p>
                It's possible to get rewarded by staking ETH, SOL, ATOM, ADA,
                and several other coins through Web3 Connect Live.
              </p>
            </div>
            <div className={styles.card}>
              <h2>Stay on top of your assets</h2>
              <p>
                Browse and compare the performance of your assets. See supported
                crypto.
              </p>
            </div>
          </div>
          <div className={styles.btn}>
            <button className={styles.plain}>Shop our wallets →</button>
          </div>
        </section>

        <Letter />
        <Footer />
      </main>
    </div>
  );
}

export function Letter() {
  return (
    <section className={styles.letter}>
      <h1>Subscribe to our newsletter</h1>
      <p>
        New coins supported, blog updates and exclusive offers directly in your
        inbox
      </p>
      <div>
        <input type="text" placeholder="Enter email here" />
        <button>Subscribe to newsletter</button>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <section className={styles.footer}>
      <Image
        src="/logo.ico"
        alt="Coin Logo"
        className={styles.image}
        width={150}
        height={75}
        priority
      />
      <small>© Web3 Connect. All rights reserved.</small>
      <h2>WEB3 CONNECT SERVICES</h2>
      <p>Buying crypto</p>
      <p>Staking</p>
      <p>Swapping crypto Privacy Policy</p>
    </section>
  );
}

export function Find() {
  const router = useRouter();
  return (
    <section className={styles.find}>
      <div className={styles.header}>
        <h1>Find the right Web3 Connect wallet for you</h1>
        <div className={styles.btn}>
          <button className={styles.plain} onClick={() => router.push("/register")}>Compare Ledger Wallets</button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.card}>
          <span>NEW</span>
          <h2>Buy,Send,Store & Swap</h2>
          <p>
            Designed with accessible sizing, the largest new secure touchscreen
            to easily experience and manage crypto & NFTs.
          </p>
          <p className={styles.gray}>
            <span className={styles.star}>★★★★★</span>0 Reviews
          </p>
          <button onClick={() => router.push("/register")}>Discover now →</button>
        </div>
        <div className={styles.card}>
          <span>NEW</span>
          <h2>Manage your NFT collection</h2>
          <p>
            The most premium secure touchscreen hardware wallet to protect and
            manage crypto and NFTs.
          </p>
          <p className={styles.gray}>
            <span className={styles.star}>★★★★★</span>0 Reviews
          </p>
          <button onClick={() => router.push("/register")}>Discover now →</button>
        </div>
        <div className={styles.card}>
          <span>NEW</span>
          <h2>Easy to read Activity History</h2>
          <p>
            Our classic entry-level hardware wallets built with all the
            essential security features to secure your digital assets.
          </p>
          <p className={styles.gray}>
            <span className={styles.star}>★★★★★</span>0 Reviews
          </p>
          <button onClick={() => router.push("/register")}>Discover now →</button>
        </div>
      </div>
    </section>
  );
}
