import { useEffect, useState } from "react";
import HomeGrid from "../homeGrid/homeGrid";
import UserData from "../userData/userData";
import "./home.css";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Home() {
	const [user, setUser] = useState({});
	const { i18n } = useTranslation();

	useEffect(() => {
		fetch("https://my.api.mockaroo.com/parcial1.json?key=e80d2b00", {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => setUser(data[0]))
			.catch((err) => console.error(err));
	}, []);
	return (
		<>
			<div className="inter">
				<h1>Idioma:</h1>
				<Button variant="primary" onClick={() => i18n.changeLanguage("en")}>
					English
				</Button>
				<Button variant="secondary" onClick={() => i18n.changeLanguage("es")}>
					Español
				</Button>
			</div>
			<HomeGrid />
			<UserData
				// nombre={user.nombre}
				// tiempo_correr={user.tiempo_correr}
				// tiempo_nadar={user.tiempo_nadar}
				// tiempo_cicla={user.tiempo_cicla}
				// imagen_perfil={user.imagen_perfil}
				nombre="Juan Lopez"
				tiempo_correr="2"
				tiempo_nadar="3"
				tiempo_cicla="1"
				imagen_perfil=""
			/>
		</>
	);
}
export default Home;
