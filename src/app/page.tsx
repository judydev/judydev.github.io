import styles from "./page.module.css";
import Sections from "./sections";
import Header from "./header";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({subsets: ['latin']})

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
            <div className={orbitron.className}>
                <div className={styles.description}>
                After being a web developer for 5 years, I quit my job and took some time to explore what I wanted to do next. 
                During this time, I discovered Flutter and used it to build cross-platform (mostly iOS) apps. 
                I also picked up Python for functional programming and machine learning. 
                In my free time, I love listening to music and traveling. I also started writing songs last year.
                </div>
            </div>
            {/* <div className={styles.description}>
                Full-stack developer with experience in web and mobile
                applications.
                <br />
                <br />
                Front End
                <br />
                Javascript/HTML/CSS, ReactJS/Redux/NextJS, Flutter
                <br />
                <br />
                Back End
                <br />
                Java, Python, Dart
                <br />
                <br />
            </div> */}
            <Sections />
        </main>
    );
}
