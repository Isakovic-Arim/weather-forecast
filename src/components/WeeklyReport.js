import Day from './Day';

function WeeklyReport(props) {
    if (!props.data || props.data.length < 4) {
        return <p className='text-center'>Loading...</p>;
    }

    return (
        <div className='flex justify-evenly'>
            <div className='bg-blue-400 rounded-lg text-white'><Day date='Today' icon={props.data[0].icon} humidity={props.data[0].humidity} /></div>
            <div className='text-gray-500'><Day date='Tomorrow' icon={props.data[1].icon} humidity={props.data[1].humidity} /></div>
            <div className='text-gray-500'><Day date='in 2 days' icon={props.data[2].icon} humidity={props.data[2].humidity} /></div>
            <div className='text-gray-500'><Day date='in 3 days' icon={props.data[3].icon} humidity={props.data[3].humidity} /></div>
        </div>
    );
}

export default WeeklyReport