import * as ToastPrimitive from '@radix-ui/react-toast';
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Toast, ToastProps } from "../components/Toast";

interface ToastContextData {
	addToast: (toast: ToastProps) => void;
}

interface ToastProviderProps {
	children: ReactNode;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export function ToastProvider({ children }: ToastProviderProps) {
	const [toasts, setToasts] = useState<ToastProps[]>([]);

	function addToast(toast: ToastProps) {
		setToasts(toasts => [...toasts, toast]);
		console.log(toasts);
	}

	// Removes 1st toast from the list afeter 5 secons (default duration of Radix Toast)
	useEffect(() => {
		if (toasts.length > 0) {
			const timer = setTimeout(() => setToasts(toasts => toasts.slice(1)), 5000);
			return () => clearTimeout(timer);
		}
	}, [toasts]);

	return (
		<ToastContext.Provider value={{ addToast }}>
			<>
				{children}
				<ToastPrimitive.Provider swipeDirection="right" >
					{toasts.map(toast => (
						<Toast
							title={toast.title}
							message={toast.message}
							toastType={toast.toastType}
							key={toast.id}
						/>
					))}
					<ToastPrimitive.Viewport className='fixed z-50 bottom-0 right-0 w-[390px] p-6 flex flex-col gap-2' />
				</ToastPrimitive.Provider>
			</>
		</ToastContext.Provider>
	)
}

export function useToast(): ToastContextData {
	const context = useContext(ToastContext);

	return context;
}