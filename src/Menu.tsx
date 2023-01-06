import iconMenu from "./assets/images/icon-menu.svg";
import iconMenuClose from "./assets/images/icon-menu-close.svg";
import logo from "./assets/images/logo.svg";
import { useContext } from "react";
import { ToggleMenuContext } from "./App";
export default function Menu() {
	const { toggleMenu, setToggleMenu } = useContext(ToggleMenuContext);
	const handleOnClick = () => {
		setToggleMenu(!toggleMenu);
	};
	return (
		<div className="flex justify-between items-center relative">
			<span>
				<img src={logo} alt="" />
			</span>
			<div className="z-10 lg:hidden" onClick={handleOnClick}>
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
				className={`-my-8 left-[120%] absolute transition-all w-[9999vw] h-[9999vh] top-0 pl-8 pt-36 gap-y-6 text-Grayish_blue flex flex-col bg-Off_white ${
					toggleMenu ? "!left-1/3" : ""
				} lg:flex-row lg:relative lg:w-auto lg:h-auto lg:flex lg:left-0 lg:top-0 lg:p-0 lg:gap-x-12 font-bold`}
			>
				<a href="#" className="transition-all hover:text-Dark_grayish_blue">Home</a>
				<a href="#" className="transition-all hover:text-Dark_grayish_blue">New</a>
				<a href="#" className="transition-all hover:text-Dark_grayish_blue">Popular</a>
				<a href="#" className="transition-all hover:text-Dark_grayish_blue">Trending</a>
				<a href="#" className="transition-all hover:text-Dark_grayish_blue">Categories</a>
			</div>
		</div>
	);
}
