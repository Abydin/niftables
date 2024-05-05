"use client";
import { useState } from "react";
import { CaretDownIcon, CaretUpIcon } from "../icons";
import classNames from "classnames";
import { BodyText, SubTitle } from ".";

type Props = {
	icon: any;
	title: string;
	message: string;
};

const Accordion = ({ icon: Icon, title, message }: Props) => {
	const [isOpen, setIsopen] = useState(false);
	return (
		<div className="flex flex-col py-5  border-b border-b-[#13171D]">
			<div
				className="flex items-center gap-x-5  hover:text-[#3D8BFF] "
				onClick={() => setIsopen(!isOpen)}
			>
				<Icon
					className="cursor-pointer self-start hover:!text-[#3D8BFF] "
					onClick={() => setIsopen(!isOpen)}
				/>

				<SubTitle className="hover:text-[#3D8BFF]">{title}</SubTitle>
				{isOpen ? (
					<CaretUpIcon className="ml-auto" />
				) : (
					<CaretDownIcon className="ml-auto" />
				)}
			</div>

			<div
				className={classNames("flex gap-x-5 ", {
					"!hidden": !isOpen,
				})}
			>
				<BodyText
					className={classNames(
						"text-sm pl-[120px] leading-[130%] overflow-hidden",
						{
							hidden: !isOpen,
						}
					)}
				>
					{message}
				</BodyText>
			</div>
		</div>
	);
};

export default Accordion;
