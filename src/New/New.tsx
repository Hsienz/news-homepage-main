import NewElement from "./NewElement";

const elem = [
	{
		title: "Hydrogen VS Electric Cars",
		content: "Will hydrogen-fueled cars ever catch up to EVs?",
	},
	{
		title: "The Downsides of AI Artistry",
		content:
			"What are the possible adverse effects of on-demand AI image generation?",
	},
	{
		title: "Is VC Funding Drying Up?",
		content:
			"Private funding by VC firms is down 50% YOY. We take a look at what that means.",
	},
];

export default function New() {
	return (
		<div className="new mt-12 bg-Very_dark_blue py-6 px-4">
			<h2 className="font-bold text-Soft_orange text-4xl"> New </h2>
			<div className="mt-5">
				{elem.map((x) => (
					<NewElement {...x} />
				))}
			</div>
		</div>
	);
}
