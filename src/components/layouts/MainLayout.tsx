/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import { Outlet } from "react-router-dom";

import { useCheckTheme } from "../../hooks/useCheckTheme";
import { Header } from "../Header";
import { Footer } from "../Footer";

interface IMainLayoutProps { }

export const MainLayout: React.FC<IMainLayoutProps> = (): JSX.Element => {
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