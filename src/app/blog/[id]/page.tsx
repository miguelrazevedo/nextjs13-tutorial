import Image from "next/image";
import styles from "./page.module.css";
import { Post } from "../../../@types/post";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: { id: string };
}): Promise<Metadata> {
    const data = await getPostById(params.id);
    return {
        title: data.title,
        description: data.description,
    };
}

// Get new data at every single request
async function getPostById(id: string): Promise<Post> {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);

    if (!res.ok) {
        // Return not found page from Next.js
        return notFound();
    }

    return res.json();
}
export default async function BlogPost({ params }: { params: { id: string } }) {
    const post = await getPostById(params.id);
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.content}>
                    <div className={styles.contentHeader}>
                        <h1>{post.title}</h1>
                        <p>{post.description}</p>
                    </div>
                    <div className={styles.profile}>
                        <div className={styles.profileImgContainer}>
                            <Image
                                src={post.img}
                                alt=""
                                fill={true}
                                className={styles.profilePic}
                            />
                        </div>
                        <span>By userId {post.username}</span>
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
                <h2>Content</h2>
                <p>{post.content}</p>
            </div>
        </div>
    );
}
