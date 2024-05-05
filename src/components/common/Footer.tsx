import React from "react";
import { NiftablesIcon, Social } from "../icons";

type Props = {};

const Footer = (props: Props) => {
	return (
		<footer className="px-48 absolute bottom-0 left-0 w-full z-10 hidden lg:block">
			<div className="w-full h-[84px]">
				<div className="flex h-full w-full bg-transparent items-center justify-between">
					<div className="text-base leading-[130%] font-satoshi mr-16">
						© Creon 2023. All rights reserved.
					</div>
					<div className="flex gap-x-[10px]">
						<Social />
					</div>

					<div className="ml-auto">
						Powered by <NiftablesIcon className="inline-flex ml-0.5" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
