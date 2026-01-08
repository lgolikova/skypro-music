import { CenterBlock } from "@/components/CenterBlock/CenterBlock";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <main className={styles.main}>
                    <CenterBlock />
                </main>
                <footer className="footer"></footer>
            </div>
        </div>
    );
}
