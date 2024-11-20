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
                    After five years of working as a web developer, I decided to take a step back and explore new possibilities to grow.
                    During this time, I discovered my passion for building cross-platform apps with <b>Flutter</b>, focusing primarily on iOS. 
                    I also deepened my knowledge of <b>Google Cloud Platform (GCP)</b> to build scalable solutions and delved into <b>Python</b> for APIs and ML. 
                    <br/>
                    As a freelancer now, I am actively working on new app projects, taking on the full lifecycle from
                    design &gt;&gt; architecture &gt;&gt; development. 
                    Outside of coding, I love listening to music and travelling. I also started songwriting and producing recently.
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
