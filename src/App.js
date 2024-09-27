import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login/login";
import Home from "./components/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetallePost from "./components/detallePost/detallePost";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/deportes" element={<Home />} />
					<Route path="/deportes/detail" element={<DetallePost />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
