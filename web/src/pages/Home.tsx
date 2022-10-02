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

	const [sliderRef] = useKeenSlider(
		{
			slides: {
				perView: 6,
				spacing: 24
			},
			breakpoints: {
				'(max-width: 768px)': {
					slides: {
						perView: 3,
						spacing: 24
					},
				},
			},
		}
	)

	useEffect(() => {
		api.get('/games')
			.then((response) => {
				setGames(response.data);
			});
	}, [])

	return (
		<div className="max-w-[1344px] mx-auto my-20 flex flex-col items-center">
			<img src={logoImg} alt="Logo NLW eSports" />

			<h1 className="text-6xl text-white font-black mt-20">
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

			<Dialog.Root>
				<CreateAdBanner />
				<CreateAdModal games={games} />
			</Dialog.Root >
		</div >
	)
}
