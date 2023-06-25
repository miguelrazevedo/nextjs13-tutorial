"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
    // Router hook to redirect the user
    const router = useRouter();

    const [err, setErr] = useState<boolean>(false);

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            username: { value: string };
            email: { value: string };
            password: { value: string };
        };

        const username = target.username.value;
        const email = target.email.value;
        const password = target.password.value;

        try {
            const res = await fetch("http://localhost:3000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (res.ok)
                router.push(
                    "/dashboard/login?success=Account has been created successfuly"
                );
        } catch (error) {
            setErr(false);
        }
    };
    return (
        <div className={styles.container}>
            <h1>Register</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    required
                    className={styles.input}
                    name="username"
                />
                <input
                    type="email"
                    placeholder="Email"
                    required
                    className={styles.input}
                    name="email"
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    className={styles.input}
                    name="password"
                />
                <button className={styles.button}>Register</button>
            </form>
            {err && "Something went wrong"}
            <Link href="/dashboard/login">Login with an existing account</Link>
        </div>
    );
}
