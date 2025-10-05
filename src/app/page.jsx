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
    const [pop, setPop] = useState(true);
  const router = useRouter();
  function handleClick() {
    setPop(!pop);
  }
  return (
    <nav className={styles.nav}>
      <Image
        src="/logo.jpg"
        alt="Coin Logo"
        className={styles.logo}
        width={75}
        height={50}
        priority
        onClick={() => router.push("/")}
      />
      <ul>
        <li onClick={() => router.push("/")}>Home</li>
        <li onClick={() => router.push("/investment/plan")}>
          Investment Plans
        </li>
        <li onClick={() => router.push("/about")}>About</li>
        <li onClick={() => router.push("/contact")}>Contact</li>
        <li onClick={() => router.push("/blog")}>Blog</li>
      </ul>
      <div className={styles.select}>
        <select name="lang" id="lang">
          <option value="afrikaans">Afrikaans</option>
          <option value="spanish">Spanish</option>
          <option value="english">English</option>
        </select>
        <button className={styles.plain}>Login</button>
        <button className={styles.grad}>Sign Up</button>
      </div>
      {pop && (
        <main>
          <ol onClick={() => router.push("/wallet")}>
            <li>Home</li>
            <li>Investment Plans</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
          </ol>
          <div>
            <select name="lang" id="lang">
              <option value="afrikaans">Afrikaans</option>
              <option value="spanish">Spanish</option>
              <option value="english">English</option>
            </select>
            <button className={styles.plain}>Login</button>
            <button className={styles.grad}>Sign Up</button>
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
  return (
    <div className={styles.page}>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <h1>Go to the next level of investing</h1>
          <p>
            Why don't you invest in your own future, we offer a more flexible
            financial structure
          </p>
          <div className={styles.btn}>
            <button className={styles.grad}>Get Started</button>
            <button className={styles.plain}>Know More</button>
          </div>
        </section>
        <section className={styles.stats}>
          <div>
            <h2>45+</h2>
            <p>Total Agent in the Company</p>
          </div>
          <div>
            <h2>54,523k</h2>
            <p>Total Investors since 2013</p>
          </div>
          <div>
            <h2>$500.5 Million</h2>
            <p>Total Withdraw since 2013</p>
          </div>
          <div>
            <h2>$35.4 Million</h2>
            <p>Total Deposit since 2013</p>
          </div>
        </section>
        <section className={styles.join}>
          <div className={styles.image}></div>
          <div className={styles.merchant}>
            <h1>Join merchant community</h1>
            <div>
              <h2>WELCOME TO MERCHANTS INVEST COMPANY .</h2>
              <p>
                We take your privacy and security very serious here at merchants
                invest.. <br />
                As a platform you can trust, we're built with a 256 bit
                encryption level to add an additional layer of security. <br />
                You can protect your assets by setting up your account to use
                google two factor authenticator.
              </p>
            </div>
            <div>
              <h2>OUR AMAZING FEATURES</h2>
              <h3>Risk Analysis</h3>
              <p>
                'Business' means that you have to treat this endeavour as a
                business and not a gamble. if you had a business plan to show
                Warrent Buffett, would he approve and invest in you? Bussiness
                that are strong with a clear strategy ,with a competitive moat.
                You need to structure your trading business in the same way.
                Make a deposit through our secure wallet to wallet transfer and
                get credited almost instantly and start earning daily intrest
                till deposit term expire
              </p>
              <h3>Complete Financial Planning</h3>
              <p>
                Developing a clear edge, sitting on your hands untill your edge
                is in play (patient) diversifying your bets without
                disworsifying them, and managing correlation is key to this part
                of the equation. But also being in a personal posistion toi make
                trading work for you. Dont think about paying up your bills
                instantly with your trading. rather, make sure you have
                diversify income streams that allows you learn survive and then
                thrive without been pressured to perform
              </p>
              <h3>Cloud Mining</h3>
              <p>
                Mine Bitcoin in the cloud without buying any mining hardware.
                Simply choose the amount of computing power you want to mine
                with on our global datacenters and leave the rest to us. We have
                set up a remote mining rig for you, simply select a plan that
                best fits your financial capabilities and mine various crypto
                currencies on the go. Looking to invest long term , merchants
                invest . cloud mining is a sure go. <br />
                <strong>Need Help? mail us</strong>
              </p>
            </div>
            <button className={styles.grad}>Learn More</button>
          </div>
        </section>
        <Plans />
        <section className={styles.invest}>
          <div>
            <label htmlFor="">Amount</label>
            <input type="text" name="" id="" placeholder="Enter amount" />
          </div>
          <div>
            <label htmlFor="">Investment Plan</label>
            <select name="" id="">
              <option value="">Select a Plan</option>
            </select>
          </div>
          <button className={styles.grad}>Calculate earning</button>
        </section>
        <Best />
        <section className={styles.work}>
          <h1>How it's works</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.tag}>1</div>
              <div className={styles.content}>
                <h2>Create an account</h2>
                <p>
                  Sign-up to get started. It's takes a few minutes to complete
                  registration
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.tag}>2</div>
              <div className={styles.content}>
                <h2>Make your investment</h2>
                <p>
                  Make your investment deposit using Bitcoin or other accepted
                  payment methods.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.tag}>3</div>
              <div className={styles.content}>
                <h2>Start earning and withdraw</h2>
                <p>
                  Now you are all setup and ready to start earning and withdraw
                  without hassle.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Faqs />
        <Recent />
        <Deposit />
        <Review />
        <section className={styles.news}>
          <h1>Our latest news</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.image1}></div>
              <div className={styles.content}>
                <h2>
                  5 Things To Know About Decentralized Finance – The DeFi Series
                </h2>
                <h3>
                  <div>2 years ago</div> <div>0 Comments</div>
                </h3>
                <p>
                  5 Things To Know About Decentralized Finance – The DeFi Series
                  Decentralized finance, known as DeFi for short, is a trend in
                  the crypto sphere gaining steam and showing promise, though
                  credible reservations remain. Decentralized finance is
                  predicated on two primary principles:
                </p>
                <div className={styles.link}>
                  <div>Read more</div>
                  <div>⭢</div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.image2}></div>
              <div className={styles.content}>
                <h2>Ethereum POS Merge</h2>
                <h3>
                  <div>2 years ago</div> <div>0 Comments</div>{" "}
                </h3>
                <p>
                  Everything you should know about the ETH Merge In the past few
                  years, one of the biggest topics in the cryptocurrency
                  industry has been Ethereum’s switch from proof-of-work to
                  proof-of-stake. After years of being postponed, the switch
                  between consensus methods aka “The Merge”, will finally be
                  taking place in September 2022. This blog post sums up
                  everything you need to know.
                </p>
                <div className={styles.link}>
                  <div>Read more</div>
                  <div>⭢</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.letter}>
          <h1>Our newsletter</h1>
          <p>
            Sign up to our newsletter, the alphagram, so you can be the first to
            find out the latest news and tips about applications, as well as
            general merchant invest updates
          </p>
          <div>
            <input type="text" placeholder="Enter email here" />
            <button>Subscribe</button>
          </div>
        </section>
        <section className={styles.footer}>
          <Image
            src="/logo.jpg"
            alt="Coin Logo"
            className={styles.image}
            width={100}
            height={75}
            priority
          />
          <div>
            <span>
              <FacebookOutlinedIcon sx={{ color: "grey" }} />
            </span>
            <span>
              <LinkedInIcon sx={{ color: "grey" }} />
            </span>
            <span>
              <TwitterIcon sx={{ color: "grey" }} />
            </span>
            <span>
              <InstagramIcon sx={{ color: "grey" }} />
            </span>
          </div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <p>@ copyright 2013 - 2025 merchant invest.</p>
        </section>
      </main>
    </div>
  );
}

export function Plans() {
  const bestPlans = [
    {
      plan: "Starting ~ plan",
      duration: "Every 1 Day",
      roi: "10.00%",
      minimum: "100.00 USD",
      maximum: "3,999.00 USD",
    },
    {
      plan: "Standard ~ plan",
      duration: "Every 2 Days",
      roi: "15.00%",
      minimum: "4,000.00 USD",
      maximum: "8,999.00 USD",
    },
    {
      plan: "Pro ~ plan",
      duration: "Every 6 Days",
      roi: "35.00%",
      minimum: "9,000.00 USD",
      maximum: "29,999.00 USD",
    },
    {
      plan: "Elite ~ plan",
      duration: "Every 1 Month",
      roi: "50.00%",
      minimum: "30,000.00 USD",
      maximum: "120,000.00 USD",
    },
    {
      plan: "Clarke ~ Mining plan",
      duration: "Every 5 Days",
      roi: "20.00%",
      minimum: "5,000.00 USD",
      maximum: "10,000.00 USD",
    },
    {
      plan: "TRADIS ~ Mining plan",
      duration: "Every 10 Days",
      roi: "35.00%",
      minimum: "10,000.00 USD",
      maximum: "25,999.00 USD",
    },
    {
      plan: "BLACKBOX ~ Mining plan",
      duration: "Every 1 Month",
      roi: "50.00%",
      minimum: "26,000.00 USD",
      maximum: "50,999.00 USD",
    },
  ];

  return (
    <section className={styles.plansbox}>
      <h1>Our best plans</h1>
      <div className={styles.plans}>
        {bestPlans.map((plan, i) => {
          return (
            <div className={styles.plan} key={i}>
              <div className={styles.tag}>
                <p>Roi</p>
                <p>{plan.roi}</p>
              </div>
              <div>
                <h2>{plan.plan}</h2>
                <p>{plan.duration}</p>
              </div>
              <ul>
                <li>
                  <span>Minimum</span>
                  <span>{plan.minimum}</span>
                </li>
                <li>
                  <span>Maximum</span>
                  <span>{plan.maximum}</span>
                </li>
                <li>
                  <span>For</span>
                  <span>1 Times</span>
                </li>
                <li>
                  <span>Capital back</span>
                  <span>Yes</span>
                </li>
              </ul>
              <p>Affiliate bonus</p>
              <button className={styles.grad}>Invest now</button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Best() {
  const whyWeAreBest = [
    {
      icon: <ShieldMoonIcon sx={{ color: "white", fontSize: "30px" }} />,
      title: "Top technical analysis/ encryption",
      reason:
        "We have enforced ssl encryption on all dynamic response pages to secure financial transactions and account charges per demand.",
    },
    {
      icon: <AccountTreeIcon sx={{ color: "white", fontSize: "30px" }} />,
      title: "Referral program",
      reason:
        "We think investing is better with family and friends, so for everyone you invite to join, you'll both earn reward crypto assets.",
    },
    {
      icon: <SpeedIcon sx={{ color: "white", fontSize: "30px" }} />,
      title: "High performance/ fast process",
      reason:
        "You can withdraw your money at any moment by requesting. The funds will be sent to your crypto-wallet instantly.",
    },
    {
      icon: <MoodIcon sx={{ color: "white", fontSize: "30px" }} />,
      title: "Highly recommended",
      reason:
        "We are trusted by a huge number of people. We are working hard constantly to improve the level of our security system and minimize possible risks.",
    },
    {
      icon: <HeadsetIcon sx={{ color: "white", fontSize: "30px" }} />,
      title: "Full expert 24/7 support",
      reason:
        "We provide 24/7 customer support through e-mail and Telegram. Our support representatives are periodically available to elucidate any difficulty.",
    },
    {
      icon: <LockIcon sx={{ color: "white", fontSize: "30px" }} />,
      title: "Ssl secured",
      reason:
        "Comodo essential – SSL security encryption confirms that the presented content is genuine and legitimate.",
    },
  ];

  return (
    <section className={styles.best}>
      <h1>Why we are the best</h1>
      <div className={styles.cards}>
        {whyWeAreBest?.map((best, i) => {
          return (
            <div className={styles.card} key={i}>
              <div className={styles.tag}>{best.icon}</div>
              <div className={styles.content}>
                <h2>{best.title}</h2>
                <p>{best.reason}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Faqs() {
  const faqs = [
    {
      question: "What are the available method of withdrawal?",
      answer:
        "To withdraw from your balance, you will have to provide a wallet address (Bitcoin, Bitcoin Cash, Ethereum, Litecoin, BNB, USDT).",
    },
    {
      question:
        "What methods are available for depositing funds into my account?",
      answer:
        "The methods available for funding your account are cryptocurrencies: Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Binance Coin (BNB), Tether (USDT).",
    },
    {
      question: "Why am I unable to log in to my account?",
      answer:
        "These problems are usually caused by slow web browsers. To fix it, clear your cache and try again after waiting a little bit. If the issue persists, contact the support team.",
    },
    {
      question: "Do I need to pass through verification upon registration?",
      answer:
        "All cooperation efforts are completely anonymous, which means verification is not necessary. If any disruptions or intrusions occur, the platform has a plan to resolve the issue.",
    },
    {
      question:
        "Who can participate in capital investment? Do you accept investors from different countries?",
      answer:
        "There are no restrictions on who can participate. The platform accepts users from all countries as long as they accept the terms and services.",
    },
    {
      question: "Can I transfer my investment from me to someone else?",
      answer:
        "Yes, you can. All you need to do is send a duly signed instruction to that effect.",
    },
    {
      question: "Can I add to my investment at any time?",
      answer:
        "Yes, you can. The platform allows you to top up your investment at any time.",
    },
    {
      question: "How long does it take to withdraw my funds when I want it?",
      answer:
        "Withdrawal of funds is processed on the same working day your request is received during working hours (8 am – 5 pm).",
    },
    {
      question: "How can I keep track of my investment?",
      answer:
        "Once you've signed on as a client, you will be given access to view and monitor your account activity online. You may also request your account statement at any time.",
    },
    {
      question: "Can I invest for my children?",
      answer: "Yes, you can.",
    },
  ];

  return (
    <section className={styles.faqs}>
      <h1>Frequently Asked Questions</h1>
      <div className={styles.cards}>
        {faqs.map((faq, i) => {
          return <Ans key={i} item={faq} />;
        })}
      </div>
    </section>
  );
}

export function Ans({ item }) {
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow(!show);
  }
  return (
    <div className={styles.card}>
      <div className={styles.que}>
        <div onClick={handleClick}>{show ? "-" : "+"}</div>
        {item.question}
      </div>
      {show && <p className={styles.ans}>{item.answer}</p>}
    </div>
  );
}

export function Review() {
  const investorTestimonials = [
    {
      name: "Anderson Placido",
      country: "United States",
      review:
        "Merchant invest is one of our biggest clients and proven to be a reliable and trustworthy business partner. Their transparent trading sites and high quality software infrastructure together with our high end trading hardware result in a great and unique product and experience for everybody interested in crypto trading!",
    },
    {
      name: "Mary Anne",
      country: "United Kingdom",
      review:
        "Bloom merchants are one of the best crypto companies I have ever seen with secure trading wallets and fast transaction with good profits returns",
    },
    {
      name: "Rajesh Kumar",
      country: "India",
      review:
        "I joined this company few months ago and I have already accumulated huge profits with no inconvenience or withdrawal fees I’m so happy I trusted my friend about this company thanks so much again Bloom merchant.",
    },
    {
      name: "Julia",
      country: "Netherland",
      review:
        "Nice platform with good profits returns and fast withdrawals I’m so happy trading with this company",
    },
  ];

  return (
    <section className={styles.review}>
      <h1>What our investors says</h1>
      <div className={styles.cards}>
        {investorTestimonials.map((testimonal, i) => {
          return (
            <div className={styles.card} key={i}>
              <div className={styles.tag}>"</div>
              <p>{testimonal.review}</p>
              <div className={styles.content}>
                <Image
                  src="/ander.jpeg"
                  alt="Coin Logo"
                  className={styles.image}
                  width={50}
                  height={50}
                  priority
                />
                <div className={styles.placeholder}>
                  <h3>{testimonal.name}</h3>
                  <p>{testimonal.country}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Recent() {
  const recentTransactions = [
    { name: "Cesareo Gandarilla", amountInvested: "5,207,414.58 USD" },
    { name: "Vagner Teixeira de Azevedo", amountInvested: "1,821,547.00 USD" },
    { name: "Frank Paul", amountInvested: "803,000.00 USD" },
    { name: "Cesar Gandarilla", amountInvested: "591,134.00 USD" },
    { name: "Nikolai Vogel", amountInvested: "262,582.00 USD" },
    { name: "Noha Sumayya", amountInvested: "240,000.00 USD" },
    { name: "Celerino Cp Perez", amountInvested: "214,113.00 USD" },
    { name: "Zoltan Sitke", amountInvested: "199,000.00 USD" },
  ];

  return (
    <section className={styles.recent}>
      <h1>Recent Transactions</h1>
      <div className={styles.cards}>
        {recentTransactions.map((transaction, i) => {
          return (
            <div className={styles.card} key={i}>
              <div className={styles.tag}>
                <Image
                  src="/placeholder.png"
                  alt="Coin Logo"
                  className={styles.logo}
                  width={100}
                  height={100}
                  priority
                />
              </div>
              <div className={styles.content}>
                <h3>{transaction.name}</h3>
                <p>Invest amount</p>
                <p>{transaction.amountInvested}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Deposit() {
  const recentDeposits = [
    {
      name: "Oleksii HoH16",
      date: "2025-10-03",
      amount: "1,500.00 USD",
      gateway: "Deposit",
    },
    {
      name: "Vogel",
      date: "2025-10-03",
      amount: "100.00 USD",
      gateway: "Deposit",
    },
    {
      name: "Oleksii HoH16",
      date: "2025-10-02",
      amount: "100.00 USD",
      gateway: "Deposit",
    },
    {
      name: "Vogel",
      date: "2025-10-02",
      amount: "300.00 USD",
      gateway: "Deposit",
    },
    {
      name: "VeronicaLeticia",
      date: "2025-10-01",
      amount: "3,000.00 USD",
      gateway: "Deposit",
    },
    {
      name: "VeronicaLeticia",
      date: "2025-10-01",
      amount: "20,000.00 USD",
      gateway: "Deposit",
    },
    {
      name: "VeronicaLeticia",
      date: "2025-10-01",
      amount: "26,000.00 USD",
      gateway: "Deposit",
    },
    {
      name: "Vogel",
      date: "2025-09-29",
      amount: "100.00 USD",
      gateway: "Deposit",
    },
    {
      name: "Vogel",
      date: "2025-09-27",
      amount: "100.00 USD",
      gateway: "Deposit",
    },
    {
      name: "Vogel",
      date: "2025-09-23",
      amount: "200.00 USD",
      gateway: "Deposit",
    },
    {
      name: "VeronicaLeticia",
      date: "2025-10-01",
      amount: "1,000.00 USD",
      gateway: "USDT(TRC20)",
    },
    {
      name: "CarlosFabiano",
      date: "2025-09-20",
      amount: "1,000.00 USD",
      gateway: "USDT(TRC20)",
    },
    {
      name: "CarlosFabiano",
      date: "2025-09-04",
      amount: "1,000.00 USD",
      gateway: "USDT(TRC20)",
    },
    {
      name: "MadonnaOsborne",
      date: "2025-08-30",
      amount: "2,000.00 USD",
      gateway: "USDT(TRC20)",
    },
    {
      name: "AlexandreGilberto",
      date: "2025-08-30",
      amount: "1,000.00 USD",
      gateway: "USDT(TRC20)",
    },
    {
      name: "Vogel",
      date: "2025-08-19",
      amount: "2,500.00 USD",
      gateway: "USDT(TRC20)",
    },
    {
      name: "Vogel",
      date: "2025-08-17",
      amount: "10,000.00 USD",
      gateway: "USDT(TRC20)",
    },
    {
      name: "Vogel",
      date: "2025-08-16",
      amount: "3,500.00 USD",
      gateway: "USDT(TRC20)",
    },
    {
      name: "AlexandreGilberto",
      date: "2025-08-14",
      amount: "1,000.00 USD",
      gateway: "USDT(TRC20)",
    },
    {
      name: "MadonnaOsborne",
      date: "2025-08-07",
      amount: "1,000.00 USD",
      gateway: "USDT(TRC20)",
    },
  ];

  return (
    <section className={styles.deposit}>
      <h1>Recent deposit/withdrawals</h1>
      <div className={styles.historybox}>
        <div className={styles.history}>
          <h3>Transaction history</h3>
          <div className={styles.btns}>
            <div>Latest invests</div>
            <div>Latest withdraws</div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Gateway</th>
              </tr>
            </thead>

            <tbody>
              {recentDeposits.map((deposit, i) => {
                return (
                  <tr key={i}>
                    <td>{deposit.name}</td>
                    <td>{deposit.date}</td>
                    <td>{deposit.amount}</td>
                    <td>{deposit.gateway}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className={styles.cards}>
            {recentDeposits.map((deposit, i) => {
              return (
                <div className={styles.card} key={i}>
                  <p>
                    <span>Username</span>
                    <span>Vogel</span>
                  </p>
                  <p>
                    <span>Date</span>
                    <span>2025-09-29</span>
                  </p>
                  <p>
                    <span>Amount</span>
                    <span>100.00 USD</span>
                  </p>
                  <p>
                    <span>Gateway</span>
                    <span>Deposit</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
