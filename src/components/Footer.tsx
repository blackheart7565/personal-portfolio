/* eslint-disable @typescript-eslint/no-empty-object-type */
import { FC } from "react";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

import { Logo } from "./Logo";
import { navigation } from "../utils/navigation";

import type { INavigation } from "../types/navigation";

interface IFooterProps { }

export const Footer: FC<IFooterProps> = (): JSX.Element => {
	return (
		<footer className="relative">
			<div className="container grid grid-rows-3 items-center justify-center h-full pt-32">
				<div className="flex justify-center">
					<Logo />
				</div>

				<nav className="flex items-center">
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
				</nav>

				<div className="py-8">
					<div className="mt-5 dark:text-white text-black flex items-center justify-center gap-6 text-4xl">
						<Link to={""} className="w-[33px] h-[33px] block">
							<BsFacebook className="socialIcon" />
						</Link>
						<Link to={""} className="w-[33px] h-[33px] block">
							<AiOutlineTwitter className="socialIcon" />
						</Link>
						<Link to={""} className="w-[33px] h-[33px] block">
							<BsInstagram className="socialIcon" />
						</Link>
						<Link to={""} className="w-[33px] h-[33px] block">
							<AiFillLinkedin className="socialIcon" />
						</Link>
					</div>
				</div>
			</div>
			<div className="bg-[#121212] text-[21px] tracking-[0.03em] dark:text-white text-black py-5 w-full text-center mt-10">
				<p>© 2023 <span className="text-primary">Muhammad</span> All Rights Reserved , Inc.</p>
			</div>
		</footer>
	);
};