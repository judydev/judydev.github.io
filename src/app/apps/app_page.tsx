import styles from "../page.module.css";
import Header from "@/app/header";
import AppIconImage from "@/app/components/appicon_image";
import { StaticImageData } from "next/image";

export default function AppPage({ appicon, title, description, children, footer }: 
    { appicon: StaticImageData, title: string, description: React.ReactNode, children?: React.ReactNode, footer?: React.ReactNode }) {
    return <main className={styles.main}>
        <Header/>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <AppIconImage src={appicon} alt={title}/>
            <h1 className={styles.title} style={{ marginLeft: '10px' }}>{title}</h1>
        </div>

        <div className={styles.description}>
            {description}
        </div>

        <div className={styles.grid4}>
            {children}
        </div>

        {footer}
    </main>
}