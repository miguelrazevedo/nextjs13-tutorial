"use client";

import Link from "next/link";
import styles from "./page.module.css";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { signOut, useSession } from "next-auth/react";
const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
];

export default function Navbar() {
    const session = useSession();

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
                MiguelLandia
            </Link>
            <div className={styles.links}>
                <ThemeToggle />
                {links.map((link) => {
                    return (
                        <Link href={link.url} key={link.id}>
                            {link.title}
                        </Link>
                    );
                })}
                {session.status === "authenticated" && (
                    <button className={styles.logout} onClick={() => signOut()}>
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
}
