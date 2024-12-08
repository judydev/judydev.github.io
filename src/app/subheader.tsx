import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import avatar from '../assets/avatar.png';
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({subsets: ['latin']})

export default function SubHeader() {
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


