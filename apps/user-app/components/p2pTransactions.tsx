import React from 'react'
import { Card } from "@repo/ui/card"

interface p2pTransactionsProps {
    time: Date,
    amount: number,
}

const P2PTransactions = ({ transactions = [] }: { transactions: p2pTransactionsProps[] }) => {
    return (
        <Card title="Recent Transactions">
            <div className="pt-2">
                {transactions.map(t => (
                    <div key={t.time.toString()} className="flex justify-between">
                        <div>
                            <div className="text-sm">
                                Received INR
                            </div>
                            <div className="text-slate-600 text-xs">
                                {t.time.toDateString()}
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            + Rs {t.amount / 100}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}

export default P2PTransactions
