
import { ToastProvider } from './hooks/useToast';
import { Home } from './pages/Home';
import { createFakeAPI } from './api/mirage';

// Development environment
createFakeAPI();

function App() {
	return (
		<ToastProvider>
			<Home />
		</ToastProvider>
	)
}

export default App
