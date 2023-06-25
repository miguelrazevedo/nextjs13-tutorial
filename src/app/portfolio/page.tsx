import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Portfolio() {
    return (
        <div className={styles.container}>
            <p>Choose a gallery</p>
            <div className={styles.list}>
                <Link href="portfolio/illustration" className={styles.item}>
                    <span>Illuistrations</span>
                </Link>
                <Link href="portfolio/websites" className={styles.item}>
                    <span>Websites</span>
                </Link>
                <Link href="portfolio/apps" className={styles.item}>
                    <span>Applications</span>
                </Link>
            </div>
        </div>
    );
}
