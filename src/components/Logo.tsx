/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";

interface ILogoProps { }

export const Logo: React.FC<ILogoProps> = (): JSX.Element => {
	return (
		<a href={"#hero"} className="text-4xl text-black dark:text-white font-bold">
			<span className="px-[5px] bg-primary text-white">M</span>
			<span>uhammad</span>
		</a>
	);
};