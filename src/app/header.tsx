import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import avatar from '../assets/avatar.png';
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({subsets: ['latin']})

export default function Header({size=160, children}: {size?: number, children?: React.ReactNode}) {
    return (
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image
                src={avatar}
                width={size + 10} height={size}
                alt="Avatar"
            /> 
            <div></div>
            {children}
        </Link>
    );
}
