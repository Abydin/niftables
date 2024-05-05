import { SVGProps } from "react";

export const CaretDownIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="14"
			height="9"
			viewBox="0 0 14 9"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M1 1L7 7L13 1" stroke="white" stroke-width="1.5" />
		</svg>
	);
};

export const CaretUpIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="14"
			height="9"
			viewBox="0 0 14 9"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M1 8L7 2L13 8" stroke="white" stroke-width="1.5" />
		</svg>
	);
};
export const CaretRightIcon = (props: SVGProps<SVGSVGElement>) => {
	const { color } = props;
	return (
		<svg
			fill="none"
			height="14"
			viewBox="0 0 7 14"
			width="7"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M6.50233 7.95195C7.00566 7.41716 7.00566 6.58295 6.50233 6.04816L1.39472 0.621331C1.13186 0.342043 0.692366 0.328725 0.413079 0.591584C0.133792 0.854443 0.120473 1.29394 0.383332 1.57323L5.49094 7.00006L0.383332 12.4269C0.120474 12.7062 0.133792 13.1457 0.413079 13.4085C0.692367 13.6714 1.13186 13.6581 1.39472 13.3788L6.50233 7.95195Z"
				fill={color || "#030080"}
			/>
		</svg>
	);
};
