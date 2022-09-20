interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export function Input(props: InputProps) {
	return (
		<input
			{...props}
			className='bg-zinc-900 px-4 py-3 rounded text-sm placeholder:text-zinc-500'
		/>
	)
}