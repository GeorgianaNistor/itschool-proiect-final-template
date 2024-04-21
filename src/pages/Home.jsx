import React from "react";
import { Layout } from "../components/Layout";

export function Home() {
	return (
		<>
			{/* Instantiem Layout, dându-i copii. */}
			<Layout>
				<h1>Home</h1>
				<p>
					This is the HomePage having some dummy text: Lorem ipsum dolor sit
					amet consectetur adipisicing elit.
				</p>
			</Layout>
		</>
	);
}
