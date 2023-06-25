import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Post } from "../../../@types/post";
import LinkButton from "@/components/linkButton/LinkButton";
async function getPosts(): Promise<Post[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    // Handle error
    if (!res.ok) {
        // This will activate the closest `error.tsx` Error Boundary
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export default async function Blog() {
    const posts = await getPosts();
    return (
        <div>
            {posts.map((post) => {
                return (
                    <div className={styles.container} key={post.id}>
                        <div className={styles.imgContainer}>
                            <Image
                                src="https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                                width={500}
                                height={250}
                                className={styles.img}
                            />
                        </div>
                        <div className={styles.content}>
                            <h1>{post.title}</h1>
                            <LinkButton
                                url={`/blog/${post.id}`}
                                text="More info"
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
