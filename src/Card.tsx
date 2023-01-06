import Menu from "./Menu";
import New from "./New/New";
import Rank from "./Rank/Rank";
import Content from "./Content";
export default function Card() {
	return (
		<div className="my-8 mx-4 lg:my-16 lg:mx-32 font-Inter text-[15px] font-normal ">
			<Menu />
			<div className="lg:flex lg:gap-x-6">
				<Content />
				<New />
			</div>
			<Rank />
		</div>
	);
}
