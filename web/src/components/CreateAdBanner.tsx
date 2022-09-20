import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';


export function CreateAdBanner() {
	return (
		<div className="bg-nlw-gradient rounded-lg self-stretch overflow-hidden mt-8 pt-1">
			<div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
				<div>
					<strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
					<span className="block text-zinc-300">Publique um anúncio para encontrar novos players!</span>
				</div>

				<div>
					<Dialog.Trigger className="text-white bg-violet-500 hover:bg-violet-600 rounded py-3 px-4 flex items-center gap-3">
						<MagnifyingGlassPlus size={24} />
						Publicar anúncio
					</Dialog.Trigger>
				</div>
			</div>

		</div>
	)
}