import { createContext, useState } from "react";
import Card from "./Card";

export const ToggleMenuContext = createContext({
  toggleMenu: false,
  setToggleMenu: (toggleMenu:boolean) => {}
});

function App() {
	const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<ToggleMenuContext.Provider value={{ toggleMenu, setToggleMenu }}>
			<div className={`flex flex-col items-center overflow-hidden bg-Off_white relative before:opacity-100
      ${toggleMenu ? "before:bg-Dark_grayish_blue before:!opacity-70 before:transition-all before:contents-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full" : ""}`}>
				<Card />
			</div>
		</ToggleMenuContext.Provider>
	);
}

export default App;
