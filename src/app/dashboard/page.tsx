"use client";

import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";

export default function Dashboard() {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
        "https://jsonplaceholder.typicode.com/posts",
        fetcher
    );

    const session = useSession();
    console.log(session);

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;
    console.log(data);

    return <div>Dashboard</div>;
}
