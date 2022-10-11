import * as Dialog from '@radix-ui/react-dialog';
import { useKeenSlider } from 'keen-slider/react';
import { useEffect, useState } from 'react';

import { api } from '../api/api';
import { CreateAdBanner } from '../components/CreateAdBanner';
import { CreateAdModal } from '../components/CreateAdModal';
import { GameBanner } from '../components/GameBanner';

import '../styles/main.css';
import 'keen-slider/keen-slider.min.css';

import logoImg from '../assets/logo.svg';

interface Game {
	id: string;
	title: string;
	banner: string;
	_count: {
		ads: number;
	}
}

export function Home() {
	const [games, setGames] = useState<Game[]>([]);
	const [open, setOpen] = useState(false);

	const [sliderRef, slider] = useKeenSlider(
		{
			slides: {
				perView: 2,
				spacing: 16
			},
			breakpoints: {
				'(min-width: 768px)': {
					slides: {
						perView: 3,
						spacing: 16
					},
				},
				'(min-width: 1024px)': {
					slides: {
						perView: 6,
						spacing: 16
					},
				},
			},
		}
	)

	useEffect(() => {
		api.get('/games')
			.then((response) => {
				setGames(response.data);

				// As the images were not ready, keen-slider needs to refresh the carousel
				setTimeout(() => slider.current?.update(), 100);
			});
	}, [])

	return (
		<div className="max-w-xs md:max-w-xl lg:max-w-4xl xl:max-w-[1180px] mx-auto my-20 flex flex-col items-center">
			<img src={logoImg} alt="Logo NLW eSports" />

			<h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-black mt-20">
				Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.
			</h1>

			<div className="keen-slider mt-16" ref={sliderRef}>
				{games.map((game, idx) => (
					<GameBanner
						className={`keen-slider__slide number-slide${idx}`}
						key={game.id}
						bannerUrl={game.banner}
						title={game.title}
						adsCount={game._count.ads}
					/>
				))}
			</div>

			<Dialog.Root open={open} onOpenChange={setOpen}>
				<CreateAdBanner />
				<CreateAdModal games={games} setOpen={setOpen} />
			</Dialog.Root >
		</div >
	)
}
