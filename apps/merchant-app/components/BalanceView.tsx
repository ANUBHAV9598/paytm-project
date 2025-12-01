"use client";
import { useBalance } from "@repo/store/balance";

export const BalanceView = () => {
  const balance = useBalance();
  return <div>hi there {balance}</div>;
};

