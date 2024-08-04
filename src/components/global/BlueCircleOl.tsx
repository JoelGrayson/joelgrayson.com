import React from "react";

export default function BlueCircleOl({ children, spacing=5 }: { children: React.ReactNode; spacing?: number }) {
    const childrenArray=React.Children.toArray(children);

    return <div className="grid grid-cols-[32px_1fr]">
        {childrenArray.map((child, i)=>{
            return <React.Fragment key={i}>
                <div className="unstyled relative">
                    <div className={`rounded-full bg-[#1d2cf3] p-3 text-white font-bold h-5 w-5 flex justify-center items-center ${i==childrenArray.length-1 ? '' : 'after:h-full after:w-1 after:absolute after:bg-[#1d2cf3] after:top-1'}`}>
                        <span className="relative top-[1px] z-[1]">{i+1}</span>
                    </div>
                </div>
                <div className="unstyled" style={{ marginBottom: spacing }}>
                    {child}
                </div>
            </React.Fragment>;
        })}
    </div>;
}
