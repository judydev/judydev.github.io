import { StaticImageData } from "next/image";
import AppIconImage from "./appicon_image";
import styles from "../page.module.css";
import { AppIconSize } from "./appicon_image";
import Link from "next/link";

export default function ViewOn({src, alt, href, dest}: 
    {src: StaticImageData, alt: string, href: string, dest: string}) {
    return <Link href={href} target="_blank" rel="noopener noreferrer" className={styles.card}>
        <div className={styles.description} style={{ textAlign: 'center' }}>
            View on {dest}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
            <AppIconImage src={src} alt={alt} size={AppIconSize.MEDIUM} />
        </div>
    </Link>
}