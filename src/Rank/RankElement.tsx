export default function RankElement(props: {
	image: string;
	rank: string;
	title: string;
	content: string;
}) {
	return (
		<div className="flex mt-8">
			<img src={props.image} alt="" className="h-36"/>
			<div className="flex flex-col ml-6">
				<h2 className="font-extrabold text-2xl text-Grayish_blue"> {props.rank}</h2>
				<h3 className="text-Very_dark_blue font-extrabold mt-3">{props.title}</h3>
				<p className="mt-3 text-Dark_grayish_blue">{props.content}</p>
			</div>
		</div>
	);
}
