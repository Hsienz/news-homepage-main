import Menu from "./Menu";
import New from "./New/New";
import Rank from "./Rank/Rank";
import Content from "./Content";
export default function Card() {
	return (
		<div className="my-8 mx-4 font-Inter text-[15px] font-normal ">
			<div>
				<Menu />
			</div>
			<div>
				<Content />
			</div>
			<div>
				<New />
			</div>
			<div>
				<Rank />
			</div>
		</div>
	);
}
