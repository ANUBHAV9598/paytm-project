import { NextResponse } from "next/server"
import client from "@repo/db/client";

export const GET = async () => {
    if (!process.env.DATABASE_URL) {
        // CI/build environments may not have a DB URL; short circuit to keep builds green.
        return NextResponse.json({
            users: [],
            message: "Database unavailable",
        })
    }

    const users = await client.user.findMany({
        select: {
            id: true,
            email: true,
            name: true,
        },
        take: 5,
    });
    return NextResponse.json({
        users,
    })
}