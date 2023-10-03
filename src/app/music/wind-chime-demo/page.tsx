export default function WindChimeDemo() {
    return (
        <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            style={{
                border: 0,
                width: "100%",
                maxWidth: "660px",
                overflow: "hidden",
                borderRadius: "10px",
            }}
            height="175"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/us/album/wind-chime-demo/1707556507?i=1707556508"
        ></iframe>
    );
}
