"use client";
import { GrowthIcon } from "@icon/growth";
import { FairIcon, InfinitiIcon, RocketIcon } from "@src/components/icons";
import Accordion from "@ui/Accordion";
import Image from "next/image";
import React from "react";

type Props = {};

const Section4 = (props: Props) => {
	return (
		<section className="grid lg:grid-cols-2 bg-black w-full px-4 lg:px-48 py-20 gap-x-16 ">
			<div className="col-span-1 flex flex-col relative">
				<h2 className="text-[30px]  leading-[120%] mb-10 uppercase text-center lg:text-left font-monument whitespace-break-spaces">
					Our vision is to support the innovation of AI blockchain projects{" "}
					<span className="text-gradient">
						while prioritizing communities and democratizing profits
					</span>
				</h2>
				<div className="h-1/2 absolute bottom-0 left-[25%] hidden lg:block">
					<div className="relative w-full h-full">
						<Image
							alt="creon"
							width={500}
							height={500}
							src="/creon.png"
							className="!w-full !h-full"
						/>
					</div>
				</div>
			</div>
			<div className="col-span-1 flex flex-col">
				<Accordion
					icon={GrowthIcon}
					title="Profitability and Growth"
					message="At Creon, we handpick cutting-edge AI projects and offer our
							community and token holders early access and investment
							opportunities. Our community actively contributes to the growth
							and profitability of these projects, creating a dynamic ecosystem
							of innovation and shared success."
				/>

				<Accordion
					icon={FairIcon}
					title="ransparent & Fair Decentralized Earnings"
					message="At Creon, we handpick cutting-edge AI projects and offer our
							community and token holders early access and investment
							opportunities. Our community actively contributes to the growth
							and profitability of these projects, creating a dynamic ecosystem
							of innovation and shared success."
				/>
				<Accordion
					icon={RocketIcon}
					title="Launching the future"
					message="At Creon, we handpick cutting-edge AI projects and offer our
							community and token holders early access and investment
							opportunities. Our community actively contributes to the growth
							and profitability of these projects, creating a dynamic ecosystem
							of innovation and shared success."
				/>
				<Accordion
					icon={InfinitiIcon}
					title="Limitless Possibilities of AI
& Crypto"
					message="At Creon, we handpick cutting-edge AI projects and offer our
							community and token holders early access and investment
							opportunities. Our community actively contributes to the growth
							and profitability of these projects, creating a dynamic ecosystem
							of innovation and shared success."
				/>
			</div>
		</section>
	);
};

export default Section4;
