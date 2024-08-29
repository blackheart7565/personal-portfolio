/* eslint-disable @typescript-eslint/no-empty-object-type */
import { FC } from "react";

import { Hero } from "../components/Home/Hero";
import { About } from "../components/Home/About";
import { Services } from "../components/Home/Services";
import { Projects } from "../components/Home/Projects";
import { ContactUs } from "../components/Home/ContactUs";
import { Testimonials } from "../components/Home/Testimonials";

interface IHomeProps { }

export const Home: FC<IHomeProps> = (): JSX.Element => {

	return (
		<div className="home">
			<Hero />
			<About />
			<Services />
			<Projects />
			<Testimonials />
			<ContactUs />
		</div>
	);
};