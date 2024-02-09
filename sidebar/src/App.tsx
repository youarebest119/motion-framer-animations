import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./Sidebar"
import styles from "./Sidebar.module.scss";

function App() {
	const [active, setActive] = useState(false);
	const variants = {
		initial: {
			rotate: 0,
			y: 0,
			opacity: 1,
		},
		animate: (item: number) => ({
			rotate: item === 1 ? 45 : item === 3 ? -45 : 0,
			x: item === 2 ? -100 : 0,
			opacity: item === 2 ? 0 : 1,
		})
	}
	return (
		<>
			<button
				className={`${styles.toggle} ${active ? styles.active : ""}`}
				onClick={() => setActive(!active)}
			>
				<AnimatePresence mode={'wait'}>
					{
						!active ?
							<motion.p transition={{ duration: 0.2, }} key={"menu"} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}>Menu</motion.p>
							:
							<motion.p transition={{ duration: 0.2, }} key={"close"} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}>Close</motion.p>
					}
				</AnimatePresence>
				<div>
					{[1, 2, 3].map(item => (<motion.span transition={{ duration: 0.2, }} custom={item} animate={active ? "animate" : ""} initial={"initial"} variants={variants} key={item}></motion.span>))}
				</div>
			</button>
			<Sidebar active={active} setActive={setActive} />
		</>
	)
}

export default App
