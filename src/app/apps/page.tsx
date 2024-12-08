import styles from "../page.module.css";
import Header from "../header";
import AppSection from "./app_section";

export default function MyApps() {
    return (
        <main className={styles.main}>
            <Header />
            <div className={styles.grid3}>
                <AppSection
                    href="/apps/smd"
                    title="Sum My Day"
                    description={
                        <>
                            A productivity app that helps users track their daily activities and goals.
                            <br />
                            (Coming Soon)
                        </>
                    }
                />

                <AppSection
                    href="/apps/dreamer_playlist"
                    title="Dreamer Playlist"
                    description={
                        <>
                            A local audio file player on iOS.
                            <br />
                            Import your audio files and create playlists for your
                            local music.
                        </>
                    }
                />

                <AppSection
                    href="/apps/recycle_this"
                    title="Recycle This!"
                    description={
                        <>
                            A Hackathon project for Global Gamers Challenge.
                            <br />
                            Spot the recyclables in the given category within 30 seconds to win the game round!
                        </>
                    }
                />

                <AppSection
                    href="https://codepen.io/judysome/full/jzxxRz"
                    title="Simon Game"
                    description={
                        <>
                            A FreeCodeCamp project.
                            <br />
                            Play the Simon Game and see how far you can go.
                        </>
                    }
                />

                <AppSection
                    href="https://chrome.google.com/webstore/detail/emojist/aikgnikholhpeojnbbbmogcfogiecamf"
                    title="Emojist"
                    description={
                        <>
                            A Chrome Extension.
                            <br />
                            Save your favorite emojis for easy access and use in chats.
                        </>
                    }
                />
            </div>
        </main>
    );
}
