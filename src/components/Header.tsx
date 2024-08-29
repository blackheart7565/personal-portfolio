/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import { Link } from "react-router-dom";

import { Logo } from "./Logo";
import { navigation } from "../utils/navigation";

import type { INavigation } from "../types/navigation";

interface IHeaderProps { }

export const Header: React.FC<IHeaderProps> = (): JSX.Element => {
	return (
		<header className="fixed top-0 left-0 w-full z-[1000] dark:bg-black bg-white py-5">
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