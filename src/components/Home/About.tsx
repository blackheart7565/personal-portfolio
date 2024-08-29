/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import { CustomVolumeRange } from "../UI/CustomVolumeRange/CustomVolumeRange";

interface IAboutProps { }

export const About: React.FC<IAboutProps> = (): JSX.Element => {
	return (
		<section className="xlm:min-h-screen xl:h-screen relative">
			<div className="container flex flex-col-reverse xlm:pt-40 xlm:gap-20 pb-10 xl:flex-row items-center justify-between h-full">
				<div className="left">
					<div className="max-w-[562px]">
						<img src="/about-img.png" alt="about-image" className="w-full h-full object-center object-cover" />
					</div>
				</div>
				<div className="max-w-[718px] dark:text-white text-black text-center xl:text-start">
					<h1 className="font-semibold text-5xl xl:text-[65px] tracking-[0.03em]">About Me </h1>
					<p className="text-lg xl:text-[21px] tracking-[0.03em]  mt-4">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus consectetur lacus</p>
					<div className="statistics flex flex-col gap-5 mt-10">
						<div className="flex flex-col gap-5">
							<span className="text-xl xl:text-2xl font-semibold tracking-[0.03em]">UX</span>
							<CustomVolumeRange
								value={95}
							/>
						</div>
						<div className="flex flex-col gap-5">
							<span className="text-xl xl:text-2xl font-semibold tracking-[0.03em]">Website Design</span>
							<CustomVolumeRange
								value={85}
							/>
						</div>
						<div className="flex flex-col gap-5">
							<span className="text-xl xl:text-2xl font-semibold tracking-[0.03em]">App Design </span>
							<CustomVolumeRange
								value={90}
							/>
						</div>
						<div className="flex flex-col gap-5">
							<span className="text-xl xl:text-2xl font-semibold tracking-[0.03em]">Graphic Design </span>
							<CustomVolumeRange
								value={80}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};