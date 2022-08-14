import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Section1 from "./Section1";
import Section2 from "./Section2";

function App() {
	return (
		<>
			<header>
				<NavBar />
			</header>
			<main>
				<div style={{ height: "64px", width: "100%" }}></div>
				<Hero />
				<Section1 />
				<Section2 />
			</main>
			<Footer />
		</>
	);
}

export default App;
