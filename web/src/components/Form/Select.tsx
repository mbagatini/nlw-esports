import * as SelectPrimitive from '@radix-ui/react-select';
import { CaretDown, Check } from 'phosphor-react';

interface Values {
	key: string;
	value: string;
}

interface SelectProps extends SelectPrimitive.SelectProps {
	placeholder: string;
	data: Values[]
}

export function Select({ data, placeholder, ...props }: SelectProps) {
	return (
		<SelectPrimitive.Root {...props}>
			<SelectPrimitive.Trigger className='flex justify-between items-center bg-zinc-900 px-4 py-3 rounded text-sm text-white [&[data-placeholder]]:text-zinc-500'>
				<SelectPrimitive.Value placeholder={placeholder} />
				<SelectPrimitive.Icon className="text-zinc-400">
					<CaretDown size={15} />
				</SelectPrimitive.Icon>
			</SelectPrimitive.Trigger>

			<SelectPrimitive.Portal>
				<SelectPrimitive.Content className="overflow-hidden bg-zinc-700 text-white text-sm rounded-lg right-2 top-4 w-full border border-zinc-600">
					<SelectPrimitive.Viewport className="p-2 relative">
						{data.map(item => (
							<SelectPrimitive.Item key={item.key} value={item.key} className="flex items-center h-8 px-6">
								<SelectPrimitive.ItemText>{item.value}</SelectPrimitive.ItemText>
								<SelectPrimitive.ItemIndicator className="absolute left-0 w-6 px-2">
									<Check className="w-4 h-4 text-emerald-400" />
								</SelectPrimitive.ItemIndicator>
							</SelectPrimitive.Item>
						))}
					</SelectPrimitive.Viewport>
					<SelectPrimitive.ScrollDownButton />
				</SelectPrimitive.Content>
			</SelectPrimitive.Portal>
		</SelectPrimitive.Root>
	)
}