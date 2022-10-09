import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';


export function CreateAdBanner() {
	return (
		<div className="bg-nlw-gradient rounded-lg self-stretch overflow-hidden mt-8 pt-1">
			<div className="bg-[#2a2634] px-8 py-6 flex flex-col gap-6 justify-between items-start lg:flex-row lg:gap-0 lg:items-center">
				<div>
					<strong className="text-xl md:text-2xl text-white font-black block">Não encontrou seu duo?</strong>
					<span className="text-sm md:text-base block text-zinc-300">Publique um anúncio para encontrar novos players!</span>
				</div>

				<div className="w-full lg:w-auto">
					<Dialog.Trigger className="w-full lg:w-auto justify-center lg:justify-start text-white bg-violet-500 hover:bg-violet-600 rounded py-3 px-4 flex items-center gap-3">
						<MagnifyingGlassPlus size={24} />
						Publicar anúncio
					</Dialog.Trigger>
				</div>
			</div>

		</div>
	)
}