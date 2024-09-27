import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import DeporteCard from "../deporteCard/deporteCard";
import "./homeGrid.css";
import { Link } from "react-router-dom";

function HomeGrid() {
	const [cyclingData, setCyclingData] = useState([]);
	const [runningData, setRunningData] = useState([]);
	const [swimmingData, setSwimmingData] = useState([]);
	const [run_values, setRunValues] = useState({ dist: 0, time: 0, loc: 0 });
	const [swim_values, setSwimValues] = useState({ dist: 0, time: 0, loc: 0 });
	const [cycle_values, setCycleValues] = useState({ dist: 0, time: 0, loc: 0 });

	useEffect(() => {
		async function handleDetails() {
			fetch("https://my.api.mockaroo.com/parcial1deporte.json?key=e80d2b00", {
				method: "GET",
			})
				.then((response) => response.json())
				.then((data) => {
					return { dist: data.dist, time: data.time, loc: data.loc };
				})
				.catch((err) => console.error(err));
		}

		setCyclingData([]);
		setRunningData([]);
		setSwimmingData([]);

		const { dist_run, time_run, loc_run } = handleDetails();
		setRunValues({ dist: dist_run, time: time_run, loc: loc_run });

		const { dist_swim, time_swim, loc_swim } = handleDetails();
		setSwimValues({ dist: dist_swim, time: time_swim, loc: loc_swim });

		const { dist_cycle, time_cycle, loc_cycle } = handleDetails();
		setCycleValues({ dist: dist_cycle, time: time_cycle, loc: loc_cycle });

		for (let i = 0; i < 10; i++) {
			setCyclingData((cd) => {
				cd.push(
					<DeporteCard
						key={i}
						dist={cycle_values.dist}
						time={cycle_values.time}
						loc={cycle_values.loc}
						image="https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320"
					/>
				);
				return [...cd];
			});
			setRunningData((cd) => {
				cd.push(
					<DeporteCard
						key={i}
						dist={run_values.dist}
						time={run_values.time}
						loc={run_values.loc}
						image="https://cdn-5f4f6e14c1ac180394b738c9.closte.com/wp-content/uploads/2018/03/01-1170x635.jpg"
					/>
				);
				return [...cd];
			});
			setSwimmingData((cd) => {
				cd.push(
					<DeporteCard
						key={i}
						dist={swim_values.dist}
						time={swim_values.time}
						loc={swim_values.loc}
						image="https://www.health.com/thmb/Yv4HuoQyNbHNNxgtOTm63zqxurQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Swimming-080c78802f384a4687df5a3b13d5611e-3719a8e40a3c4c43a63a4d795e47c505.jpg"
					/>
				);
				return [...cd];
			});
		}
	}, []);

	return (
		<Row>
			<Col>
				<h1>Cycling</h1>

				<div className="deporteGrid">
					{cyclingData.map((_, id) => (
						<Link to={`/deportes/:${_}`}>{_}</Link>
					))}
				</div>
			</Col>
			<Col className="deporteGrid">
				<h1>Running</h1>
				<div className="deporteGrid">
					{runningData.map((_, id) => (
						<Link to={`/deportes/:${_}}`}>{_}</Link>
					))}
				</div>
			</Col>
			<Col className="deporteGrid">
				<h1>Swimming</h1>

				<div className="deporteGrid">
					{swimmingData.map((_, id) => (
						<Link to={`/deportes:${_}`}>{_}</Link>
					))}
				</div>
			</Col>
		</Row>
	);
}
export default HomeGrid;
