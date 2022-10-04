interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	children: React.ReactNode
}

export function Label({ className, ...props }: LabelProps) {
	return (
		<label {...props} className={`font-semibold ${className}`}>{props.children}</label>
	)
}