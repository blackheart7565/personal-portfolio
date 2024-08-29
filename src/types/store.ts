import store from "../store/store";

import type { AllowedThemes } from "../constants/theme";

export type TStateStore = ReturnType<typeof store.getState>;

export type TDispatchType = typeof store.dispatch;

export interface IInitialStateLang {
	theme: AllowedThemes;
}
