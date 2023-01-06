import webMobileImage from "./assets/images/image-web-3-mobile.jpg";
import webDesktopImage from "./assets/images/image-web-3-desktop.jpg";
export default function Content() {
	return (
		<div className="mt-10 lg:w-3/4">
			<div className="flex justify-center lg:hidden">
				<img src={webMobileImage} alt="" />
			</div>
			<div className="hidden lg:block">
				<img src={webDesktopImage} alt="" />
			</div>
			<div className="lg:flex lg:justify-between">
				<h1 className="text-5xl font-extrabold lg:w-1/3 text-Very_dark_blue mt-8">
					{" "}
					The Bright Future of Web 3.0?
				</h1>

				<div className="lg:flex lg:flex-col lg:w-2/5">
					<p className="mt-8 text-Dark_grayish_blue">
						We dive into the next evolution of the web that claims
						to put the power of the platforms back into the hands of
						the people. But is it really fulfilling its promise?
					</p>

					<button className="mt-8 py-3 px-6  font-bold tracking-[0.2rem] uppercase text-Off_white bg-Soft_red self-center lg:self-start transition-all hover:brightness-125">
						{" "}
						Read more
					</button>
				</div>
			</div>
		</div>
	);
}
