import { useSelector, useDispatch } from "react-redux";

import { themeReducer } from "../store/reducers/themeReducer";

import type { TDispatchType, TStateStore } from "../types/store";
import type { TypedUseSelectorHook } from "react-redux";
import type { AllowedThemes } from "../constants/theme";

export const useRedux = () => {
	const useAppSelector: TypedUseSelectorHook<TStateStore> = useSelector;
	const useAppDispatch = () => useDispatch<TDispatchType>();

	const dispatch = useAppDispatch();

	const theme = useAppSelector(state => state.theme);
	const setTheme = (theme: AllowedThemes): void => {
		dispatch(themeReducer.actions.setTheme(theme));
	};

	return {
		dispatch,
		theme: {
			...theme,
			setLang: setTheme,
		},
	};
};