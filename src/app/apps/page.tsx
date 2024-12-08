import styles from "../page.module.css";
import Header from "../header";

export default function MyWebApps() {
    return (
        <main className={styles.main}>
            <Header />
            <div className={styles.grid}>
                <a
                    href="/apps/dreamer_playlist"
                    className={styles.card}
                >
                    <h2>
                        Dreamer Playlist <span>-&gt;</span>
                    </h2>
                    <p>
                        A local audio file player on iOS.
                        <br />
                        Import your audio files and create playlists for your
                        local music.
                    </p>
                </a>

                <a
                    href="/apps/recycle_this"
                    className={styles.card}
                >
                    <h2>
                        Recycle This! <span>-&gt;</span>
                    </h2>
                    <p>
                        A Hackathon project for Global Gamers Challenge.
                        <br />Spot the recyclables in the given category within 30 seconds to win the game round!
                    </p>
                </a>

                <a
                    href="https://codepen.io/judysome/full/jzxxRz"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Simon Game <span>-&gt;</span>
                    </h2>
                    <p>
                        A FreeCodeCamp project.
                        <br />
                        Play the Simon Game and see how far you can go.
                    </p>
                </a>

                <a
                    href="https://chrome.google.com/webstore/detail/emojist/aikgnikholhpeojnbbbmogcfogiecamf"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Emojist <span>-&gt;</span>
                    </h2>
                    <p>
                        A Chrome Extension.
                        <br />
                        Save your favorite emojis for easy access and use in chats.
                    </p>
                </a>
            </div>
        </main>
    );
}
