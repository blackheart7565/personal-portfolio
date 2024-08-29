import { FC } from "react";

import type { IServices } from "./Services";

interface IServicesCardProps {
	card: IServices;
}

export const ServicesCard: FC<IServicesCardProps> = ({
	card,
}): JSX.Element => {
	return (
		<div className="flex flex-col justify-end items-start bg-[#F3F3F3] w-full h-[346px] rounded-2xl px-4 pb-12">
			{typeof card.icon === "string"
				? (
					<div className="max-w-[70px]">
						<img src={card.icon} alt="ui/ux-icon" className="w-full h-full object-cover object-center" />
					</div>
				) : (
					<>
						{card.icon}
					</>
				)}
			<span className="tracking-[0.03em] font-semibold text-3xl mt-6 block">{card.title}</span>
			<p className="text-[19px] tracking-[0.03em] mt-4">{card.description}</p>
		</div >
	);
};