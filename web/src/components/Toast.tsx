import * as ToastPrimitive from '@radix-ui/react-toast';
import { X } from 'phosphor-react';

interface ToastProps extends ToastPrimitive.ToastProps {
	title: string;
	message: string;
}

export function Toast(props: ToastProps) {
	return (
		<ToastPrimitive.Root {...props} className='bg-[#2a2634] rounded-lg p-4 text-white border border-zinc-700/30'>
			<div className='flex justify-between items-center'>
				<ToastPrimitive.Title className='font-black text-sm'>
					{props.title}
				</ToastPrimitive.Title>
				<ToastPrimitive.Close aria-label="Close">
					<X size={24} className='text-violet-500' />
				</ToastPrimitive.Close>
			</div>
			<ToastPrimitive.Description asChild>
				<span>{props.message}</span>
			</ToastPrimitive.Description>
			<ToastPrimitive.Close />
		</ToastPrimitive.Root>
	)
}