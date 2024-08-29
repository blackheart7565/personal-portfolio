/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
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

				<nav className="hidden xl:flex items-center overflow-x-auto overflow-y-hidden">
					<ul className="flex items-center gap-[13px]">
						{navigation.map((nav: INavigation): JSX.Element => (
							<li key={nav.id} className="group">
								<a
									href={nav.path}
									className="py-4 px-5 text-nowrap text-[21px] dark:text-white text-black group-hover:text-primary transition-colors duration-300 ease-in-out"
								>
									{nav.label}
								</a>
							</li>
						))}
					</ul>
					<button
						className="py-3 px-5 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors duration-300 ease-in-out"
					>
						Download CV
					</button>
				</nav>
				<button className="flex xl:hidden relative bg-transparent border-none w-10 h-10 burgerBtn">
					<span></span>
				</button>
			</div>

			<div className="xlm:hidden absolute top-full right-0 h-max">
				<div className="flex justify-center items-center">
					<button className="w-12 h-12 bg-transparent border-2 border-solid dark:bg-black bg-white border-black dark:border-white rounded-full p-2 dark:text-white text-black"
						onClick={handleSwitchTheme}
					>
						{
							theme.theme === "dark"
								? <BsFillMoonFill className="w-full h-full" />
								: <BsSunFill className="w-full h-full" />
						}
					</button>
					<span className=" h-1 w-20 bg-black dark:bg-white block"></span>
				</div>
			</div>
		</header>
	);
};