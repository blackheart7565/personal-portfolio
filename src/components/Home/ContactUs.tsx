/* eslint-disable @typescript-eslint/no-empty-object-type */
import { FC, FormEvent } from "react";

interface IContactUsProps { }

export const ContactUs: FC<IContactUsProps> = (): JSX.Element => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<section id="contactUs" className="relative">
			<div className="container flex flex-col items-center justify-center h-full pt-20 pb-20">
				<h1 className="text-5xl xl:text-[65px] font-semibold tracking-[0.03em] dark:text-white text-black text-center">
					Lets Design Together
				</h1>
				<p className="text-lg xl:text-[21px] tracking-[0.03em] dark:text-white text-black text-center max-w-4xl mx-auto mt-4">
					Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.
				</p>
				<form className="w-full flex flex-col items-center mt-20" onSubmit={handleSubmit}>
					<div className="relative max-w-[627px] w-full flex flex-col sm:flex-row items-center gap-5">
						<label htmlFor="contactMe" className="relative z-[21] py-3 grow w-full h-full bg-white rounded-xl">
							<input
								type="email"
								id="contactMe"
								placeholder={"Enter Your Email"}
								className="w-full h-full pl-7 bg-transparent outline-none text-[21px] placeholder:text-[21px] placeholder:text-[#797979] placeholder:text-sm smm:placeholder:text-base"
							/>
						</label>
						<button
							type="submit"
							className="relative py-3 px-5 w-full sm:w-max text-nowrap text-2xl font-semibold text-white bg-primary py rounded-xl hover:bg-primary/80 transition-colors duration-300 ease-in-out"
						>
							Contact Me
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};