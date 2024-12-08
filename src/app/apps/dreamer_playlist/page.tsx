
import styles from "../../page.module.css";
import appstore from "../../../assets/appicon/appstore.png";
import appicon from "../../../assets/appicon/appicon_dreamer_playlist.png";
import playstore from "../../../assets/appicon/playstore.png";
import Header from "@/app/header";
import AppIconImage from "@/app/components/appicon_image";
import ViewOn from "@/app/components/view_on";

const DreamerPlaylist = () => {
    return (
        <main className={styles.main}>
            <Header />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <AppIconImage src={appicon} alt="Dreamer Playlist"/>
                <h1 className={styles.title} style={{ marginLeft: '10px' }}>Dreamer Playlist</h1>
            </div>

            <div className={styles.description}>
                Whether you're a songwriter, music lover, or audiobook listener, Dreamer Playlist lets you manage local audio tracks easily. Your tunes, your way.
                <br /><br />
                Key Features <br />
                - Import files: Quickly batch-load your local audio files into the app's library<br />
                - Playlists: Customize playlists for every mood and occasion<br />
                - Favorites: Highlight your go-to songs and playlists for quick access
            </div>

            <div className={styles.grid}>
                <ViewOn 
                    src={appstore} 
                    alt="View on App Store" 
                    href="https://apps.apple.com/us/app/dreamer-playlist/id6472091497" 
                    dest="App Store" 
                />

                <ViewOn 
                    src={playstore} 
                    alt="View on Play Store" 
                    href="" 
                    dest="Play Store (coming soon)" 
                />
            </div>

            <br/>
        </main>
    );
};

export default DreamerPlaylist;
