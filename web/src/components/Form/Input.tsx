import { forwardRef } from "react";
import { Label } from "./Label";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, ...props }, ref) => {
	const inputField = (
		<input
			{...props}
			ref={ref}
			className='bg-zinc-900 px-4 py-3 rounded text-sm placeholder:text-zinc-500'
		/>
	);

	if (label) {
		return (
			<>
				<Label htmlFor={props.name}>{label}</Label>
				{inputField}
			</>
		)
	}

	return inputField;
})