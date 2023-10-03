import Header from "../header";
import styles from "../page.module.css";
import WindChimeDemo from "./wind-chime-demo/page";

export default function MyMusic() {
    return (
        <main className={styles.main}>
            <Header />
            <WindChimeDemo />
            More to come!
            <span />
            <span />
            <span />
        </main>
    );
}
