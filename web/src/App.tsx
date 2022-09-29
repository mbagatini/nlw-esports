
import { ToastProvider } from './hooks/useToast';
import { Home } from './pages/Home';

function App() {
	return (
		<ToastProvider>
			<Home />
		</ToastProvider>
	)
}

export default App
