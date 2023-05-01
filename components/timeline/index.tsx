import { useState, useMemo } from "react";

const currYear=new Date().getFullYear();
type year=number;

export default function Timeline() {
    const [min, setMin]=useState<year>(2006);
    const [max, setMax]=useState<year>(currYear);

    return <div>
        {/* {min} {max} */}
        
    </div>;
}


/*

Era of suits - CB1, ARISE, SFC, SEB

*/
