import Lenis from '@studio-freight/lenis';
import Application from './Application';
import { useEffect } from 'react';
function App() {
	useEffect(() => {
		const lenis = new Lenis()
		function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf);
	}, [])
	return (
		<>
			<Application />
		</>
	);
}

export default App;
