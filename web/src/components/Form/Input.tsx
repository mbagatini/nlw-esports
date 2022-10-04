import { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { Label } from "./Label";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, ...props }, ref) => {
	return (
		<div className="flex flex-col gap-2">
			{label && (
				<Label htmlFor={props.name}>{label}</Label>
			)}

			<input
				{...props}
				ref={ref}
				className={`bg-zinc-900 px-4 py-3 rounded text-sm placeholder:text-zinc-500 ${error ? "border border-rose-600" : ""}`}
			/>

			{error && <span className="text-xs text-rose-600">{error.message}</span>}
		</div>
	);
})