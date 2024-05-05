"use client";
import Section1 from "@module/Section1";
import Section2 from "@module/Section2";
import Section3 from "@module/Section3";
import Section4 from "@module/Section4";
import Section5 from "@module/Section5";
import Section6 from "@module/Section6";
import Footer from "@ui/Footer";
import Navbar from "@ui/Navbar";
import MobileSidebar from "@ui/mobileSidebar";
import { useState } from "react";

export default function Home() {
	const [isOpen, setIsopen] = useState(false);
	return (
		<main className="flex min-h-screen flex-col relative">
			<Navbar setIsopen={setIsopen} isOpen={isOpen} />
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			<Section5 />
			<Section6 />
			<Footer />
			<MobileSidebar isOpen={isOpen} onClose={() => setIsopen(!isOpen)} />
		</main>
	);
}
