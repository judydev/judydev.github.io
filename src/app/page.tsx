import styles from "./page.module.css";
import Sections from "./sections";
import Header from "./header";

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
            <div className={styles.description}>
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
            </div>
            <Sections />
        </main>
    );
}
