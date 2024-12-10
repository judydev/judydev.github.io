import { StaticImageData } from "next/image";
import AppIconImage from "./appicon_image";
import styles from "../page.module.css";
import Link from "next/link";
import appstore from "@/assets/logo/appstore.png";
import playstore from "@/assets/logo/playstore.png";
import web from "@/assets/logo/web.png";
import youtube from "@/assets/logo/youtube.png";
import devpost from "@/assets/logo/devpost.png";
import github from "@/assets/logo/github.png";

function ViewOn({src, href, text}: {src: StaticImageData, href: string, text: string}) {
    if (href === "") {
        return <div className={styles.card}>
            <div className={styles.description} style={{ textAlign: 'center' }}>
                {text}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                <AppIconImage src={src} alt={text} />
            </div>
        </div>
    }

    return <Link href={href} target="_blank" rel="noopener noreferrer" className={styles.card}>
        <div className={styles.description} style={{ textAlign: 'center' }}>
            {text}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
            <AppIconImage src={src} alt={text} />
        </div>
    </Link>
}

export function ViewOnAppStore({href, text = "View on App Store"}: {href: string, text?: string}) {
    return <ViewOn src={appstore} text={text} href={href} />
}

export function ViewOnPlayStore({href, text = "View on Play Store"}: {href: string, text?: string}) {
    return <ViewOn src={playstore} text={text} href={href} />
}

export function ViewOnYouTube({href, text = "View on YouTube"}: {href: string, text?: string}) {
    return <ViewOn src={youtube} text={text} href={href} />
}

export function ViewOnWeb({href, text = "View on Web"}: {href: string, text?: string}) {
    return <ViewOn src={web} text={text} href={href} />
}

export function ViewOnDevpost({href, text = "View on Devpost"}: {href: string, text?: string}) {
    return <ViewOn src={devpost} text={text} href={href} />
}

export function ViewOnGithub({href, text = "View on GitHub"}: {href: string, text?: string}) {
    return <ViewOn src={github} text={text} href={href} />
}
