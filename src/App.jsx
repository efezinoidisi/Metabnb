import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyles from "./styles/Global.styled";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Place from "./pages/Place";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const [isShow, setIsShow] = useState(false);
	return (
		<div className="App">
			<GlobalStyles />
			<Router>
				<Navbar setIsOpen={setIsOpen} setIsShow={setIsShow} isShow={isShow} />
				<Routes>
					<Route
						path="/"
						element={<Home isOpen={isOpen} setIsOpen={setIsOpen} />}
					/>
					<Route
						path="/place-to-stay"
						element={<Place isOpen={isOpen} setIsOpen={setIsOpen} />}
					/>
				</Routes>

				<Footer />
			</Router>
		</div>
	);
}

export default App;
