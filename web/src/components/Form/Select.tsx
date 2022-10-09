import * as SelectPrimitive from '@radix-ui/react-select';
import { CaretDown, Check } from 'phosphor-react';
import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import { Label } from './Label';

interface Values {
	key: string;
	value: string;
}

interface SelectProps extends SelectPrimitive.SelectProps {
	label?: string;
	placeholder: string;
	data: Values[];
	error?: FieldError;
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(({ label, data, placeholder, error, ...props }, forwardedRef) => {
	return (
		<>
			{label ?? (
				<Label htmlFor={props.name}>{label}</Label>
			)}

			<SelectPrimitive.Root {...props}>
				<SelectPrimitive.Trigger className={`flex justify-between items-center text-start bg-zinc-900 px-4 py-3 rounded text-xs md:text-sm text-white [&[data-placeholder]]:text-zinc-500 ${error ? "border border-rose-600" : ""}`}>
					<SelectPrimitive.Value placeholder={placeholder} />
					<SelectPrimitive.Icon className="text-zinc-400">
						<CaretDown size={15} />
					</SelectPrimitive.Icon>
				</SelectPrimitive.Trigger>

				<SelectPrimitive.Portal>
					<SelectPrimitive.Content className="overflow-hidden bg-zinc-700 text-white text-xs md:text-sm rounded-lg right-2 top-4 w-full border border-zinc-600">
						<SelectPrimitive.Viewport className="p-2 relative">
							{data.map(item => (
								<SelectPrimitive.Item ref={forwardedRef} key={item.key} value={item.key} className="flex items-center h-8 px-6">
									<SelectPrimitive.ItemText>{item.value}</SelectPrimitive.ItemText>
									<SelectPrimitive.ItemIndicator className="absolute left-0 w-6 px-2">
										<Check className="w-4 h-4 text-emerald-400" />
									</SelectPrimitive.ItemIndicator>
								</SelectPrimitive.Item>
							))}
						</SelectPrimitive.Viewport>
						<SelectPrimitive.ScrollDownButton className="flex items-center justify-center p-2">
							<CaretDown size={15} className="text-white" />
						</SelectPrimitive.ScrollDownButton>
					</SelectPrimitive.Content>
				</SelectPrimitive.Portal>
			</SelectPrimitive.Root>

			{error && <span className="text-xs text-rose-600">{error.message}</span>}
		</>
	)
})