import styles from "./page.module.css";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1 className={styles.mainTitle}>Our works</h1>
            {children}
        </div>
    );
}
