import { HTMLAttributes } from "react";

interface GameBannerProps extends HTMLAttributes<HTMLDivElement> {
	bannerUrl: string;
	title: string;
	adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
	return (
		<a href="" className={`relative rounded-lg overflow-hidden ${props.className}`}>
			<img src={props.bannerUrl} alt="" />

			<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 left-0 bottom-0">
				<strong className="text-white font-bold block">{props.title}</strong>
				<span className="text-zinc-300 text-300 block">{props.adsCount} {props.adsCount == 1 ? 'anúncio' : 'anúncios'}</span>
			</div>
		</a>
	)
}