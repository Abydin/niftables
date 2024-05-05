import React from "react";
import Section5Card from "./sectionCard";

type Props = {};

const Section5 = (props: Props) => {
	return (
		<section className="grid lg:grid-cols-3 gap-x-5 bg-black lg:px-48 py-20">
			<Section5Card
				title="Token"
				subtitle="The Gateway token to the world of AI"
				image="/token.png"
				message="Set to debut in the latter half of 2024, the CREON token serves as the
					pioneering link between cutting-edge AI initiatives and blockchain
					technology. This innovative token provides NFT and token holders with
					unparalleled access to our Launchpad, AI tools, and exclusive
					pre-launch investment prospects."
			/>
			<Section5Card
				title="Revenue"
				subtitle="Driving income and growth through decentralization"
				image="/revenue.png"
				message="CREON NFT and token holders are integral participants in the
					profit-sharing from our launched AI-based enterprises. We support the
					development of AI tools, ensuring a steady revenue stream, all while
					allowing early investors to enjoy the benefits of their support."
			/>
			<Section5Card
				title="Launchpad"
				subtitle="Driving the future of AI Innovation"
				image="/launch.png"
				message="The Creon AI Launchpad, an essential component of our initiative,
					represents a groundbreaking opportunity in the realm of AI and
					blockchain. It provides the first known platform for acquiring
					allocations in tokenized AI projects, offering our community of NFT
					and CREON token holders early access to innovative and promising AI"
			/>
		</section>
	);
};

export default Section5;
