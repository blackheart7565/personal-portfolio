/* eslint-disable @typescript-eslint/no-empty-object-type */
import { FC } from "react";

import { TabBar } from "../UI/TabBar/TabBar";
import { ProjectsList } from "./ProjectsList";

interface IProjectsProps { }

export const Projects: FC<IProjectsProps> = (): JSX.Element => {
	return (
		<section className="min-h-screen relative">
			<div className="container flex flex-col items-center justify-center h-full pt-40">
				<h1 className="text-[65px] font-semibold tracking-[0.03em] dark:text-white text-black text-center">My Projects</h1>
				<p className="text-[21px] tracking-[0.03em] dark:text-white text-black text-center max-w-4xl mx-auto mt-4">
					Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.
				</p>
				<div className="w-full mt-10">
					<TabBar
						navigation={[
							{
								id: 1,
								label: "All"
							},
							{
								id: 2,
								label: "UI UX"
							},
							{
								id: 3,
								label: "Website Design"
							},
							{
								id: 4,
								label: "App Design"
							},
							{
								id: 5,
								label: "Graphic Design"
							},
						]}
						content={[
							{
								id: 2,
								node: (
									<ProjectsList />
								),
							},
						]}
					/>
				</div>
			</div>
		</section>
	);
};