/* eslint-disable @typescript-eslint/no-empty-object-type */
import { FC, ReactNode } from "react";
import { ServicesCard } from "./ServicesCard";

interface IServicesProps { }

export interface IServices {
	id: number;
	icon: ReactNode;
	title: string;
	description: string;
}

export const Services: FC<IServicesProps> = (): JSX.Element => {

	const services: IServices[] = [
		{
			id: 1,
			icon: "/services-icon1.svg",
			title: "UI/UX",
			description: "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh"
		},
		{
			id: 2,
			icon: "/services-icon2.svg",
			title: "Web Design ",
			description: "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh"
		},
		{
			id: 3,
			icon: "/services-icon3.svg",
			title: "Graphic Design ",
			description: "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh"
		},
		{
			id: 4,
			icon: "/services-icon4.svg",
			title: "UI/UX",
			description: "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh"
		},
	];

	return (
		<section id="services" className="xlm:min-h-screen xl:h-screen relative">
			<div className="container flex flex-col items-center justify-center h-full py-10">
				<h1 className="text-5xl xl:text-[65px] font-semibold tracking-[0.03em] dark:text-white text-black text-center">Services</h1>
				<p className="text-lg xl:text-[21px] tracking-[0.03em] dark:text-white text-black text-center max-w-4xl mx-auto mt-4">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.</p>
				<div className="grid cardServices justify-center items-center gap-5 mt-20 w-full">
					{services.map((item) => (
						<ServicesCard card={item} key={item.id} />
					))}
				</div>
			</div>
		</section>
	);
};