import { theme } from './config';

export default function Circles({ from, to, value, setValue, transparent=false }: { from: number; /** lower bound */ to: number; /** upper bound */ value?: number; 
    // eslint-disable-next-line
    setValue: (newValue: number)=>void;
    transparent?: boolean;
}) {
    let indices=[];
    for (let i=from; i<=to; i++)
        indices.push(i);

    return <span>
        {indices.map(i=>
            <div
                tabIndex={0}
                className={
                    'p-2 mx-1 cursor-pointer rounded-3xl w-10 h-10 inline-flex justify-center items-center'+
                    (i===value
                        ? ` border-[1px] bg-[${theme.primary}] text-white border-[darkblue]`
                        : transparent ? '' : ' border-[1px] border-gray-600'
                    )
                }
                onClick={()=>setValue(i)}
                key={i}
            >
                {i}
            </div>
        )}
    </span>;
}

