import { Navbar, Plans, Footer } from "@/app/page";
import styles from "./page.module.scss";


export default function Investment(){
    return(
        <>
            <Navbar/>
            <div className={styles.hero}>
                <h1>Investment plan</h1>
                <p>Home / Investment plan</p>
            </div>
            <Plans/>
            <Footer/>
        </>
    )
}