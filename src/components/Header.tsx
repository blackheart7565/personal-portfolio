/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import { Link } from "react-router-dom";

import { navigationEndpoints } from "../endpoints/navigationEndpoints";
import { Logo } from "./Logo";

interface IHeaderProps { }

interface INavigation {
	id: number,
	path: string,
	label: string,
}

export const Header: React.FC<IHeaderProps> = (): JSX.Element => {


	const navigation: INavigation[] = [
		{
			id: 1,
			path: navigationEndpoints.home,
			label: "Home",
		},
		{
			id: 2,
			path: navigationEndpoints.about,
			label: "About",
		},
		{
			id: 3,
			path: navigationEndpoints.services,
			label: "Services",
		},
		{
			id: 4,
			path: navigationEndpoints.projects,
			label: "Projects",
		},
		{
			id: 5,
			path: navigationEndpoints.testimonials,
			label: "Testimonials",
		},
		{
			id: 6,
			path: navigationEndpoints.contactUs,
			label: "Contact Us",
		},
	];

	return (
		<header className="fixed top-0 left-0 w-full z-[1000] dark:bg-black bg-white">
			<div className="container mx-auto justify-between items-center flex">
				<Logo />

				<nav className="flex items-center">
					<ul className="flex items-center gap-[13px]">
						{navigation.map((nav: INavigation): JSX.Element => (
							<li key={nav.id} className="group">
								<Link
									to={nav.path}
									className="py-4 px-5 text-[21px] dark:text-white text-black group-hover:text-primary transition-colors duration-300 ease-in-out"
								>
									{nav.label}
								</Link>
							</li>
						))}
					</ul>
					<button
						className="py-3 px-5 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors duration-300 ease-in-out"
					>
						Download CV
					</button>
				</nav>
			</div>
		</header>
	);
};