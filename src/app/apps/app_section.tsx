import Link from "next/link";
import styles from "../page.module.css";
import { Url } from "next/dist/shared/lib/router/router";

export default function AppSection({ href, title, description }: 
    { href: Url, title: string, description?: React.ReactNode }) {
    return <Link href={href} className={styles.card}>
        <h2>
            {title} <span>-&gt;</span>
        </h2>
        <p>
            {description}
        </p>
    </Link>
}
