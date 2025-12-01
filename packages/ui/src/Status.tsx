'use client';

type StatusProps = {
    status: string
}

export const Status = ({ status }: StatusProps) => {
    return (
        <div className={`
            font-medium text-[0.65vw] 
            ${status === "Success" ? "bg-green-400/60" : "bg-rose-400/70"} 
            rounded-full px-[1vw] py-[0.07vw] text-center 
            ${status === "Success" ? "hover:bg-green-600" : "hover:bg-rose-600"}
            ${status === "Success" 
                ? 'shadow-[0_0_1px_3px_rgba(34,197,94,0.15)]' 
                : 'shadow-[0_0_1px_3px_rgba(244,63,94,0.15)]'
            }
        `}>
            {status}
        </div>
    );
};
