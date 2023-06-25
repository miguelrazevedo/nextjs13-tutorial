import Image from "next/image";
import styles from "./page.module.css";

export default function Footer() {
    return (
        <div className={styles.container}>
            <span>2023 MiguelLandia - All rights reserved.</span>
            <div className={styles.icons}>
                <Image
                    src="/1.png"
                    width={20}
                    height={20}
                    className={styles.icon}
                    alt="FB Icon"
                />
                <Image
                    src="/2.png"
                    width={20}
                    height={20}
                    className={styles.icon}
                    alt="Instagram Icon"
                />
                <Image
                    src="/3.png"
                    width={20}
                    height={20}
                    className={styles.icon}
                    alt="Twitter Icon"
                />
                <Image
                    src="/4.png"
                    width={20}
                    height={20}
                    className={styles.icon}
                    alt="YT Icon"
                />
            </div>
        </div>
    );
}
