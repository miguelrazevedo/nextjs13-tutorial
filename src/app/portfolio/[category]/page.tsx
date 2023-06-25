import Image from "next/image";
import styles from "./page.module.css";
import LinkButton from "@/components/linkButton/LinkButton";

const items = [
    {
        id: 1,
        imgPath:
            "https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg",
    },
    {
        id: 2,
        imgPath:
            "https://images.pexels.com/photos/3094218/pexels-photo-3094218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 3,
        imgPath:
            "https://images.pexels.com/photos/297494/pexels-photo-297494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];
export default function Category({ params }: { params: { category: string } }) {
    return (
        <div className={styles.container}>
            <h3>{params.category}</h3>
            {items.map((item) => {
                return (
                    <div className={styles.item} key={item.id}>
                        <div className={styles.content}>
                            <h1>Creative portfolio</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed pulvinar placerat risus, ac
                                ultrices massa interdum et. In at fermentum
                                eros. Phasellus rhoncus velit eget commodo
                                scelerisque. Suspendisse laoreet quam ut lacus
                                varius placerat. Quisque iaculis velit dui, et
                                tristique.
                            </p>
                            <LinkButton url="#" text="See more" />
                        </div>
                        <div className={styles.imgContainer}>
                            <Image
                                src={item.imgPath}
                                alt=""
                                fill={true}
                                className={styles.img}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
