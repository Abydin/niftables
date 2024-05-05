import React from "react";
import Video from "next-video";
import Sectiopn6Card from "./Sectiopn6Card";

type Props = {};

const Section6 = (props: Props) => {
	return (
		<section className="bg-black  py-20 relative  lg:h-[1106px]">
			<div className="absolute top-0 left-0 w-full h-full video-blend" />
			<div className="absolute top-0 left-0 w-full h-full video-blend2" />
			<div className="absolute top-0 left-0 w-full h-full video-blend3" />
			<div className="w-full h-full">
				<Video
					src="/roadmap-video.mp4"
					poster="/roadmap-video.png"
					className="w-full video mix-blend-hard-light"
					autoPlay
					loop
					muted
					playsInline
					controls={false}
				/>
			</div>
			<div className="flex-flex-col bg-black absolute top-0  lg:px-48">
				<Sectiopn6Card
					title="AI Prospects, Market Size, and Development Pace"
					message="The AI market is one of the most dynamically growing areas of
							technology. According to reports, the global AI market is expected
							to reach $190.61 billion by 2025, with a CAGR (Compound Annual
							Growth Rate) of 36.6%. The key drivers behind this growth include
							advancements in machine learning, increasing demand for big data
							analytics, and growing adoption of AI technology across various
							sectors such as healthcare, finance, and transportation."
					image="/chip.png"
				/>
				<Sectiopn6Card
					title="AI Tools and Market"
					message="AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others."
					image="/robot.png"
				/>
				<Sectiopn6Card
					title="AI, Crypto, and NFT Market"
					message="Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities."
					image="/ring.png"
				/>
			</div>
		</section>
	);
};

export default Section6;
