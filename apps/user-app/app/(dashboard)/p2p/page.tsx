import React from 'react'
import { SendCard } from '../../../components/SendCard'
import { authOptions } from '../../lib/auth'
import { getServerSession } from 'next-auth'
import P2PTransactions from '../../../components/p2pTransactions'
import db from "@repo/db/client";

type P2PTransfer = Awaited<ReturnType<typeof db.p2pTransfer.findMany>>[number];

async function getP2PTransactions() {
    const session = await getServerSession(authOptions)
    if (!session) {
        return [];
    }

    const txns = await db.p2pTransfer.findMany({
        where: {
            fromUserId: Number(session.user?.id),
        }
    });

    return txns.map((t: P2PTransfer) => ({
        time: t.timestamp,
        amount: t.amount,
    }));
}

const Page = async () => {
    const transactions = await getP2PTransactions()

    return (
        <div className="w-full min-h-screen flex justify-center items-center ">
            <div className="flex max-w-4xl w-full items-center">
                
                {/* Left card */}
                <div className="w-[50%]">
                    <SendCard />
                </div>

                {/* Right card */}
                <div className="w-[50%]">
                    <P2PTransactions transactions={transactions} />
                </div>

            </div>
        </div>
    )
}

export default Page
