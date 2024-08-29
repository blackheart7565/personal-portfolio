/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";

interface IPageNotFoundProps { }

export const PageNotFound: React.FC<IPageNotFoundProps> = (): JSX.Element => {
	return (
		<div className="h-screen flex justify-center items-center">
			PageNotFound
		</div>
	)
}