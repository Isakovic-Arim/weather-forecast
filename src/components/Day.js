function Day(props) {
    return (
        <div className="p-4 w-36 h-46">
            <h1 className="text-xs text-center font-medium">{props.date}</h1>
            <div className="flex justify-center">{props.icon}</div>
            <p className="text-xs text-center font-light">Humidity</p>
            <p className="text-sm text-center">{props.humidity}%</p>
        </div>
    );
}

export default Day;