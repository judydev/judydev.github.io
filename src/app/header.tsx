import Link from "next/link";
import styles from "./page.module.css";

export default function Header() {
    return (
        <Link href="/">
            <div className={styles.header}>Judy Dev</div>
            <hr />
            {/* TODO: add language button */}
        </Link>
    );
}
