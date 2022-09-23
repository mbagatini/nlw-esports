import * as ToastPrimitive from '@radix-ui/react-toast';
import { X } from 'phosphor-react';

export interface ToastProps extends ToastPrimitive.ToastProps {
	toastType?: 'error' | 'message';
	title: string;
	message: string;
}

export function Toast({ toastType = 'message', ...props }: ToastProps) {
	return (
		<ToastPrimitive.Root {...props} className='bg-[#2a2634] rounded-lg p-4 text-white border border-zinc-700/30 [&[data-state="open"]]:animate-slide-in [&[data-swipe="end"]]:animate-swipe-out [&[data-state="closed"]]:animate-hide [&[data-swipe="cancel"]]:animate-hide'>
			<div className='flex justify-between items-center'>
				<ToastPrimitive.Title className={`font-bold ${toastType === 'error' ? 'text-rose-500' : 'text-emerald-400'}`}>
					{props.title}
				</ToastPrimitive.Title>
				<ToastPrimitive.Close aria-label="Close">
					<X size={24} className='text-violet-500' />
				</ToastPrimitive.Close>
			</div>
			<ToastPrimitive.Description asChild>
				<span className='text-sm'>{props.message}</span>
			</ToastPrimitive.Description>
			<ToastPrimitive.Close />
		</ToastPrimitive.Root>
	)
}