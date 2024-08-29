import React, { ChangeEvent } from "react";

type IVolumeTypes = {
	value: number,
};

interface ICustomVolumeRangeProps extends IVolumeTypes {
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
}
export const CustomVolumeRange: React.FC<ICustomVolumeRangeProps> = ({
	value,
	onChange,
}): JSX.Element => {
	const handleChange = () => { };
	return (
		<div className="w-full bg-transparent rounded-xl shadow-[0_6px_16px_#29116926]">
			<div className="relative w-full grid place-items-center">

				<div className="w-full h-[12px] bg-[#EDECEC] dark:bg-[#101011] rounded-xl shadow-[0_4px_12px_#29116933] overflow-hidden">
					<div
						className="range__slider-line h-full bg-primary relative"
						id="range-line"
						style={{
							width: `${value}%`
						}}
					/>
				</div>

				<input
					type="range"
					className="appearance-none w-full h-[10px] absolute bg-transparent rounded-md rangeSliderThumb"
					id="range-input"
					min="0"
					max="100"
					value={value}
					step="1"
					onChange={onChange || handleChange}
				/>
			</div>
		</div>
	);
};