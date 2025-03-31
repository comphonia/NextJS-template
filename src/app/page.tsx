"use client";
import Image from "next/image";
import { Button } from "../components/atoms/button";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center py-2">
			<Image alt="Vercel logo" className="h-12" height={96} src="/vercel.svg" width={96} />
			<h1 className="mb-8 text-6xl font-bold">Hello, world!</h1>
			<Button size="lg" onClick={() => console.log("clicked")}>
				Click me
			</Button>
		</div>
	);
}
