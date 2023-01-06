import RankElement from "./RankElement";
import imageGamingGrowth from '../assets/images/image-gaming-growth.jpg'
import imageRetroPcs from '../assets/images/image-retro-pcs.jpg'
import imageTopLaptops from '../assets/images/image-top-laptops.jpg'

const elem = [
	{
		image: imageRetroPcs,
		rank: "01",
		title: "Reviving Retro PCs",
		content: "What happens when old PCs are given modern upgrades?",
	},
	{
		image: imageTopLaptops,
		rank: "02",
		title: "Top 10 Laptops of 2022",
		content: "Our best picks for various needs and budgets.",
	},
	{
		image: imageGamingGrowth,
		rank: "03",
		title: "The Growth of Gaming",
		content: "How the pandemic has sparked fresh opportunities.",
	},
];

export default function Rank() {
    return (
        <div className="mt-8">
            {elem.map(x=><RankElement {...x}/>)}
        </div>
    )
}
