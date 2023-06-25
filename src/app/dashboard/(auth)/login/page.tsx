"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Login() {
    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };

        const email = target.email.value;
        const password = target.password.value;

        signIn("credentials", { email, password });
    };
    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
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
                <button className={styles.button}>Login</button>
            </form>
            <Link href="/dashboard/register">
                Don't have an account? Create one!
            </Link>
        </div>
    );
}
