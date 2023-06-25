import Image from "next/image";
import styles from "./page.module.css";
import { Post } from "../../../../@types/post";
import { notFound } from "next/navigation";

// Get new data at every single request
async function getPostById(id: number): Promise<Post> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        { cache: "no-store" }
    );
    if (!res.ok) {
        // Return not found page from Next.js
        return notFound();
    }

    return res.json();
}
export default async function BlogPost({ params }: { params: { id: string } }) {
    const post = await getPostById(Number.parseInt(params.id));
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.content}>
                    <div className={styles.contentHeader}>
                        <h1>Blog with id number {params.id}</h1>
                        <p>{post.title}</p>
                    </div>
                    <div className={styles.profile}>
                        <div className={styles.profileImgContainer}>
                            <Image
                                src="https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                                fill={true}
                                className={styles.profilePic}
                            />
                        </div>
                        <span>By userId {post.userId}</span>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src="https://images.pexels.com/photos/361104/pexels-photo-361104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        fill={true}
                        className={styles.img}
                    />
                </div>
            </div>
            <div className={styles.bottom}>
                <h2>Description</h2>
                <p>{post.body}</p>
            </div>
        </div>
    );
}
