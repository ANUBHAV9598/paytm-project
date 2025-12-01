import { NextResponse } from "next/server"
import client from "@repo/db/client";

export const GET = async () => {
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