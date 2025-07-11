import type { JSX } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Menu } from "lucide-react";

type HeaderProps = {
	title: string;
	navigationButtons: JSX.Element[];
	className?: string;
};

/*

NOTE - this requires you define an xs breakpoint in index.css with

@theme {
  --breakpoint-xs: 500px;
}

navigationButtons will be an array like this:
const navigationButtons = [
  <Button key="sample1">Sample 1</Button>,
  <Button key="sample2">Sample 2</Button>,
];

*/

export function Header({ title, navigationButtons, className }: HeaderProps) {
	return (
		<header
			className={`flex justify-between items-center sticky top-0 bg-background shadow-md z-50 p-4 gap-2 ${className}`}
		>
			<p className="text-2xl font-bold">{title}</p>
			<div className="flex gap-4">
				<Navigation buttons={navigationButtons} />
				<CondensedNavigation buttons={navigationButtons} />
			</div>
		</header>
	);
}

function Navigation({ buttons }: { buttons: JSX.Element[] }) {
	return (
		<span className="hidden sm:flex xs:flex-row xs:items-center xs:gap-4">
			{buttons}
		</span>
	);
}

function CondensedNavigation({ buttons }: { buttons: JSX.Element[] }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<span className="relative sm:hidden">
			<Button
				variant="ghost"
				onClick={() => {
					console.log(isOpen);
					setIsOpen(!isOpen);
				}}
				className="p-2"
			>
				<Menu className="h-5 w-5" />
			</Button>
			{isOpen && (
				<Card className="absolute top-full right-0 z-50 gap-1 p-1">
					{buttons}
				</Card>
			)}
		</span>
	);
}
