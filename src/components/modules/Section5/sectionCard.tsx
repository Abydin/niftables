import { BodyText, SubTitle } from "@ui/Text";
import Image from "next/image";
import React from "react";

type Props = {
	title: string;
	subtitle: string;
	message: string;
	image: string;
};

const Section5Card = ({ title, subtitle, message, image }: Props) => {
	return (
		<div className="col-span-1 flex flex-col font-monument bg-[#13171d99] rounded-md text-[30px] leading-[120%] pt-5 pr-4 pb-4 relative">
			<span className="bg-white text-black rounded-[100px] px-[6px] py-[3px] absolute text-xs -top-2 right-9">
				COMING SOON
			</span>
			<div className="px-4 mb-3">{title}</div>
			<SubTitle className="text-gradient !text-[22px] leading-[120%] font-satoshi px-4 mb-8">
				{subtitle}
			</SubTitle>
			<div className="w-full h-[234px] mb-6 overflow-hidden">
				<Image
					alt={title}
					width={100}
					height={100}
					className="w-full h-full hover:scale-125  duration-700 ease-in-out"
					src={image}
				/>
			</div>
			<BodyText className="px-4">{message}</BodyText>
		</div>
	);
};

export default Section5Card;
