import Image from "next/image";
import { Button } from "../components/atoms/button";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Image alt="Vercel logo" className="h-12" height={96} src="/vercel.svg" width={96} />
			<h1 className="text-6xl font-bold mb-8">Hello, world!</h1>
			<Button size="lg">Click me</Button>
		</div>
	);
}
