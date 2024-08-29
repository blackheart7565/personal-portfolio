/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import { Link } from "react-router-dom";

interface IProjectsCardProps {
	path?: string;
}

export const ProjectsCard: React.FC<IProjectsCardProps> = ({
	path,
}): JSX.Element => {
	return (
		<Link to={path || ""} className="group flex flex-col w-[450px] h-[612px] cursor-pointer">
			<div className="relative h-full w-full bg-[#EDECEC]">
				<img src="/project-card-img1.jpg" alt="project-card-image1" className="absolute bottom-0 left-[10px] z-[20] max-w-full object-center object-cover shadow-[6px_0px_4px_0px_#00000014]" />
				<img src="/project-card-img2.jpg" alt="project-card-image2" className="absolute top-0 right-[10px] z-[19] max-w-full object-center object-cover" />
			</div>
			<span className="text-[19px] tracking-[0.03em] text-primary mt-5">UI UX</span>
			<p className="text-2xl tracking-[0.03em] font-semibold dark:text-white text-black mt-5 group-hover:text-primary transition-colors duration-300 ease-in-out">AirCalling Landing Page Design </p>
		</Link>
	);
};