import Link from "next/link";
import styles from "./page.module.css";

export default function Sections() {
    return (
        <div className={styles.grid}>
            <Link href="/apps" className={styles.card}>
                <h2>
                    Portfolio <span>-&gt;</span>
                </h2>
                <p>Check out my past projects</p>
            </Link>

            {/* <a href="/posts" className={styles.card}>
                <h2>
                    Posts <span>-&gt;</span>
                </h2>
                <p>Some of my study notes!</p>
            </a> */}

            <a href="/contact" className={styles.card}>
                <h2>
                    Contact <span>-&gt;</span>
                </h2>
                <p>Contact me.</p>
            </a>
        </div>
    );
}
