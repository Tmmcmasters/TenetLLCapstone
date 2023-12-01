"use client";

import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();

    useEffect(() => {
        router.push("/Login/WhoAreYou");
    })

    return <div>
    </div>;
}