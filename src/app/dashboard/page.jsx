import styles from "./page.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import CreditCardIcon from "@mui/icons-material/CreditCard";

export default function Home() {
  return (
    <div className={styles.body}>
      <main className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.header}>
            <p>WALLET ID: 7C1B06</p>
            <PersonIcon />
            <LogoutIcon />
          </div>
          <div className={styles.total}>
            <p>TOTAL BALANCE</p>
            <h1 className={styles.balance}>$1,063.28</h1>
          </div>

          <div className={styles.actions}>
            <div>
              <ArrowUpwardIcon />
              <p>Buy</p>
            </div>
            <div>
              <ArrowDownwardIcon />
              <p>Withdraw</p>
            </div>
            <div>
              <MultipleStopIcon />
              <p>Transfer</p>
            </div>
          </div>
        </div>

        <div className={styles.portfolio}>
          <p>My Portfolio</p>
          <div className={styles.asset}>
            <span className={styles.name}>
              <p>&</p>
              <div>
                <p>Bitcoin</p>
                <h3>$0</h3>
              </div>
            </span>
            <span className={styles.amount}>
              <h3>$0.00</h3>
              <p>0.00000 BTC</p>
            </span>
          </div>
          <div className={styles.asset}>
            <span className={styles.name}>
              <p>&</p>
              <div>
                <p>Ethereum</p>
                <h3>$801</h3>
              </div>
            </span>
            <span className={styles.amount}>
              <h3>$801.25</h3>
              <p>0.1858 ETH</p>
            </span>
          </div>
          <div className={styles.asset}>
            <span className={styles.name}>
              <p>&</p>
              <div>
                <p>Tether (Trc20)</p>
                <h3>$0</h3>
              </div>
            </span>
            <span className={styles.amount}>
              <h3>$0.00</h3>
              <p>0.00000 USDT</p>
            </span>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.item}>
            .
            <div>
              <AccountBalanceWalletIcon />
              <p>Connect</p>
            </div>
          </div>
          <div className={styles.item}>
            .
            <div>
              <MultipleStopIcon sx={{color: "#00b2ff"}}/>
              <p>Send</p>
            </div>
          </div>
          <div className={styles.active}>Home</div>
          <div className={styles.item}>
            .
            <div>
              <SystemUpdateAltIcon sx={{color: "#00b2ff"}}/>
              <p>Withdraw</p>
            </div>
          </div>
          <div className={styles.item}>
            .
            <div>
              <CreditCardIcon sx={{color: "#a51e03ff"}}/>
              <p>Card</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
