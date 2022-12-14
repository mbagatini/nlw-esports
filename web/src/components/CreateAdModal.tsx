import * as Checkbox from "@radix-ui/react-checkbox";
import * as Dialog from "@radix-ui/react-dialog";
import * as Toggle from "@radix-ui/react-toggle-group";
import { Check, GameController } from 'phosphor-react';
import { useForm } from "react-hook-form";

import { api } from "../api/api";
import { useToast } from "../hooks/useToast";
import { Input } from "./Form/Input";
import { Label } from "./Form/Label";
import { Select } from "./Form/Select";

interface Games {
	id: string;
	title: string;
}

interface CreateAdModalProps {
	games: Games[];
	setOpen(value: boolean): void;
}

type FormInputs = {
	gameId: string;
	name: string;
	yearsPlaying: number;
	discord: string;
	weekDays: string[];
	hourStart: string;
	hourEnd: string;
	useVoiceChannel: boolean;
};

export function CreateAdModal({ games, setOpen }: CreateAdModalProps) {
	const { addToast } = useToast();

	const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<FormInputs>();

	async function handleCreateAd(data: FormInputs) {
		const adData = {
			name: data.name,
			yearsPlaying: Number(data.yearsPlaying),
			discord: data.discord,
			weekDays: data.weekDays.map(Number),
			hourStart: data.hourStart,
			hourEnd: data.hourEnd,
			useVoiceChannel: data.useVoiceChannel === true
		}

		try {
			await api.post(`/games/${data.gameId}/ads`, adData);
			addToast({ toastType: 'message', title: "Publicado!", message: "Anúncio publicado com sucesso" });

			setTimeout(() => {
				setOpen(false)
				reset();
			}, 1500);
		} catch (error) {
			addToast({ toastType: 'error', title: "Ocorreu um problema", message: "Erro ao publicar o anúncio" });
		}
	}

	return (
		<Dialog.Portal>
			<Dialog.Overlay className='bg-black/60 inset-0 fixed overflow-y-auto' />

			<Dialog.Content className=' w-[520px] max-w-xs md:max-w-[520px] max-h-[600px] md:max-h-[800px] overflow-auto bg-[#2a2634] py-8 px-10 rounded-lg shadow-black/25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white fixed'>
				<Dialog.Title className='text-xl md:text-2xl lg:text-3xl font-black'>Publique um anúncio</Dialog.Title>

				<form onSubmit={handleSubmit(handleCreateAd)} className='mt-8 flex flex-col gap-4'>
					<div className='flex flex-col gap-2'>
						<Select
							label="Qual o game?"
							placeholder='Selecione o game que deseja jogar'
							data={games.map(g => { return { key: g.id, value: g.title } })}
							{...register("gameId", { required: "Campo obrigatório" })}
							onValueChange={value => setValue("gameId", value)}
							error={errors.gameId}
						/>
					</div>

					<div className='flex flex-col gap-2'>
						<Input type="text" id="name" label="Seu nome (ou nickname)" placeholder='Como te chamam dentro do game?' {...register("name", { required: "Campo obrigatório" })} error={errors.name} />
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div className='flex flex-col gap-2'>
							<Input type="tel" id="yearsPlaying" label="Joga a quantos anos?" placeholder='Tudo bem ser ZERO' {...register("yearsPlaying", { required: "Campo obrigatório" })} error={errors.yearsPlaying} />
						</div>
						<div className='flex flex-col gap-2'>
							<Input type="text" id="discord" label="Qual seu Discord?" placeholder='Usuario#0000' {...register("discord", { required: "Campo obrigatório" })} error={errors.discord} />
						</div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<div className='flex flex-col gap-2'>
							<Label htmlFor="weekDays">Quando costuma jogar?</Label>

							<Toggle.Root type='multiple' {...register("weekDays", { required: "Campo obrigatório" })} onValueChange={value => setValue("weekDays", value)} className='grid grid-cols-7 md:grid-cols-4 gap-2'>
								<Toggle.Item value="0" className='w-8 h-8 rounded text-xs md:text-sm [&[data-state="on"]]:bg-violet-500 bg-zinc-900'>D</Toggle.Item>
								<Toggle.Item value="1" className='w-8 h-8 rounded text-xs md:text-sm [&[data-state="on"]]:bg-violet-500 bg-zinc-900'>S</Toggle.Item>
								<Toggle.Item value="2" className='w-8 h-8 rounded text-xs md:text-sm [&[data-state="on"]]:bg-violet-500 bg-zinc-900'>T</Toggle.Item>
								<Toggle.Item value="3" className='w-8 h-8 rounded text-xs md:text-sm [&[data-state="on"]]:bg-violet-500 bg-zinc-900'>Q</Toggle.Item>
								<Toggle.Item value="4" className='w-8 h-8 rounded text-xs md:text-sm [&[data-state="on"]]:bg-violet-500 bg-zinc-900'>Q</Toggle.Item>
								<Toggle.Item value="5" className='w-8 h-8 rounded text-xs md:text-sm [&[data-state="on"]]:bg-violet-500 bg-zinc-900'>S</Toggle.Item>
								<Toggle.Item value="6" className='w-8 h-8 rounded text-xs md:text-sm [&[data-state="on"]]:bg-violet-500 bg-zinc-900'>S</Toggle.Item>
							</Toggle.Root>

							{errors.weekDays && <span className="text-xs text-rose-600">{errors.weekDays.message}</span>}
						</div>
						<div className='flex flex-col gap-2 flex-1'>
							<Label htmlFor="hourStart">Qual horário do dia?</Label>
							<div className='grid grid-cols-2 gap-2'>
								<Input type="time" id="hourStart" placeholder='De' {...register("hourStart", { required: "Campo obrigatório" })} error={errors.hourStart} />
								<Input type="time" id="hourEnd" placeholder='Até' {...register("hourEnd", { required: "Campo obrigatório" })} error={errors.hourEnd} />
							</div>
						</div>
					</div>

					<Label className="flex items-center">
						<Checkbox.Root
							{...register("useVoiceChannel")}
							onCheckedChange={value => { setValue("useVoiceChannel", value === true) }}
							className="w-6 h-6 p-1 mr-2 rounded bg-zinc-900"
						>
							<Checkbox.Indicator>
								<Check className="w-4 h-4 text-emerald-400" />
							</Checkbox.Indicator>
						</Checkbox.Root>
						Costumo me conectar ao chat de voz
					</Label>

					<footer className='mt-4 flex justify-center md:justify-end gap-4'>
						<Dialog.Close className='bg-zinc-500 hover:bg-zinc-600 px-5 h-12 rounded-md font-semibold text-sm md:text-base'>Cancelar</Dialog.Close>
						<button type="submit" className='flex items-center gap-3 bg-violet-500 hover:bg-violet-600 px-5 h-12 rounded-md font-semibold text-sm md:text-base'>
							<GameController size={24} />
							Encontrar duo
						</button>
					</footer>
				</form>
			</Dialog.Content>
		</Dialog.Portal >
	)
}