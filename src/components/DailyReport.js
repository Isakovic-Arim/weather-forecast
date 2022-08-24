import { Clock } from "./Clock";
import { InfoBox } from "./InfoBox";

function DailyReport(props) {
    if (!props.weather) {
        return <p className="text-center">Loading...</p>;
    }

    return (
        <div className="p-2 w-72">
            <Clock />
            {props.icon}
            <strong className="text-5xl">{props.temperature} <span className="text-5xl">°F</span></strong>
            <p className="text-center font-bold text-3xl mb-10">{props.weather}</p>
            <div className="flex justify-evenly">
                <InfoBox heading='Humidity' data={props.humidity} extention='%' />
                <InfoBox heading='Wind speed' data={props.windSpeed} extention=' km/j' />
            </div>
        </div>
    );
}

export default DailyReport;