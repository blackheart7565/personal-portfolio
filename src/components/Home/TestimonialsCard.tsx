import { FC } from "react";

interface ITestimonialsCardProps {
	img: string;
	description: string;
	name: string;
	ceo: string;
}

export const TestimonialsCard: FC<ITestimonialsCardProps> = ({
	img,
	description,
	name,
	ceo,
}): JSX.Element => {
	return (
		<div className="flex items-center bg-white px-14 py-10 gap-10 w-full h-full rounded-xl cursor-pointer">
			<div className="w-[235px] h-[235px] shrink-0">
				<img
					src={img}
					alt="testimonials-img1"
					className="w-full h-full object-cover object-center"
				/>
			</div>
			<div className="flex flex-col text-black">
				<p className="text-[21px] tracking-[0.03em] text-balance">{description}</p>
				<span className="text-2xl font-medium tracking-[0.03em] ">{name}</span>
				<span className="text-[19px] tracking-[0.03em]">{ceo}</span>
			</div>
		</div>
	);
};