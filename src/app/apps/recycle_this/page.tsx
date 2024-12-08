import styles from "../../page.module.css";
import appstore from "../../../assets/appicon/appstore.png";
import appicon from "../../../assets/appicon/appicon_recycle_this.png";
import devpost from "../../../assets/appicon/devpost.png";
import github from "../../../assets/appicon/github.png";
import web from "../../../assets/appicon/web.png";
import Header from "@/app/header";
import AppIconImage from "@/app/components/appicon_image";
import ViewOn from "@/app/components/view_on";

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

            <div className={styles.grid}>
                <ViewOn 
                    src={web} 
                    alt="View on Web" 
                    href="https://recycle-this-79dc6.web.app/" 
                    dest="Web" 
                />

                <ViewOn 
                    src={appstore} 
                    alt="View on App Store" 
                    href="https://apps.apple.com/us/app/recycle-this/id6477564043" 
                    dest="App Store" 
                />
    
                <ViewOn 
                    src={github} 
                    alt="View on GitHub" 
                    href="https://github.com/judydev/recycle_this" 
                    dest="GitHub" 
                />
                
                <ViewOn 
                    src={devpost} 
                    alt="View on Devpost" 
                    href="https://devpost.com/software/recycle-this-tyl6kz" 
                    dest="Devpost" 
                />
            </div>

            <br/>
        </main>
    );
};

export default RecycleThis;
