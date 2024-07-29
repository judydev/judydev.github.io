import Link from "next/link";
import styles from "./page.module.css";

export default function Sections() {
    return (
        <div className={styles.grid}>
            <Link href="/apps" className={styles.card}>
                <h2>
                    Portfolio <span>-&gt;</span>
                </h2>
                <p>My Works</p>
            </Link>

            <a href="https://medium.com/@judydev" 
                target="_blank"
                className={styles.card}>
                <h2>
                    Blog <span>-&gt;</span>
                </h2>
                <p>My Medium Posts</p>
            </a>

            <a href="/music" className={styles.card}>
                <h2>
                    Music <span>-&gt;</span>
                </h2>
                <p>My Music</p>
            </a>

            {/* <a href="/contact" className={styles.card}>
                <h2>
                    Contact <span>-&gt;</span>
                </h2>
                <p></p>
            </a> */}
        </div>
    );
}
