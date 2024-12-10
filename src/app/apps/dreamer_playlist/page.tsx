
import styles from "../../page.module.css";
import appicon from "../../../assets/appicon/appicon_dreamer_playlist.png";
import Header from "@/app/header";
import AppIconImage from "@/app/components/appicon_image";
import { ViewOnAppStore, ViewOnPlayStore } from "@/app/components/view_on";

const DreamerPlaylist = () => {
    return (
        <main className={styles.main}>
            <Header />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <AppIconImage src={appicon} alt="Dreamer Playlist"/>
                <h1 className={styles.title} style={{ marginLeft: '10px' }}>Dreamer Playlist</h1>
            </div>

            <div className={styles.description}>
                Whether you are a songwriter, music lover, or audiobook listener, Dreamer Playlist lets you manage local audio tracks easily. Your tunes, your way.
                <br /><br />
                Key Features <br />
                - Import files: Quickly batch-load your local audio files into the app library<br />
                - Playlists: Customize playlists for every mood and occasion<br />
                - Favorites: Highlight your go-to songs and playlists for quick access
            </div>

            <div className={styles.grid4}>
                <ViewOnAppStore href="https://apps.apple.com/us/app/dreamer-playlist/id6472091497" />
                <ViewOnPlayStore href="" text="Coming Soon" />
            </div>

            <br/>
        </main>
    );
};

export default DreamerPlaylist;
