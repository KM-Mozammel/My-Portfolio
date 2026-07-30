"use client";

import { useEffect, useState } from "react";

export default function MessageDetails({ params }: any) {
    const [msg, setMsg] = useState<any>(null);

    useEffect(() => {
        fetch(`/api/admin/messages/${params.id}`)
            .then((r) => r.json())
            .then(setMsg);
    }, [params.id]);

    if (!msg) return <div>Loading...</div>;

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">
                {msg.subject}
            </h1>

            <p>
                From: {msg.name} ({msg.email})
            </p>

            <div className="mt-4 border p-3">
                {msg.message}
            </div>
        </div>
    );
}