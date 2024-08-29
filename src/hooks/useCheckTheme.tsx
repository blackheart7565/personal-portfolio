import { useEffect } from "react";

import { useRedux } from "./useRedux";
import { DARK } from "../constants/common";

export const useCheckTheme = (): void => {
	const { theme } = useRedux();
	const elementHTML = document.documentElement;

	useEffect((): void => {
		if (theme.theme === DARK) {
			elementHTML.classList.add(DARK);
		} else {
			elementHTML.classList.remove(DARK);
		}
	}, [elementHTML.classList, theme.theme]);
};