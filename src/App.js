import "./App.css";
import Login from "./components/login/login";
import Home from "./components/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/deportes" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
