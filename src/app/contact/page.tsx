import Image from "next/image";
import styles from "./page.module.css";
import SideImage from "/public/contact.png";
import LinkButton from "@/components/linkButton/LinkButton";

export default function Contact() {
    return (
        <div className={styles.container}>
            <h1>Let's Keep in Touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image
                        src={SideImage}
                        alt=""
                        fill={true}
                        className={styles.img}
                    />
                </div>
                <form className={styles.form}>
                    <input
                        placeholder="Name"
                        type="text"
                        className={styles.input}
                    />
                    <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        className={styles.input}
                    />
                    <textarea
                        className={styles.textArea}
                        placeholder="Message"
                        cols={30}
                        rows={5}
                    />
                    <LinkButton url="#" text="Send" />
                </form>
            </div>
        </div>
    );
}
