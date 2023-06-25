import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/Hero.png";
import LinkButton from "@/components/linkButton/LinkButton";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1>Better design for your digital products.</h1>
                <p>
                    Turning your Idea into Reality. We bring together the teams
                    from the global tech industry.
                </p>
                <LinkButton text="See our works" url="/portfolio" />
            </div>
            <div className={styles.item}>
                {/* Para costumizar a imagem, deve-se importar pelos imports */}
                <Image src={Hero} alt="" className={styles.img} />
            </div>
        </div>
    );
}
