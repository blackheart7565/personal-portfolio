/* eslint-disable @typescript-eslint/no-empty-object-type */
import { FC } from "react";

import { Hero } from "../components/Home/Hero";

interface IHomeProps { }

export const Home: FC<IHomeProps> = (): JSX.Element => {

	return (
		<div className="home">
			<Hero />
		</div>
	);
};