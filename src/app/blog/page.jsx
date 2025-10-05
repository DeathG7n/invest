import { Navbar, Footer } from "@/app/page";
import styles from "../investment/plan/page.module.scss";

export default function Blogs() {
  return (
    <>
      <Navbar />
      <div className={styles.hero}>
        <h1>Blog</h1>
        <p>
          <span>Home</span> / Blog
        </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.image1}></div>
          <div className={styles.content}>
            <h3>
              <div>2 years ago</div> <div>0 Comments</div>
            </h3>
            <h2>
              5 Things To Know About Decentralized Finance – The DeFi Series
            </h2>
            <div className={styles.link}>
              <div>Read more</div>
              <div>⭢</div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image2}></div>
          <div className={styles.content}>
            <h3>
              <div>2 years ago</div> <div>0 Comments</div>{" "}
            </h3>
            <h2>Ethereum POS Merge</h2>
            <div className={styles.link}>
              <div>Read more</div>
              <div>⭢</div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image3}></div>
          <div className={styles.content}>
            <h3>
              <div>2 years ago</div> <div>0 Comments</div>{" "}
            </h3>
            <h2>
              No relationship with Coinexio Limited Capital/Coinexio Limited
              Trading
            </h2>
            <div className={styles.link}>
              <div>Read more</div>
              <div>⭢</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
