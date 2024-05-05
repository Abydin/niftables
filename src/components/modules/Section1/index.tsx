import React from "react";
import Video from "next-video";
import Image from "next/image";

type Props = {};

const Section1 = (props: Props) => {
	return (
		<section className="relative h-screen lg:h-[970px]  w-full  lg:pb-14 ">
			<div className="w-full h-full">
				<Video
					src="/section1-vid.mp4"
					poster="/section1-vid.png"
					className="w-full video"
					autoPlay
					muted
					playsInline
					controls={false}
					preload="auto"
				/>
			</div>

			<div className="absolute top-0 left-0 w-full h-full video-blend" />

			<div className="absolute top-[30%] lg:top-[55%] lg:px-48 px-4">
				<div className="text-white font-monument font-normal text-2xl lg:text-6xl uppercase lg:leading-[110%] mb-5 text-center lg:text-left">
					The world&apos;s first <br /> platform for Tokenizing <br /> AI
					blockchain projects
				</div>
				<span className="text-[#AB23FF] text-[10px] lg:text-lg font-satoshi lg:leading-[130%] py-2 font-medium uppercase purple-gradient-border border-y">
					Hold the Creon Pass NFT and earn passive income from AI Tools
				</span>
			</div>
		</section>
	);
};

export default Section1;
