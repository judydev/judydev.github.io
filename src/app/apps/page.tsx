import Header from "../header";
import styles from "../page.module.css";

export default function MyWebApps() {
    return (
        <main className={styles.main}>
            <Header />
            <div className={styles.grid}>
                <a
                    href="https://codepen.io/judysome/full/LZPVKZ"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Quote Machine <span>-&gt;</span>
                    </h2>
                    <p>
                        A FreeCodeCamp project.
                        <br />A quote machine that calls an external API which
                        returns random quotes.
                    </p>
                </a>

                <a
                    href="https://codepen.io/judysome/full/XVrrJa"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Pomodoro Clock <span>-&gt;</span>
                    </h2>
                    <p>
                        A FreeCodeCamp project.
                        <br />
                        Set a Pomodoro Clock to help you get focused.
                    </p>
                </a>

                <a
                    href="https://codepen.io/judysome/full/PEGrYb"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Tic Tac Toe <span>-&gt;</span>
                    </h2>
                    <p>
                        A FreeCodeCamp project.
                        <br />
                        Play Tic Tac Toe Now :)
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
                        Save your favorite emojis and use in chats.
                    </p>
                </a>
            </div>
        </main>
    );
}
