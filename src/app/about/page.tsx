import Image from "next/image";
import styles from "./page.module.css";
import imgBackground from "/public/illustration.png";
import LinkButton from "@/components/linkButton/LinkButton";

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    fill={true}
                    alt=""
                    className={styles.img}
                />
                <div className={styles.imgDescription}>
                    <h2>Digital Storytellers</h2>
                    <p>Handcrafting award winning digital experience</p>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1>Who Are We?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        <br />
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <br />
                    <LinkButton url="/contact" text="Contact us" />
                </div>

                <div className={styles.item}>
                    <h1>Who Are We?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <br />
                    <ul>
                        <li>Creative Illustations</li>
                        <li>Dynamic websites</li>
                        <li>Fast and Handy Mobiles Apps</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
