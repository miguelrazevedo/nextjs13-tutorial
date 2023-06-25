import Link from "next/link";
import styles from "./page.module.css";
import { LinkButton } from "../../@types/linkButton";
export default function LinkButton({ url, text }: LinkButton) {
    return (
        <Link href={url}>
            <button className={styles.button}>{text}</button>
        </Link>
    );
}
