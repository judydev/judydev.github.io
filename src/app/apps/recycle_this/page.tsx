import styles from "../../page.module.css";
import appicon from "../../../assets/appicon/appicon_recycle_this.png";
import Header from "@/app/header";
import AppIconImage from "@/app/components/appicon_image";
import { ViewOnAppStore, ViewOnDevpost, ViewOnGithub, ViewOnWeb } from "@/app/components/view_on";

const RecycleThis = () => {
    return (
        <main className={styles.main}>
            <Header />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <AppIconImage src={appicon} alt="Recycle This Game" />
                <h1 className={styles.title} style={{ marginLeft: '10px' }}>Recycle This!</h1>
            </div>

            <p className={styles.description}>
                Recycle This! is an engaging game designed to educate players about recycling. 
                Spot the recyclables in the given category within 30 seconds to win the game round!
            </p>

            <div className={styles.grid4}>
                <ViewOnWeb href="https://recycle-this-79dc6.web.app/" />
                <ViewOnAppStore href="https://apps.apple.com/us/app/recycle-this/id6477564043" />
                <ViewOnGithub href="https://github.com/judydev/recycle_this" />
                <ViewOnDevpost href="https://devpost.com/software/recycle-this-tyl6kz" />
            </div>
        
            <br/>
        </main>
    );
};

export default RecycleThis;
