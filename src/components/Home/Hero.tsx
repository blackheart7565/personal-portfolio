/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

interface IHeroProps { }

export const Hero: React.FC<IHeroProps> = (): JSX.Element => {
	return (
		<section className="min-h-screen relative">
			<div className="container flex items-center justify-between pt-28 h-full">
				<div className="left max-w-[718px] dark:text-white text-black">
					<h4 className="font-semibold text-2xl">Hi I am</h4>
					<h3 className="text-primary font-semibold text-3xl">Muhammad Bin Jameel</h3>
					<h1 className="font-bold tracking-[0.03em] text-[100px] text-nowrap flex flex-col w-full leading-[6.5rem]">
						<span>UI & UX</span>
						<span className="self-end">Designer</span>
					</h1>
					<p
						className="font-normal text-[21px] tracking-[0.03em] py-5"
					>Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus consectetur lacus</p>
					<Link to={"#"} className="px-[52px] py-3 bg-primary hover:bg-primary/80 transition-colors duration-300 ease-in-out rounded-md mt-3 inline-block">
						Hire Me
					</Link>
				</div>
				<div className="relative">
					<div className="max-w-[562px]">
						<img src="/hero-img.png" alt="hero-image" className="w-full h-full object-cover object-center" />
					</div>

					<div className="absolute left-1/2 -translate-x-1/2 mt-10 dark:text-white text-black flex items-center justify-between gap-6 text-4xl">
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
		</section>
	);
};