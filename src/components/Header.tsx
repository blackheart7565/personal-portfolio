/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import { Link } from "react-router-dom";
import { BsSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

import { Logo } from "./Logo";
import { navigation } from "../utils/navigation";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { localStorageKeys } from "../constants/localStorage";
import { AllowedThemes } from "../constants/theme";
import { useRedux } from "../hooks/useRedux";

import type { INavigation } from "../types/navigation";

interface IHeaderProps { }

export const Header: React.FC<IHeaderProps> = (): JSX.Element => {
	const { theme } = useRedux();
	const [themeLocal, setThemeLocal] = useLocalStorage<AllowedThemes>(localStorageKeys.theme, "light");

	const handleSwitchTheme = (): void => {
		const isDark = themeLocal === "dark" ? "light" : "dark";
		setThemeLocal(isDark);
		theme.setLang(isDark);
	};

	return (
		<header className="fixed top-0 left-0 w-full z-[1000] dark:bg-black bg-white py-5">
			<div className="container mx-auto justify-between items-center flex">
				<Logo />

				<nav className="hidden xl:flex items-center">
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

				<div className="flex items-center gap-10">
					<button className="flex xl:hidden relative bg-transparent border-none w-10 h-10 burgerBtn">
						<span></span>
					</button>
					<button className="w-10 h-10 bg-transparent dark:text-white text-black"
						onClick={handleSwitchTheme}
					>
						{
							theme.theme === "dark"
								? <BsFillMoonFill className="w-full h-full" />
								: <BsSunFill className="w-full h-full" />
						}
					</button>
				</div>
			</div>
		</header>
	);
};