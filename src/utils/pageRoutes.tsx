import { MainLayout } from "../components/layouts";
import { navigationEndpoints } from "../endpoints/navigationEndpoints";
import { About } from "../pages/About";
import { ContactUs } from "../pages/ContactUs";
import { Home } from "../pages/Home";
import { PageNotFound } from "../pages/PageNotFound";
import { Projects } from "../pages/Projects";
import { Services } from "../pages/Services";
import { Testimonials } from "../pages/Testimonials";

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
			{
				id: 2,
				path: navigationEndpoints.about,
				index: false,
				element: <About />
			},
			{
				id: 3,
				path: navigationEndpoints.services,
				index: false,
				element: <Services />
			},
			{
				id: 4,
				path: navigationEndpoints.projects,
				index: false,
				element: <Projects />
			},
			{
				id: 5,
				path: navigationEndpoints.testimonials,
				index: false,
				element: <Testimonials />
			},
			{
				id: 6,
				path: navigationEndpoints.contactUs,
				index: false,
				element: <ContactUs />
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