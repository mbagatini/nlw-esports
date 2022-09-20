interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	children: React.ReactNode
}

export function Label(props: LabelProps) {
	return (
		<label {...props} className='font-semibold'>{props.children}</label>
	)
}