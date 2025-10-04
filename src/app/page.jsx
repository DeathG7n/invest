



"use client"
import styles from "./page.module.scss"
import { useState, useRef, useEffect } from "react"
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function Page() {
  const [pop, setPop] = useState(false)
  const router = useRouter();
  function handleClick(){
    setPop(!pop)
  }
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <Image
            src="/logo.jpg"
            alt="Coin Logo"
            className={styles.logo}
            width={75}
            height={50}
            priority
          />
        <ul>
          <li>Home</li>
          <li>Investment Plans</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
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
        {pop && <main>
          <span onClick={handleClick}>X</span>
          <ol onClick={()=> router.push("/wallet")}>
            <li>Home</li>
            <li>Investment Plans</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
          </ol>
        </main>}
        <div className={styles.menu}>
          <span></span><span></span><span></span>
        </div>
      </nav>
      <main>
        <section className={styles.hero}>
          <h1>Go to the next level of investing</h1>
          <p>Why don't you invest in your own future, we offer a more flexible financial structure</p>
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
              <p>We take your privacy and security very serious here at merchants invest.. <br />As a platform you can trust, we're built with a 256 bit encryption level to add an additional layer of security. <br />You can protect your assets by setting up your account to use google two factor authenticator.</p>
            </div>
            <div>
              <h2>OUR AMAZING FEATURES</h2>
              <h3>Risk Analysis</h3>
              <p>'Business' means that you have to treat this endeavour as a business and not a gamble. if you had a business plan to show Warrent Buffett, would he approve and invest in you? Bussiness that are strong with a clear strategy ,with a competitive moat. You need to structure your trading business in the same way. Make a deposit through our secure wallet to wallet transfer and get credited almost instantly and start earning daily intrest till deposit term expire</p>
              <h3>Complete Financial Planning</h3>
              <p>Developing a clear edge, sitting on your hands untill your edge is in play (patient) diversifying your bets without disworsifying them, and managing correlation is key to this part of the equation. But also being in a personal posistion toi make trading work for you. Dont think about paying up your bills instantly with your trading. rather, make sure you have diversify income streams that allows you learn survive and then thrive without been pressured to perform</p>
              <h3>Cloud Mining</h3>
              <p>Mine Bitcoin in the cloud without buying any mining hardware. Simply choose the amount of computing power you want to mine with on our global datacenters and leave the rest to us. We have set up a remote mining rig for you, simply select a plan that best fits your financial capabilities and mine various crypto currencies on the go. Looking to invest long term , merchants invest . cloud mining is a sure go. <br /><strong>Need Help? mail us</strong></p>
            </div>
            <button className={styles.grad}>Learn More</button>
          </div>
        </section>
        <section className={styles.plansbox}>
          <h1>Our best plans</h1>
          <div className={styles.plans}>
            <div className={styles.plan}>
              <div className={styles.tag}><p>Roi</p><p>10.00 %</p></div>
              <div>
                <h2>Starting ~ plan</h2>
                <p>Every 1 day</p>
              </div>
              <ul>
                <li><span>Minimum</span><span>100.00 USD</span></li>
                <li><span>Maximum</span><span>3999.00 USD</span></li>
                <li><span>For</span><span>1 Times</span></li>
                <li><span>Capital back</span><span>Yes</span></li>
              </ul>
              <p>Affiliate bonus</p>
              <button className={styles.grad}>Invest now</button>
            </div>
            <div className={styles.plan}>
              <div className={styles.tag}><p>Roi</p><p>10.00 %</p></div>
              <div>
                <h2>Starting ~ plan</h2>
                <p>Every 1 day</p>
              </div>
              <ul>
                <li><span>Minimum</span><span>100.00 USD</span></li>
                <li><span>Maximum</span><span>3999.00 USD</span></li>
                <li><span>For</span><span>1 Times</span></li>
                <li><span>Capital back</span><span>Yes</span></li>
              </ul>
              <p>Affiliate bonus</p>
              <button className={styles.grad}>Invest now</button>
            </div>
            <div className={styles.plan}>
              <div className={styles.tag}><p>Roi</p><p>10.00 %</p></div>
              <div>
                <h2>Starting ~ plan</h2>
                <p>Every 1 day</p>
              </div>
              <ul>
                <li><span>Minimum</span><span>100.00 USD</span></li>
                <li><span>Maximum</span><span>3999.00 USD</span></li>
                <li><span>For</span><span>1 Times</span></li>
                <li><span>Capital back</span><span>Yes</span></li>
              </ul>
              <p>Affiliate bonus</p>
              <button className={styles.grad}>Invest now</button>
            </div>
            <div className={styles.plan}>
              <div className={styles.tag}><p>Roi</p><p>10.00 %</p></div>
              <div>
                <h2>Starting ~ plan</h2>
                <p>Every 1 day</p>
              </div>
              <ul>
                <li><span>Minimum</span><span>100.00 USD</span></li>
                <li><span>Maximum</span><span>3999.00 USD</span></li>
                <li><span>For</span><span>1 Times</span></li>
                <li><span>Capital back</span><span>Yes</span></li>
              </ul>
              <p>Affiliate bonus</p>
              <button className={styles.grad}>Invest now</button>
            </div>
            <div className={styles.plan}>
              <div className={styles.tag}><p>Roi</p><p>10.00 %</p></div>
              <div>
                <h2>Starting ~ plan</h2>
                <p>Every 1 day</p>
              </div>
              <ul>
                <li><span>Minimum</span><span>100.00 USD</span></li>
                <li><span>Maximum</span><span>3999.00 USD</span></li>
                <li><span>For</span><span>1 Times</span></li>
                <li><span>Capital back</span><span>Yes</span></li>
              </ul>
              <p>Affiliate bonus</p>
              <button className={styles.grad}>Invest now</button>
            </div>
            <div className={styles.plan}>
              <div className={styles.tag}><p>Roi</p><p>10.00 %</p></div>
              <div>
                <h2>Starting ~ plan</h2>
                <p>Every 1 day</p>
              </div>
              <ul>
                <li><span>Minimum</span><span>100.00 USD</span></li>
                <li><span>Maximum</span><span>3999.00 USD</span></li>
                <li><span>For</span><span>1 Times</span></li>
                <li><span>Capital back</span><span>Yes</span></li>
              </ul>
              <p>Affiliate bonus</p>
              <button className={styles.grad}>Invest now</button>
            </div>
            <div className={styles.plan}>
              <div className={styles.tag}><p>Roi</p><p>10.00 %</p></div>
              <div>
                <h2>Starting ~ plan</h2>
                <p>Every 1 day</p>
              </div>
              <ul>
                <li><span>Minimum</span><span>100.00 USD</span></li>
                <li><span>Maximum</span><span>3999.00 USD</span></li>
                <li><span>For</span><span>1 Times</span></li>
                <li><span>Capital back</span><span>Yes</span></li>
              </ul>
              <p>Affiliate bonus</p>
              <button className={styles.grad}>Invest now</button>
            </div>
          </div>
        </section>
        <section className={styles.invest}>
          <div>
            <label htmlFor="">Amount</label>
            <input type="text" name="" id="" placeholder="Enter amount"/>
          </div>
          <div>
            <label htmlFor="">Investment Plan</label>
            <select name="" id="">
              <option value="">Select a Plan</option>
            </select>
          </div>
          <button className={styles.grad}>Calculate earning</button>
        </section>
        <section className={styles.best}>
          <h1>Why we are the best</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.tag}></div>
              <div className={styles.content}>
                <h2>Top technical analysis/ encryption</h2>
                <p>We have enforced ssl encryption on all dynamic response pages to secure financial transactions and account charges per demand.</p>
              </div>
            </div>
             <div className={styles.card}>
              <div className={styles.tag}></div>
              <div className={styles.content}>
                <h2>Top technical analysis/ encryption</h2>
                <p>We have enforced ssl encryption on all dynamic response pages to secure financial transactions and account charges per demand.</p>
              </div>
            </div>
             <div className={styles.card}>
              <div className={styles.tag}></div>
              <div className={styles.content}>
                <h2>Top technical analysis/ encryption</h2>
                <p>We have enforced ssl encryption on all dynamic response pages to secure financial transactions and account charges per demand.</p>
              </div>
            </div>

            {/* <span>
              <span></span>
              <h2>Referral program</h2>
              <p>We think investing is better with family and friends, so for everyone you invite to join , you'll both earn reward crypto assets.</p>
            </span>
            <span>
              <span></span>
              <h2>High performance/ fast process</h2>
              <p>You can withdraw your money at any moment by requesting. the funds will be sent to your crypto-wallet instantly.</p>
            </span>
            <span>
              <span></span>
              <h2>Highly recommended</h2>
              <p>We are trusted by a huge number of people. we are working hard constantly to improve the level of our security system and minimize possible risks.</p>
            </span>
            <span>
              <span></span>
              <h2>Full expert 24/7 support</h2>
              <p>We provide 24/7 customer support through e-mail and telegram. our support representatives are periodically available to elucidate any difficulty.</p>
            </span>
            <span>
              <span></span>
              <h2>Ssl secured</h2>
              <p>Comodo essential - ssl security encryption confirms that the presented content is genuine and legitimate.</p>
            </span> */}
          </div>
        </section>
        <section className={styles.work}>
          <h1>How it's works</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.tag}>1</div>
              <div className={styles.content}>
                <h2>Create an account</h2>
                <p>Sign-up to get started. It's takes a few minutes to complete registration</p>
              </div>
              
            </div>
            <div className={styles.card}>
              <div className={styles.tag}>2</div>
              <div className={styles.content}>
                <h2>Make your investment</h2>
                <p>Make your investment deposit using Bitcoin or other accepted payment methods.</p>
              </div>
              
            </div>
            <div className={styles.card}>
              <div className={styles.tag}>3</div>
              <div className={styles.content}>
                <h2>Start earning and withdraw</h2>
                <p>Now you are all setup and ready to start earning and withdraw without hassle.</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.faqs}>
          <h1>Frequently Asked Questions</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
              <p className={styles.que}><div>+</div>What are the available method of withdrawal ?</p>
              <p className={styles.ans}>To withdraw from your balance, you will have to provide a wallet address (Bitcoin, Bitcoin cash, Ethereum, Litecoin, BNB, USDT).</p>
            </div>
          </div>
        </section>
        <section className={styles.recent}>
          <h1>Recent Transactions</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
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
                <h3>Caio Alvarez</h3>
                <p>Invest amount</p>
                <p>24,000.00 USD</p>
              </div>
            </div>
          </div>
        </section>
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
                  <tr>
                    <td>Vogel</td>
                    <td>2025-09-29</td>
                    <td>100.00 USD</td>
                    <td>Deposit</td>
                  </tr>
                </tbody>
              </table>
              <div>
                <div>
                  <p><span>Username</span><span>Vogel</span></p>
                  <p><span>Date</span><span>2025-09-29</span></p>
                  <p><span>Amount</span><span>100.00 USD</span></p>
                  <p><span>Gateway</span><span>Deposit</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.review}>
          <h1>What our investors says</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.tag}>"</div>
              <p>Bloom merchants are one of the best crypto companies I have ever seen with secure trading wallets and fast transaction with good profits returns</p>
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
                  <h3>Anderson Placido</h3>
                  <p>United States</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.news}>
          <h1>Our latest news</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.image1}>
                
              </div>
              <div className={styles.content}>
                <h2>5 Things To Know About Decentralized Finance – The DeFi Series</h2>
                <h3><div>2 years ago</div> <div>0 Comments</div></h3>
                <p>5 Things To Know About Decentralized Finance – The DeFi Series Decentralized finance, known as DeFi for short, is a trend in the crypto sphere gaining steam and showing promise, though credible reservations remain. Decentralized finance  is predicated on two primary principles:</p>
                <div className={styles.link}><div>Read more</div><div>=</div></div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.image2}>

              </div>
              <div className={styles.content}>
                <h2>5 Things To Know About Decentralized Finance – The DeFi Series</h2>
                <h3><div>2 years ago</div> <div>0 Comments</div>  </h3>
                <p>5 Things To Know About Decentralized Finance – The DeFi Series Decentralized finance, known as DeFi for short, is a trend in the crypto sphere gaining steam and showing promise, though credible reservations remain. Decentralized finance  is predicated on two primary principles:</p>
                <div className={styles.link}><div>Read more</div><div>=</div></div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.letter}>
          <h1>Our newsletter</h1>
          <p>Sign up to our newsletter, the alphagram, so you can be the first to find out the latest news and tips about applications, as well as general merchant invest updates</p>
          <div>
            <input type="text" placeholder="Enter email here"/>
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
            <span></span><span></span><span></span><span></span>
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
  )
}

