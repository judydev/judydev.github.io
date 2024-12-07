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

            <Link href="https://medium.com/@judydev" 
                target="_blank"
                className={styles.card}>
                <h2>
                    Blog <span>-&gt;</span>
                </h2>
                <p>My Medium Posts</p>
            </Link>

            <Link href="https://www.youtube.com/@judydev_zd" 
                target="_blank"
                className={styles.card}>
                <h2>
                    YouTube <span>-&gt;</span>
                </h2>
                <p>My YouTube Channel</p>
            </Link>

            <Link href="/music" className={styles.card}>
                <h2>
                    Music <span>-&gt;</span>
                </h2>
                <p>My Music</p>
            </Link>

            {/* <a href="/contact" className={styles.card}>
                <h2>
                    Contact <span>-&gt;</span>
                </h2>
                <p></p>
            </a> */}
        </div>
    );
}
