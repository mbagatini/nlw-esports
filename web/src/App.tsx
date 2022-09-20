import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';

import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { Input } from './components/Form/Input';

import './styles/main.css';

import logoImg from './assets/logo.svg';
import { Label } from './components/Form/Label';

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

				<Dialog.Portal>
					<Dialog.Overlay className='bg-black/60 inset-0 fixed' />

					<Dialog.Content className='bg-[#2a2634] py-8 px-10 rounded-lg w-[480px] shadow-black/25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white fixed'>
						<Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>

						<form action="" className='mt-8 flex flex-col gap-4'>
							<div className='flex flex-col gap-2'>
								<Label htmlFor="game">Qual o game?</Label>
								<Input type="text" id="game" placeholder='Selecione o game que deseja jogar' />
							</div>
							<div className='flex flex-col gap-2'>
								<Label htmlFor="name">Seu nome (ou nickname)</Label>
								<Input type="text" id="name" placeholder='Como te chamam dentro do game?' />
							</div>

							<div className='grid grid-cols-2 gap-6'>
								<div className='flex flex-col gap-2'>
									<Label htmlFor="yearsPlaying">Joga a quantos anos?</Label>
									<Input type="number" id="yearsPlaying" placeholder='Tudo bem ser ZERO' />
								</div>
								<div className='flex flex-col gap-2'>
									<Label htmlFor="discord">Qual seu Discord?</Label>
									<Input type="text" id="discord" placeholder='Usuario#0000' />
								</div>
							</div>

							<div className='flex gap-6'>
								<div className='flex flex-col gap-2'>
									<Label htmlFor="weekDays">Quando costuma jogar?</Label>

									<div className='grid grid-cols-4 gap-2'>
										<button type="button" className='w-8 h-8 rounded bg-zinc-900'>D</button>
										<button type="button" className='w-8 h-8 rounded bg-zinc-900'>S</button>
										<button type="button" className='w-8 h-8 rounded bg-zinc-900'>T</button>
										<button type="button" className='w-8 h-8 rounded bg-zinc-900'>Q</button>
										<button type="button" className='w-8 h-8 rounded bg-zinc-900'>Q</button>
										<button type="button" className='w-8 h-8 rounded bg-zinc-900'>S</button>
										<button type="button" className='w-8 h-8 rounded bg-zinc-900'>S</button>
									</div>
								</div>
								<div className='flex flex-col gap-2 flex-1'>
									<Label htmlFor="hourStart">Qual horário do dia?</Label>
									<div className='grid grid-cols-2 gap-2'>
										<Input type="time" id="hourStart" placeholder='De' />
										<Input type="time" id="hourEnd" placeholder='Até' />
									</div>
								</div>
							</div>

							<div className='mt-2 flex gap-2 text-sm'>
								<Input type="checkbox" id="voiceChannel" />
								Costumo me conenctar ao chat de voz
							</div>

							<footer className='mt-4 flex justify-end gap-4'>
								<Dialog.Close className='bg-zinc-500 hover:bg-zinc-600 px-5 h-12 rounded-md font-semibold'>Cancelar</Dialog.Close>
								<button type="submit" className='flex items-center gap-3 bg-violet-500 hover:bg-violet-600 px-5 h-12 rounded-md font-semibold'>
									<GameController size={24} />
									Encontrar duo
								</button>
							</footer>
						</form>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root >
		</div >
	)
}

export default App
