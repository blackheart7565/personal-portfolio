
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export type TSetStateDispatcher<T> = Dispatch<SetStateAction<T>>;

type TLocalStorageReturn<T> = [T, TSetStateDispatcher<T>];

export const useLocalStorage = <T,>(key: string, defData: T): TLocalStorageReturn<T> => {

	const [storage, setStorage] = useState<T>(() => {
		const localData = localStorage.getItem(key);
		return localData ? JSON.parse(localData) : defData;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(storage));
	}, [key, storage]);

	return [storage, setStorage];
};
