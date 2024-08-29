/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import { Outlet } from "react-router-dom";

import { useCheckTheme } from "../../hooks/useCheckTheme";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import { Header } from "../Header";
import { Footer } from "../Footer";

interface IMainLayoutProps { }

export const MainLayout: React.FC<IMainLayoutProps> = (): JSX.Element => {
	useSmoothScroll();
	useCheckTheme();
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};