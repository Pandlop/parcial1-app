import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import DeporteCard from "../deporteCard/deporteCard";

function HomeGrid() {
	const [cyclingData, setCyclingData] = useState([]);
	const [runningData, setRunningData] = useState([]);
	const [swimmingData, setSwimmingData] = useState([]);

	useEffect(() => {
		for (let i = 0; i < 10; i++) {
			setCyclingData((cd) => {
				cd.push(
					<DeporteCard
						key={i}
						image="https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320"
					/>
				);
				return cd;
			});
			setRunningData((cd) => {
				cd.push(
					<DeporteCard
						key={i}
						image="https://cdn-5f4f6e14c1ac180394b738c9.closte.com/wp-content/uploads/2018/03/01-1170x635.jpg"
					/>
				);
				return cd;
			});
			setSwimmingData((cd) => {
				cd.push(
					<DeporteCard
						key={i}
						image="https://www.health.com/thmb/Yv4HuoQyNbHNNxgtOTm63zqxurQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Swimming-080c78802f384a4687df5a3b13d5611e-3719a8e40a3c4c43a63a4d795e47c505.jpg"
					/>
				);
				return cd;
			});
		}
	}, []);

	return (
		<Row>
			<Col>
				<h1>Cycling</h1>
				{cyclingData.map((_, id) => ({ _ }))}
			</Col>
			<Col>
				<h1>Running</h1>
				{runningData.map((_, id) => (
					<>{_}</>
				))}
			</Col>
			<Col>
				<h1>Swimming</h1>
				{swimmingData.map((_, id) => (
					<>{_}</>
				))}
			</Col>
		</Row>
	);
}
export default HomeGrid;
