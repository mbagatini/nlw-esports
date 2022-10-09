interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	children: React.ReactNode
}

export function Label({ className, ...props }: LabelProps) {
	return (
		<label {...props} className={`text-sm lg:text-base font-semibold ${className}`}>{props.children}</label>
	)
}