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
			<div className="container grid sm:grid-rows-3 items-center pt-20">
				<div className="flex justify-center smm:py-8">
					<Logo />
				</div>

				<nav className="max-w-5xl w-full mx-auto smm:py-8">
					<ul className="grid footerNavigation shrink-0 w-full place-items-center gap-[13px]">
						{navigation.map((nav: INavigation): JSX.Element => (
							<li key={nav.id} className="group">
								<Link
									to={nav.path}
									className="py-4 px-5 text-[21px] text-nowrap dark:text-white text-black group-hover:text-primary transition-colors duration-300 ease-in-out"
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
			<div className="bg-[#121212] text-[21px] tracking-[0.03em] text-white py-5 w-full text-center mt-10">
				<p>© 2023 <span className="text-primary">Muhammad</span> All Rights Reserved , Inc.</p>
			</div>
		</footer>
	);
};