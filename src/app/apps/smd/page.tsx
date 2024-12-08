import appicon from "../../../assets/appicon/appicon_smd.jpg";
import youtube from "../../../assets/appicon/youtube.png";
import ViewOn from "@/app/components/view_on";
import AppPage from "../app_page";

const SMD = () => {
    return (
        <AppPage 
            appicon={appicon}
            title="Sum My Day (Coming Soon)"
            description="Sum My Day is a productivity app that helps users track their daily activities and goals."
        >
            <ViewOn 
                src={youtube} 
                alt="View on YouTube" 
                href="https://www.youtube.com/watch?v=n9yjQ2X8vSA&list=PLLnIlSPA1oaIYgeV6zEJ2sg_M9pn8Kmr1" 
                dest="YouTube" 
            />

            {/* <ViewOn 
                src={appstore} 
                alt="View on App Store" 
                href="" 
                dest="App Store" 
            />

            <ViewOn 
                src={playstore} 
                alt="View on Play Store" 
                href="" 
                dest="Play Store" 
            /> */}
        </AppPage>
    );
    // return (
    //     <main className={styles.main}>
    //         <Header />
    //         <div style={{ display: 'flex', alignItems: 'center' }}>
    //             <AppIconImage src={appicon} alt="Sum My Day"/>
    //             <h1 className={styles.title} style={{ marginLeft: '10px' }}>Sum My Day</h1>
    //         </div>

    //         <p className={styles.description}>
    //             Sum My Day is a productivity app that helps users track their daily activities and goals.
    //         </p>

    //         <div className={styles.grid}>
    //             <ViewOn 
    //                 src={appstore} 
    //                 alt="View on App Store" 
    //                 href="https://apps.apple.com/us/app/dreamer-playlist/id6472091497" 
    //                 dest="App Store" 
    //             />

    //             <ViewOn 
    //                 src={playstore} 
    //                 alt="View on Play Store" 
    //                 href="" 
    //                 dest="Play Store (coming soon)" 
    //             />
    //         </div>

    //         <br/>
    //     </main>
    // );
};

export default SMD;
