'use server';
import { getServerSession } from "next-auth"
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export const createOnRamptxn = async (amount: number, provider: string) => {
    const session = await getServerSession(authOptions);
    const token = Math.random().toString(36).substring(2, 9);
    const userId = session.user.id;

    if(!userId) {
        return {
            messgae: "User not logged in"
        }
    }
    await prisma.onRampTransaction.create({
        data: {
            userId: Number(userId),
            amount: amount,
            status: "Processing",
            startTime: new Date(),
            provider,
            token: token
        }
    });
    
    return {
        message:"On ramp transaction added successfully"
    }
}