import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { localStorageKeys } from "../../constants/localStorage";

import type { IInitialStateLang } from "../../types/store";
import type { AllowedThemes } from "../../constants/theme";

const initialState: IInitialStateLang = {
	theme: JSON.parse(localStorage.getItem(localStorageKeys.theme) as AllowedThemes) || "light",
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setTheme(state, action: PayloadAction<AllowedThemes>): void {
			state.theme = action.payload;
		}
	}
});