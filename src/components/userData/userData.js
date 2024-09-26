import "./userData.css";

function UserData({
	nombre,
	tiempo_correr,
	tiempo_nadar,
	tiempo_cicla,
	imagen_perfil,
}) {
	return (
		<div className="user-info">
			<img src={imagen_perfil} alt="user pic" />
			<h2>{nombre}</h2>
			<div className="tiempos">
				<span>{tiempo_correr}:00</span>
				<span>{tiempo_nadar}:00</span>
				<span>{tiempo_cicla}:00</span>
			</div>
		</div>
	);
}
export default UserData;
