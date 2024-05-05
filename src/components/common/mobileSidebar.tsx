import React from "react";

import { SideDrawer } from "@ui/SideDrawer";
import Link from "next/link";
import { Social } from "../icons";

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

const MobileSidebar = ({ isOpen, onClose }: Props) => {
	return (
		<SideDrawer onClose={onClose} open={isOpen} position="right">
			<div className="relative flex h-full">
				<div className="w-72 max-w-full bg-black py-4 pb-8">
					<div className="h-full flex flex-col">
						<div className="flex justify-end gap-x-8 mb-8 px-4">
							<button className=" rounded-md h-[44px] border border-white px-5">
								Connect
							</button>
							<button
								className="px-5 rounded-md h-[44px] bg-[#3D8BFF]"
								onClick={onClose}
							>
								X
							</button>
						</div>
						<div className="flex-1 flex flex-col border-t border-t-[#13171D]  ml-8">
							<Link
								href=""
								className="text-[18px] font-satoshi leading-[110%] font-medium border-b border-b-[#13171D] py-4"
							>
								Creon Pass
							</Link>
							<Link
								href=""
								className="text-[18px] font-satoshi leading-[110%] font-medium border-b border-b-[#13171D] py-4"
							>
								Token
								<div className="inline-block ml-2 text-[#AB23FF] px-1 py-[1px] align-top leading-[110%] rounded-[100px] bg-black text-[10px] uppercase">
									soon
								</div>
							</Link>
							<Link
								href=""
								className="text-[18px] font-satoshi leading-[110%] font-medium border-b border-b-[#13171D] py-4"
							>
								AI Revenue
								<div className="inline-block ml-2 text-[#AB23FF] px-1 py-[1px] align-top leading-[110%] rounded-[100px] bg-black text-[10px] uppercase">
									soon
								</div>
							</Link>
							<Link
								href=""
								className="text-[18px] font-satoshi leading-[110%] font-medium border-b border-b-[#13171D] py-4"
							>
								AI Launchpad
								<div className="inline-block ml-2 text-[#AB23FF] px-1 py-[1px] align-top leading-[110%] rounded-[100px] bg-black text-[10px] uppercase">
									soon
								</div>
							</Link>
						</div>
						<div className="w-full flex justify-center">
							<Social />
						</div>
					</div>
				</div>
			</div>
		</SideDrawer>
	);
};

export default MobileSidebar;
