import { useState, useEffect } from "react";

export function Clock() {
    const [time, setTime] = useState(new Date());
    const weekdays = ['Sun', 'Mon', 'Tue', 'We', 'Thu', 'Fr', 'Sat'];

    useEffect(() => {
        const intervalId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(intervalId);
    }, []);
    
    return <p className='text-gray-500 text-center text-lg mb-10'>{`${time.getHours()}:${time.getMinutes().toString().length === 1 ? '0' + time.getMinutes() : time.getMinutes()} PM, ${weekdays[time.getDay()]}, ${time.toLocaleString('default', { month: 'short'}) + ' ' + time.getDate()}, ${time.getFullYear()}`}</p>;
}