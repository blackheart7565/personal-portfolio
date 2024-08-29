/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../Header";

interface IMainLayoutProps { }

export const MainLayout: React.FC<IMainLayoutProps> = (): JSX.Element => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	);
};