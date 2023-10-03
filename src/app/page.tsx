import styles from "./page.module.css";
import Sections from "./sections";
import Header from "./header";

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
            <div className={styles.description}>
                Full-stack developer with experience in web and mobile
                applications.
                <br />
                Indie songwriter.
            </div>
            <Sections />
        </main>
    );
}
