import { useEffect } from "react";
import Lenis from "lenis";

export const useSmoothScroll = () => {
	useEffect((): void => {
		const lenis = new Lenis();

		function raf(time: DOMHighResTimeStamp) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
};