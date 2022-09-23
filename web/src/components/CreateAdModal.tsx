import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToastPrimitive from '@radix-ui/react-toast';
import * as Toggle from "@radix-ui/react-toggle-group";
import { Check, GameController } from 'phosphor-react';

import { Input } from "./Form/Input";
import { Label } from "./Form/Label";
import { Select } from "./Form/Select";
import { api } from "../api/api";
import { Toast } from "./Toast";

interface Games {
	id: string;
	title: string;
}

interface CreateAdModalProps {
	games: Games[];
}

export function CreateAdModal({ games }: CreateAdModalProps) {
	const [weekDays, setWeekDays] = useState<string[]>([]);
	const [useVoiceChannel, setUseVoiceChannel] = useState(false);

	const [alert, setAlert] = useState<ToasData>({ title: "", message: "", isOpen: false });

	async function handleCreateAd(event: React.FormEvent) {
		event.preventDefault();

		const formData = new FormData(event.target as HTMLFormElement);
		const data = Object.fromEntries(formData);

		// Validação dos dados

		try {
			await api.post(`/games/${data.gameId}/ads`, {
				name: data.name,
				yearsPlaying: Number(data.yearsPlaying),
				discord: data.discord,
				weekDays: weekDays.map(Number),
				hourStart: data.hourStart,
				hourEnd: data.hourEnd,
				useVoiceChannel: useVoiceChannel
			});

			alert("Anúncio criado com sucesso");
		} catch (error) {
			alert("Erro ao criar o anúncio");
		}
	}

	return (
		<>
		<Dialog.Portal>
			<Dialog.Overlay className='bg-black/60 inset-0 fixed' />

			<Dialog.Content className='bg-[#2a2634] py-8 px-10 rounded-lg w-[480px] shadow-black/25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white fixed'>
				<Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>

				<form onSubmit={handleCreateAd} className='mt-8 flex flex-col gap-4'>
					<div className='flex flex-col gap-2'>
						<Label htmlFor="game">Qual o game?</Label>
						<Select
							name="gameId"
							placeholder='Selecione o game que deseja jogar'
							data={games.map(g => { return { key: g.id, value: g.title } })}
						/>
					</div>

					<div className='flex flex-col gap-2'>
						<Label htmlFor="name">Seu nome (ou nickname)</Label>
						<Input type="text" name="name" id="name" placeholder='Como te chamam dentro do game?' />
					</div>

					<div className='grid grid-cols-2 gap-6'>
						<div className='flex flex-col gap-2'>
							<Label htmlFor="yearsPlaying">Joga a quantos anos?</Label>
							<Input type="number" name="yearsPlaying" id="yearsPlaying" placeholder='Tudo bem ser ZERO' />
						</div>
						<div className='flex flex-col gap-2'>
							<Label htmlFor="discord">Qual seu Discord?</Label>
							<Input type="text" name="discord" id="discord" placeholder='Usuario#0000' />
						</div>
					</div>

					<div className='flex gap-6'>
						<div className='flex flex-col gap-2'>
							<Label htmlFor="weekDays">Quando costuma jogar?</Label>

							<Toggle.Root type='multiple' onValueChange={setWeekDays} className='grid grid-cols-4 gap-2'>
									<Toggle.Item value="0" className='w-8 h-8 rounded [&[data-state="on"]]:bg-violet-500 bg-zinc-900'>D</Toggle.Item>
									<Toggle.Item value="1" className='w-8 h-8 rounded [&[data-state="on"]]:bg-violet-500 bg-zinc-900'>S</Toggle.Item>
									<Toggle.Item value="2" className='w-8 h-8 rounded [&[data-state="on"]]:bg-violet-500 bg-zinc-900'>T</Toggle.Item>
									<Toggle.Item value="3" className='w-8 h-8 rounded [&[data-state="on"]]:bg-violet-500 bg-zinc-900'>Q</Toggle.Item>
									<Toggle.Item value="4" className='w-8 h-8 rounded [&[data-state="on"]]:bg-violet-500 bg-zinc-900'>Q</Toggle.Item>
									<Toggle.Item value="5" className='w-8 h-8 rounded [&[data-state="on"]]:bg-violet-500 bg-zinc-900'>S</Toggle.Item>
									<Toggle.Item value="6" className='w-8 h-8 rounded [&[data-state="on"]]:bg-violet-500 bg-zinc-900'>S</Toggle.Item>
							</Toggle.Root>
						</div>
						<div className='flex flex-col gap-2 flex-1'>
							<Label htmlFor="hourStart">Qual horário do dia?</Label>
							<div className='grid grid-cols-2 gap-2'>
								<Input type="time" name="hourStart" id="hourStart" placeholder='De' />
								<Input type="time" name="hourEnd" id="hourEnd" placeholder='Até' />
							</div>
						</div>
					</div>

					<label className='mt-2 flex gap-2 text-sm'>
						<Checkbox.Root
							checked={useVoiceChannel}
							onCheckedChange={(checked) => { setUseVoiceChannel(checked === true) }}
							className="w-6 h-6 p-1 rounded bg-zinc-900"
						>
							<Checkbox.Indicator>
								<Check className="w-4 h-4 text-emerald-400" />
							</Checkbox.Indicator>
						</Checkbox.Root>
						Costumo me conenctar ao chat de voz
					</label>

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


			<ToastPrimitive.Provider swipeDirection="right">
				<Toast
					title={alert.title}
					message={alert.message}
					open={alert.isOpen}
					onOpenChange={() => setAlert({ ...alert, isOpen: !alert.isOpen })}
				/>
				<ToastPrimitive.Viewport className='fixed z-50 bottom-0 right-0 w-[390px] p-6 flex flex-col gap-2' />
			</ToastPrimitive.Provider>
		</>
	)
}