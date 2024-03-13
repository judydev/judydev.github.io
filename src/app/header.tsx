import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import avatar from '../assets/avatar.png';
import { orbitron } from "./layout";

export default function Header() {
    return (
        <Link href="/">
            <Image
                src={avatar}
                width={210} height={200}
                alt="Avatar"
                style={{marginLeft: 50}}
            /> 
            <div className={styles.header}>
                <div className={orbitron.className}>Judy Dev</div>
            </div>
            <hr />
            {/* TODO: add language button */}
        </Link>
    );
}
