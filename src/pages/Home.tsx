/* eslint-disable @typescript-eslint/no-empty-object-type */
import { FC } from "react";

import { Hero } from "../components/Home/Hero";
import { About } from "../components/Home/About";

interface IHomeProps { }

export const Home: FC<IHomeProps> = (): JSX.Element => {

	return (
		<div className="home">
			<Hero />
			<About />
		</div>
	);
};