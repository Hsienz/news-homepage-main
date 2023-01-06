export default function Rank(props: {
	rank: string;
	title: string;
	content: string;
}) {
	return (
		<div>
			<h2> {props.rank}</h2>
			<h3>{props.title}</h3>
			<p>{props.content}</p>
		</div>
	);
}
