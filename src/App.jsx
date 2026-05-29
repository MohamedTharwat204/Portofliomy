import { useEffect } from "react";
import Hader from "./commbont/Hader";
import { uesDiark } from "./store";
import Homepedg from "./commbont/Homepage";
import Aboutme from "./commbont/Aboutme";
import 'aos/dist/aos.css';
import AOS from 'aos'
import Skills from "./commbont/Skills";
import Projects from "./commbont/Projects";

const App = () => {
	useEffect(() => {
		AOS.init({
			duration: 1200,
			once: false
		})
	}, [])


const { diark } = uesDiark()

return (


	<div className={`${diark ? 'dark:bg-gray-950  text-white' : 'bg-white text-black'}   relative  ring shadow-xl ring-gray-900/5 w-full min-h-dvh`}>
		<Hader />

		<Homepedg />
		<Aboutme />
		<Skills/>
		<Projects/>


	</div >


);
};

export default App;
