import { MainLayout } from "../components/layouts";
import { navigationEndpoints } from "../endpoints/navigationEndpoints";
import { Home } from "../pages/Home";
import { PageNotFound } from "../pages/PageNotFound";

import type { ILayoutPaths } from "../types/layout";

export const pageRoutes: ILayoutPaths[] = [
	{
		id: 1,
		path: navigationEndpoints.home,
		element: <MainLayout />,
		children: [
			{
				id: 1,
				path: "",
				index: true,
				element: <Home />,
			},
		]
	},
	{
		id: 2,
		path: navigationEndpoints.pageNotFound,
		index: false,
		element: <PageNotFound />,
	},
];