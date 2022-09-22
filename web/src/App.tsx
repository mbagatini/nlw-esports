import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

import './styles/main.css';

import logoImg from './assets/logo.svg';
import { CreateAdModal } from './components/CreateAdModal';

interface Game {
	id: string;
	title: string;
	banner: string;
	_count: {
		ads: number;
	}
}

function App() {
	const [games, setGames] = useState<Game[]>([]);

	useEffect(() => {
		fetch('http://localhost:3333/games')
			.then((response) => response.json())
			.then((games) => {
				setGames(games);
			});
	})

	return (
		<div className="max-w-[1344px] mx-auto my-20 flex flex-col items-center">
			<img src={logoImg} alt="Logo NLW eSports" />

			<h1 className="text-6xl text-white font-black mt-20">
				Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.
			</h1>

			<div className="grid grid-cols-6 gap-6 mt-16">
				{games.map((game) => (
					<GameBanner
						key={game.id}
						bannerUrl={game.banner}
						title={game.title}
						adsCount={game._count.ads}
					/>
				))}
			</div>

			<Dialog.Root>
				<CreateAdBanner />
				<CreateAdModal />
			</Dialog.Root >
		</div >
	)
}

export default App
