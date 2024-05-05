import { BodyText } from "@ui/Text";
import Image from "next/image";
import { title } from "process";
import React from "react";

type Props = {
	title: string;
	message: string;
	image: string;
};

const Sectiopn6Card = ({ title, message, image }: Props) => {
	return (
		<div className="bg-[#13171d99]  rounded-md grid lg:grid-cols-3 mb-6">
			<div className="lg:col-span-2 p-4">
				<h2 className="font-monument text-[30px] leading-[120%] mb-6">
					{title}
				</h2>
				<BodyText>{message}</BodyText>
			</div>
			<div className="col-span-1">
				<Image
					alt="chip"
					width={100}
					height={100}
					src={image}
					className="w-full h-full"
				/>
			</div>
		</div>
	);
};

export default Sectiopn6Card;
