import classNames from "classnames";
import React from "react";

type Props = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLParagraphElement>,
	HTMLParagraphElement
>;

export const BodyText = ({ className, ...rest }: Props) => {
	return (
		<p
			className={classNames("text-sm leading-[130%] font-satoshi", className)}
			{...rest}
		/>
	);
};

export const SubTitle = ({ className, ...rest }: Props) => {
	return (
		<h3
			className={classNames(
				"text-[22px] leading-[120%] font-satoshi",
				className
			)}
			{...rest}
		/>
	);
};
