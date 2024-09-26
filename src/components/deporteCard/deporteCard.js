import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function DeporteCard({ title, image }) {
	const [dist, setDist] = useState(0);
	const [time, setTime] = useState(0);
	const [loc, setLoc] = useState(0);

	useEffect(() => {
		fetch("https://my.api.mockaroo.com/parcial1deporte.json?key=e80d2b00", {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => {
				setDist(data.dist);
				setTime(data.time);
				setLoc(data.loc);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<p>Recorrido alrededor de la bahia de {loc}</p>
				<div>
					<span>
						{dist} - {time}
					</span>
				</div>
			</Card.Body>
		</Card>
	);
}
export default DeporteCard;
