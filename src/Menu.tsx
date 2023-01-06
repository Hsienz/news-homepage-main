import iconMenu from "./assets/images/icon-menu.svg";
import iconMenuClose from "./assets/images/icon-menu-close.svg";
import logo from "./assets/images/logo.svg";
import { useContext } from "react";
import { ToggleMenuContext } from "./App";
export default function Menu() {
	const {toggleMenu, setToggleMenu} = useContext(ToggleMenuContext)
	const handleOnClick = () => {
		setToggleMenu(!toggleMenu)
	}
	return (
		<div className="flex justify-between items-center relative">
			<div>
				<img src={logo} alt="" />
			</div>
			<div className="z-10" onClick={handleOnClick}>
				<img
					src={iconMenu}
					alt=""
					className={`${toggleMenu ? "hidden" : "block"}`}
				/>
				<img
					src={iconMenuClose}
					alt=""
					className={`${toggleMenu ? "block" : "hidden"}`}
				/>
			</div>
			<div
				className={`-my-8 left-[120%] absolute transition-all w-[9999vw] h-[9999vh] top-0 pl-8 pt-36 gap-y-6 text-Very_dark_blue flex flex-col bg-Off_white ${

					toggleMenu ? "!left-1/3" : ""
				}`}
			>
				<a href="#" className="block">
					Home
				</a>
				<a href="#" className="block">
					New
				</a>
				<a href="#" className="block">
					Popular
				</a>
				<a href="#" className="block">
					Trending
				</a>
				<a href="#" className="block">
					Categories
				</a>
			</div>
		</div>
	);
}
