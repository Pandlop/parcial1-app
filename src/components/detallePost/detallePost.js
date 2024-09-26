import { Link, useParams } from "react-router-dom";
import "./detallePost.css";
import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";

function DetallePost({ object }) {
	const [image, setImage] = useState("");

	// if (type === "running") {
	// 	setImage(
	// 		"https://cdn-5f4f6e14c1ac180394b738c9.closte.com/wp-content/uploads/2018/03/01-1170x635.jpg"
	// 	);
	// } else if (type === "cycling") {
	// 	setImage(
	// 		"https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320"
	// 	);
	// } else {
	// 	setImage(
	// 		"https://www.health.com/thmb/Yv4HuoQyNbHNNxgtOTm63zqxurQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Swimming-080c78802f384a4687df5a3b13d5611e-3719a8e40a3c4c43a63a4d795e47c505.jpg"
	// 	);
	// }
	return (
		<div
			className="modal show"
			style={{ display: "block", position: "initial" }}
		>
			<Modal.Dialog>
				<>{object}</>
				{/* <Modal.Body>
					<img src={image} alt="deporte" />
				</Modal.Body>

				<Modal.Footer>
					<Link to={"/deportes"}>
						<Button variant="secondary">Close</Button>
					</Link>
				</Modal.Footer> */}
			</Modal.Dialog>
		</div>
	);
}
export default DetallePost;
