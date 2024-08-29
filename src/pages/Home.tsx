/* eslint-disable @typescript-eslint/no-empty-object-type */
import { FC } from "react";

import { Hero } from "../components/Home/Hero";
import { About } from "../components/Home/About";
import { Services } from "../components/Home/Services";

interface IHomeProps { }

export const Home: FC<IHomeProps> = (): JSX.Element => {

	return (
		<div className="home">
			<Hero />
			<About />
			<Services />
		</div>
	);
};