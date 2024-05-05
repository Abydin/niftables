import React from "react";
import Video from "next-video";
type Props = {};

const Section2 = (props: Props) => {
	return (
		<section className="w-full px-4 h-screen lg:px-48 py-5 grid lg:grid-cols-2 gap-x-3 items-center bg-black pb-14 ">
			<div className="col-span-1 flex flex-col">
				<div className="uppercase text-white font-monument font-normal text-2xl lg:text-6xl lg:leading-[110%] text-center lg:text-left">
					creon pass <br /> nft
				</div>
				<hr className="mt-8 mb-6" />
				<div className="text-gradient text-center lg:text-left text-[10px] lg:text-lg font-satoshi lg:leading-[130%]font-medium">
					The Creon NFT pass unlocks access to AI projects, the Creon <br />
					launchpad, and a ticket to generate passive income through AI-
					<br />
					driven tools
				</div>
				<div className="flex items-start flex-col mt-7 gap-[10px]">
					<span className="border border-[#13171D] rounded-[6px] py-3 px-[16px] font-satoshi text-lg leading-[130%]">
						Pre-launch investment opportunities for upcoming AI projects
					</span>
					<span className="border border-[#13171D] rounded-[6px] py-3 px-[16px] font-satoshi text-lg leading-[130%]">
						Free and early access to Creon built AI projects{" "}
					</span>
					<span className="border border-[#13171D] rounded-[6px] py-3 px-[16px] font-satoshi text-lg leading-[130%]">
						Higher allocation limits on the Creon AI Launchpad{" "}
					</span>
					<span className="border border-[#13171D] rounded-[6px] py-3 px-[16px] font-satoshi text-lg leading-[130%]">
						Revenue share distribution from Creon built AI projects{" "}
					</span>
				</div>

				<button className="flex justify-center mt-14 text-center bg-gradient-to-r from-[#3D8BFF] from-[0%] to-[#AB23FF] to-[100%] rounded-md py-3 w-2/3">
					<span className="font-satoshi font-bold text-lg leading-[110%]">
						Buy Creon Pass
					</span>
				</button>
			</div>

			<div className="col-span-1 relative h-full hidden lg:block">
				<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(61, 139, 255, 0.44)] from-[4.29%] to-[#AB23FF] to-[95.71%] mix-blend-soft-light" />
				<div className="w-full h-full ">
					<Video
						src="/nft-video.mp4"
						poster="/nft-video.png"
						className="w-full h-full video"
						autoPlay
						muted
						playsInline
						loop
						controls={false}
					/>
				</div>
				<div
					className="h-full w-[85px] absolute top-0 left-0 bg-black rounded-e-[90%] blur-[30px]
                "
				/>
				<div className="h-full w-[85px] absolute top-0 right-0 bg-black rounded-s-[90%] blur-[30px]" />
				<div className="w-full absolute top-0 bg-black h-9 blur-[30px]" />
				<div className="w-full absolute bottom-0 bg-black h-9 blur-[30px]" />
			</div>
		</section>
	);
};

export default Section2;
