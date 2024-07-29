import Header from "../header";
import styles from "../page.module.css";

export default function MyMusic() {
    return (
        <main className={styles.main}>
            <Header />
            <br/>
            <iframe
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                style={{
                    border: 0,
                    width: "500px",
                    maxWidth: "660px",
                    overflow: "hidden",
                    borderRadius: "10px",
                }}
                height="175"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src="https://embed.music.apple.com/us/album/wind-chime-demo/1707556507?i=1707556508"></iframe>
            <br/>
            <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
                style={{
                    border: 0,
                    width: "500px",
                    maxWidth: "660px",
                    overflow: "hidden",
                    borderRadius: "10px",
                }}
                height="175"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                src="https://embed.music.apple.com/us/album/snow-falls-christmas-comes/1723064400?i=1723064401"></iframe>
            <br/>
            <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
                height="175" 
                style={{
                    border: 0,
                    width: "500px",
                    maxWidth: "660px",
                    overflow: "hidden",
                    borderRadius: "10px",
                }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                src="https://embed.music.apple.com/us/album/you-me/1723238832?i=1723238835"></iframe>
            <br/>
            <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
                style={{
                    border: 0,
                    width: "500px",
                    maxWidth: "660px",
                    overflow: "hidden",
                    borderRadius: "10px",
                }}
                height="175"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                src="https://embed.music.apple.com/us/album/moonlight/1727732600?i=1727732601"></iframe>
            <br/>
            <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
                height="175" 
                style={{
                    border: 0,
                    width: "500px",
                    maxWidth: "660px",
                    overflow: "hidden",
                    borderRadius: "10px",
                }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                src="https://embed.music.apple.com/us/album/stay/1728419906?i=1728419907"></iframe>
        </main>
    );
}
