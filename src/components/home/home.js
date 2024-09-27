import { useEffect, useState } from "react";
import HomeGrid from "../homeGrid/homeGrid";
import UserData from "../userData/userData";
import "./home.css";

function Home() {
	const [user, setUser] = useState({});

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
