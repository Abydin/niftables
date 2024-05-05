import React from "react";
import Video from "next-video";

type Props = {};

const Section3 = (props: Props) => {
	return (
		<section className="bg-black w-full lg:px-48 py-20 flex flex-col">
			<h1 className="uppercase text-white font-monument font-normal text-2xl lg:text-6xl lg:leading-[110%] lg:text-left text-center">
				Profiting Through
			</h1>
			<h2 className=" font-monument text-center lg:text-right text-[38px] text-gradient leading-[120%] mb-10">
				AI Innovation & Decentralization
			</h2>
			<div className="grid lg:grid-cols-3  gap-x-6">
				<div className="lg:col-span-2 relative rounded-md overflow-hidden ">
					<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[rgb(61, 139, 255)] from-[4.29%] to-[#AB23FF] to-[95.71%] mix-blend-soft-light" />
					<div className="w-full  h-[70vh] lg:h-full">
						<Video
							src="/creon-logo.mp4"
							poster="/creon-logo.png"
							className="w-full h-full video "
							autoPlay
							muted
							playsInline
							controls={false}
						/>
					</div>
				</div>
				<div className="col-span-1 border-x border-[#475263] h-full flex flex-col items-center justify-center px-3">
					<h3 className="text-[22px] leading-[130%] font-satoshi font-bold mb-8">
						The dynamic community driven business model of the future.
					</h3>
					<p className="text-lg leading-[130%]">
						At Creon, we blend the power of AI tools with the dynamic crypto and
						NFT markets, utilizing an innovative business model to drive
						profitability. This approach empowers our community, as our NFT and
						token holders directly benefit from the growth and prosperity of the
						Creon network, creating a win-win scenario for both our community
						and for the projects we launch.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Section3;
