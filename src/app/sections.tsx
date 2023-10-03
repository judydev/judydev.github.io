import Link from "next/link";
import styles from "./page.module.css";

export default function Sections() {
    return (
        <div className={styles.grid}>
            <Link href="/apps" className={styles.card}>
                <h2>
                    My Apps <span>-&gt;</span>
                </h2>
                <p>Take a look at my past projects</p>
            </Link>

            <a href="/music" className={styles.card}>
                <h2>
                    My Music <span>-&gt;</span>
                </h2>
                <p>Checkout my music!</p>
            </a>

            <div className={styles.card}>
                <h2>Contact</h2>
                <p>judydev[at]outlook.com</p>
            </div>
        </div>
    );
}
