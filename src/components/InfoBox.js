export function InfoBox(props) {
    return (
        <div className="inline-block">
            <h1 className="text-center text-lg text-gray-500">{props.heading}</h1>
            <p className="text-center text-xl">{props.data}{props.extention}</p>
        </div>
    )
}