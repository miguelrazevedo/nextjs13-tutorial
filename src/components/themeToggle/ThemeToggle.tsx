import { useContext } from "react";
import styles from "./page.module.css";
import { ThemeContext } from "../../../context/ThemeContext";
import { ThemeContextType } from "../../../@types/themeContext";

export default function ThemeToggle() {
    const { toggle, mode } = useContext(ThemeContext) as ThemeContextType;
    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🔆</div>
            <div
                className={styles.ball}
                style={mode === "dark" ? { right: "2px" } : { left: "2px" }}
            />
        </div>
    );
}
