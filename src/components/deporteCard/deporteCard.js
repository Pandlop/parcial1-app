import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function DeporteCard({ title, image }) {
	const [dist, setDist] = useState(0);
	const [time, setTime] = useState(0);
	const [loc, setLoc] = useState(0);

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
