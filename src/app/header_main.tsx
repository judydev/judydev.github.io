import styles from "./page.module.css";
import { Orbitron } from "next/font/google";
import Header from "./header";

const orbitron = Orbitron({subsets: ['latin']})

export default function MainHeader() {
    return (
        <Header size={200}>
            <div className={styles.header}>
                <div className={`${orbitron.className}`}>Judy Dev</div>
            </div>
            <hr />
            {/* TODO: add language button */}
        </Header>
    );
}
