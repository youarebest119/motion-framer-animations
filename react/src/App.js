import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import Application from './Application';
import Cursor from './components/common/Cursor/Cursor';
function App() {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf);
	}, [])
	return (
		<>
			<Cursor />
			<Application />
		</>
	);
}

export default App;
