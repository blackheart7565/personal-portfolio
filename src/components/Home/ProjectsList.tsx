/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";

import { ProjectsCard } from "./ProjectsCard";

interface IProjectsListProps { }

export const ProjectsList: React.FC<IProjectsListProps> = (): JSX.Element => {
	return (
		<nav className="w-full h-full">
			<ul className="flex items-center justify-between gap-3">
				{[...Array.from({ length: 3 })].map((_, index: number) => (
					<ProjectsCard key={index} />
				))}
			</ul>
		</nav>
	);
};