import React from "react";
import { LogoIcon } from "../icons/Logo";
import Link from "next/link";
import { MenuIcon } from "../icons/Menu";

type Props = {
	setIsopen: (e: boolean) => void;
	isOpen: boolean;
};

const Navbar = ({ setIsopen, isOpen }: Props) => {
	return (
		<header className="lg:px-8 px-2 absolute top-0 left-0 w-full z-10 py-4">
			<nav className="w-full h-[44px]">
				<div className="h-full flex w-full bg-transparent justify-between items-center">
					<div className="h-[30px] lg:h-full flex items-center">
						<LogoIcon className="h-full" />
						<span className="font-bold text-2xl font-satoshi ml-2">CREON</span>
					</div>
					<div className="flex">
						<div className=" hidden  lg:flex items-center gap-x-10">
							<Link
								href=""
								className="text-[22px] font-satoshi leading-[110%] font-medium"
							>
								Creon Pass
							</Link>
							<Link
								href=""
								className="text-[22px] font-satoshi leading-[110%] font-medium"
							>
								Token
								<div className="inline-block ml-2 text-[#AB23FF] px-1 py-[1px] align-top leading-[110%] rounded-[100px] bg-black text-[10px] uppercase">
									soon
								</div>
							</Link>
							<Link
								href=""
								className="text-[22px] font-satoshi leading-[110%] font-medium"
							>
								AI Revenue
								<div className="inline-block ml-2 text-[#AB23FF] px-1 py-[1px] align-top leading-[110%] rounded-[100px] bg-black text-[10px] uppercase">
									soon
								</div>
							</Link>
							<Link
								href=""
								className="text-[22px] font-satoshi leading-[110%] font-medium"
							>
								AI Launchpad
								<div className="inline-block ml-2 text-[#AB23FF] px-1 py-[1px] align-top leading-[110%] rounded-[100px] bg-black text-[10px] uppercase">
									soon
								</div>
							</Link>

							<button className=" rounded-md h-[44px] border border-white px-5">
								Connect
							</button>
						</div>
						<button
							className="block rounded-md hover:bg-gray-200 hover:text-black lg:hidden"
							onClick={() => setIsopen(!isOpen)}
						>
							<MenuIcon className="h-7 w-7" />
						</button>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
