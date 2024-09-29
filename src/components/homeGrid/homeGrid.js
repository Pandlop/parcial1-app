import { useEffect, useRef, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import DeporteCard from "../deporteCard/deporteCard";
import "./homeGrid.css";
import { useTranslation } from "react-i18next";

function HomeGrid() {
	const [cyclingData, setCyclingData] = useState([]);
	const [runningData, setRunningData] = useState([]);
	const [swimmingData, setSwimmingData] = useState([]);
	const [modalShow, setModalShow] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);

	const { t, i18n } = useTranslation();
	const style = {
		width: "100%",
		height: "100%",
		backgroundSize: "cover",
		backgroundColor: "rgba(0, 0, 0, 0.2)",
		backgroundBlendMode: "multiply",
		color: "white",
		fontWeight: "bold",
	};

	const style_run = {
		...style,
		backgroundImage: `url(
		'https://cdn-5f4f6e14c1ac180394b738c9.closte.com/wp-content/uploads/2018/03/01-1170x635.jpg'
	)`,
	};

	const style_cycle = {
		...style,
		backgroundImage: `url(
		'https://www.trainerroad.com/blog/wp-content/uploads/2021/11/benefits-of-cycling.jpg'
	)`,
	};

	const style_swim = {
		...style,
		backgroundImage: `url(
		'https://www.health.com/thmb/Yv4HuoQyNbHNNxgtOTm63zqxurQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Swimming-080c78802f384a4687df5a3b13d5611e-3719a8e40a3c4c43a63a4d795e47c505.jpg'
	)`,
	};

	function handleclick(card) {
		setSelectedCard(card);
		setModalShow(true);
	}

	useEffect(() => {
		async function handleDetails() {
			fetch("https://my.api.mockaroo.com/parcial1deporte.json?key=e80d2b00", {
				method: "GET",
			})
				.then((response) => response.json())
				.then((data) => {
					return { dist: data.dist, time: data.time, loc: data.loc, style: {} };
				})
				.catch((err) => {
					return { dist: 0, time: 0, loc: "error", style: {} };
				});
		}

		const fetchData = async () => {
			const runDetails = await handleDetails();

			const swimDetails = await handleDetails();

			const cycleDetails = await handleDetails();

			const runCards = [];
			for (let i = 0; i < 10; i++) {
				runCards.push({
					title: t("Running Session"),
					style: style_run,
					...runDetails,
				});
			}
			setRunningData(runCards);

			const cycleCards = [];
			for (let i = 0; i < 10; i++) {
				cycleCards.push({
					title: t("Cycling Session"),
					style: style_cycle,
					...cycleDetails,
				});
			}
			setCyclingData(cycleCards);

			const swimCards = [];
			for (let i = 0; i < 10; i++) {
				swimCards.push({
					title: t("Swimming Session"),
					style: style_swim,
					...swimDetails,
				});
			}
			setSwimmingData(swimCards);
		};

		fetchData();
	}, [t]);

	return (
		<>
			<Row className="grid-container">
				<Col className="deporteGrid">
					<h1>{t("Cycling")}</h1>

					<div className="deporteGrid">
						{cyclingData.map((_, id) => (
							<div onClick={() => handleclick(_)}>
								<DeporteCard {..._} />
							</div>
						))}
					</div>
				</Col>
				<Col className="deporteGrid">
					<h1>{t("Running")}</h1>
					<div className="deporteGrid">
						{runningData.map((_, id) => (
							<div onClick={() => handleclick(_)}>
								<DeporteCard {..._} />
							</div>
						))}
					</div>
				</Col>
				<Col className="deporteGrid">
					<h1>{t("Swimming")}</h1>

					<div className="deporteGrid">
						{swimmingData.map((_, id) => (
							<div onClick={() => handleclick(_)}>
								<DeporteCard {..._} />
							</div>
						))}
					</div>
				</Col>
			</Row>
			<Modal show={modalShow} onHide={() => setModalShow(false)}>
				<Modal.Body>
					<DeporteCard {...selectedCard} />
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="secondary"
						onClick={() => {
							setSelectedCard(null);
							setModalShow(false);
						}}
					>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
export default HomeGrid;
