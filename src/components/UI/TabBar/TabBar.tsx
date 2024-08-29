import classNames from "classnames";
import React, { FC, useState } from "react";


export interface INavigation {
	id: number;
	label?: string;
}

export interface IContent {
	id: number;
	node?: React.ReactNode;
}

interface ITabBarProps {
	navigation: INavigation[];
	content: IContent[];
}

export const TabBar: FC<ITabBarProps> = ({
	navigation,
	content
}): JSX.Element => {
	const [selectId, setSelectId] = useState<number>(2);
	return (
		<div className="w-full">
			<nav className="nav">
				<ul className="flex justify-center items-center gap-3 tracking-[0.03em] dark:text-white text-black">
					{navigation.map(nav => (
						<li
							key={nav.id}
							className={classNames(
								"text-2xl py-3 px-4 cursor-pointer rounded-lg bg-[#F3F3F3] text-black hover:text-white hover:bg-primary transition-colors duration-300 ease-in-out",
								selectId === nav.id && "bg-primary text-white"
							)}
							onClick={(() => setSelectId(nav.id))}
						>
							{nav.label}
						</li>
					))}
				</ul>
			</nav>

			{content.map(item => (
				selectId === item.id && (
					<div key={item.id} className="w-full h-full overflow-y-auto overflow-x-hidden mt-20">
						{item.node}
					</div>
				)
			))}
		</div>
	);
};