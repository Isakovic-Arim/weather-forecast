import { useState, useEffect } from "react";

export function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(intervalId);
    }, [])
    
    return <p className='text-gray-500 text-center text-lg'>{`${time.getHours()}:${time.getMinutes()} PM, ${time.getDay()}, ${time.getMonth()}, ${time.getFullYear()}`}</p>;
}