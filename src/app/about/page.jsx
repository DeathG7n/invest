import { Navbar, Join, Faqs, Letter, Review ,Footer} from "@/app/page";
import styles from "../investment/plan/page.module.scss";


export default function About(){
    return(
        <>
            <Navbar/>
            <div className={styles.hero}>
                <h1>About</h1>
                <p><span>Home</span> / About</p>
            </div>
            <Join/>
            <Faqs/>
            <Review/>
            <Letter/>
            <Footer/>
        </>
    )
}