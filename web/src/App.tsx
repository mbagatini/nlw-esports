import './styles/main.css';

import { MagnifyingGlassPlus } from 'phosphor-react';

import logoImg from './assets/logo.svg';

function App() {
	return (
		<div className="max-w-[1344px] mx-auto my-20 flex flex-col items-center">
			<img src={logoImg} alt="Logo NLW eSports" />

			<h1 className="text-6xl text-white font-black mt-20">
				Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.
			</h1>

			<div className="grid grid-cols-6 gap-6 mt-16">
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="game-1.png" alt="" />

					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 left-0 bottom-0">
						<strong className="text-white font-bold block">Leage of Legends</strong>
						<span className="text-zinc-300 text-300 block">4 anúncios</span>
					</div>
				</a>
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="game-2.png" alt="" />

					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 left-0 bottom-0">
						<strong className="text-white font-bold block">Dotta 2</strong>
						<span className="text-zinc-300 text-300 block">4 anúncios</span>
					</div>
				</a>
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="game-3.png" alt="" />

					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 left-0 bottom-0">
						<strong className="text-white font-bold block">CS GO</strong>
						<span className="text-zinc-300 text-300 block">4 anúncios</span>
					</div>
				</a>
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="game-7.png" alt="" />

					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 left-0 bottom-0">
						<strong className="text-white font-bold block">Leage of Legends</strong>
						<span className="text-zinc-300 text-300 block">4 anúncios</span>
					</div>
				</a>
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="game-5.png" alt="" />

					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 left-0 bottom-0">
						<strong className="text-white font-bold block">Leage of Legends</strong>
						<span className="text-zinc-300 text-300 block">4 anúncios</span>
					</div>
				</a>
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="game-6.png" alt="" />

					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 left-0 bottom-0">
						<strong className="text-white font-bold block">Leage of Legends</strong>
						<span className="text-zinc-300 text-300 block">4 anúncios</span>
					</div>
				</a>
			</div>

			<div className="bg-nlw-gradient rounded-lg self-stretch overflow-hidden mt-8 pt-1">
				<div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
					<div>
						<strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
						<span className="block text-zinc-300">Publique um anúncio para encontrar novos players!</span>
					</div>

					<div>
						<button className="text-white bg-violet-500 hover:bg-violet-600 rounded py-3 px-4 flex items-center gap-3">
							<MagnifyingGlassPlus size={24} />
							Publicar anúncio
						</button>
					</div>
				</div>

			</div>
		</div>
	)
}

export default App
