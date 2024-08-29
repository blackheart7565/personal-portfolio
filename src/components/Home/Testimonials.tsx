/* eslint-disable @typescript-eslint/no-empty-object-type */
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { TestimonialsCard } from "./TestimonialsCard";

interface ITestimonialsProps { }

export const Testimonials: FC<ITestimonialsProps> = (): JSX.Element => {
	return (
		<section className="xlm:min-h-screen xl:h-screen relative">
			<div className="flex flex-col items-center justify-center h-full py-28">
				<div className="container">
					<h1 className="text-[65px] font-semibold tracking-[0.03em] dark:text-white text-black text-center">
						Testimonials
					</h1>
					<p className="text-[21px] tracking-[0.03em] dark:text-white text-black text-center max-w-4xl mx-auto mt-4">
						Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.
					</p>
				</div>
				<Swiper
					spaceBetween={70}
					slidesPerView={1}
					className="w-full h-max px-96 mt-20 testimonialsSwiper"
				>
					<SwiperSlide
						className="max-h-[345px]"
					>
						<TestimonialsCard
							img={"/testimonials-img1.png"}
							description={"Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas.Nunc gravida egestas suspendisse volutpat suscipit suspendisse faucibus amet convallis."}
							name={"Name"}
							ceo={"CEO"}
						/>
					</SwiperSlide>
					<SwiperSlide
						className="max-h-[345px]"
					>
						<TestimonialsCard
							img={"/testimonials-img2.png"}
							description={"Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas.Nunc gravida egestas suspendisse volutpat suscipit suspendisse faucibus amet convallis."}
							name={"Name"}
							ceo={"CEO"}
						/>
					</SwiperSlide>
					<SwiperSlide
						className="max-h-[345px]"
					>
						<TestimonialsCard
							img={"/testimonials-img1.png"}
							description={"Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas.Nunc gravida egestas suspendisse volutpat suscipit suspendisse faucibus amet convallis."}
							name={"Name"}
							ceo={"CEO"}
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};