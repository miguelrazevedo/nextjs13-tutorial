"use client";

import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Post } from "@/@types/post";

export default function Dashboard() {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const session = useSession();
    const router = useRouter();
    const { data, error, isLoading } = useSWR(
        `/api/posts?username=${session?.data?.user?.name}`,
        fetcher
    );

    if (session.status === "loading") {
        return <p>Loading....</p>;
    }

    if (session.status === "unauthenticated") {
        router.replace("/dashboard/login");
    }
    console.log(data);
    console.log("User:", session.data);

    // If authenticated
    return (
        <div className={styles.container}>
            <div className={styles.posts}>
                {isLoading && <p className={styles.message}>Loading posts</p>}
                {data?.length === 0 && !isLoading && (
                    <p className={styles.message}>
                        You haven't created any post yet!
                    </p>
                )}
                {data?.map((val: Post) => {
                    return (
                        <div className={styles.post} key={val._id}>
                            <Image
                                src={val.img}
                                width={200}
                                height={130}
                                alt="Post img"
                                className={styles.postImg}
                            />
                            <h3 className={styles.postTitle}>{val.title}</h3>
                            <span className={styles.postDelete}>X</span>
                        </div>
                    );
                })}
            </div>
            <div className={styles.createPost}>
                <h2>Add new Post</h2>
                <form className={styles.form}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        name="image"
                        placeholder="Image"
                        className={styles.input}
                    />
                    <textarea
                        rows={10}
                        color="10"
                        className={styles.textArea}
                        placeholder="Content"
                    />
                    <button className={styles.button}>Create</button>
                </form>
            </div>
        </div>
    );
}
