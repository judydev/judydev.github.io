import styles from "../page.module.css";

export default function AppSection({ href, title, description }: 
    { href: string, title: string, description: string }) {
    return <a
        href={href}
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
    >
        <h2>
            {title} <span>-&gt;</span>
        </h2>
        <p>
            {description}
        </p>
    </a>
}