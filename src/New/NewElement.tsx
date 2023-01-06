export default function NewElement( props:{title:string,content:string}) {
    return (
        <div>
            <h2 className="text-Off_white font-extrabold">{props.title}</h2>
            <p className="text-Dark_grayish_blue mt-2 font-bold">{props.content}</p>
        <hr className="border-Dark_grayish_blue my-5"/>
        </div>
    )
} 