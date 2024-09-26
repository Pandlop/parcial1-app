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
			{/* <UserData
				nombre={user.nombre}
				tiempo_correr={user.tiempo_correr}
				tiempo_nadar={user.tiempo_nadar}
				tiempo_cicla={user.tiempo_cicla}
				imagen_perfil={user.imagen_perfil}
			/> */}
		</>
	);
}
export default Home;
