/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import { Link } from "react-router-dom";

import { navigationEndpoints } from "../endpoints/navigationEndpoints";

interface ILogoProps { }

export const Logo: React.FC<ILogoProps> = (): JSX.Element => {
	return (
		<Link to={navigationEndpoints.home} className="text-4xl text-black dark:text-white font-bold">
			<span className="px-[5px] bg-primary text-white">M</span>
			<span>uhammad</span>
		</Link>
	);
};