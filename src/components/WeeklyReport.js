import { useEffect, useState } from 'react';
import Day from './Day';

function WeeklyReport(props) {
    const [week, setWeek] = useState([]);

    useEffect(() => { setWeek(props.data) }, [props.data]);

    if (!week || week.length < 4) {
        return <p className='text-center'>Loading...</p>;
    }

    return (
        <div className='flex justify-evenly'>
            <div className='bg-blue-400 rounded-lg text-white'><Day date='Today' icon={week[0].icon} humidity={week[0].humidity} /></div>
            <div className='text-gray-500'><Day date='Tomorrow' icon={week[1].icon} humidity={week[1].humidity} /></div>
            <div className='text-gray-500'><Day date='in 2 days' icon={week[2].icon} humidity={week[2].humidity} /></div>
            <div className='text-gray-500'><Day date='in 3 days' icon={week[3].icon} humidity={week[3].humidity} /></div>
        </div>
    );
}

export default WeeklyReport