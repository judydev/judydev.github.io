import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import avatar from '../assets/avatar.png';

export default function Header() {
    return (
        <Link href="/">
            <Image
                src={avatar}
                width={210} height={200}
                alt="Avatar"
                style={{marginLeft: 20}}
            /> 
            <div className={styles.header}>Judy Dev</div>
            <hr />
            {/* TODO: add language button */}
        </Link>
    );
}
