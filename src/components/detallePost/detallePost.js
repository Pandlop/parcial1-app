import { Link, useParams } from "react-router-dom";
import "./detallePost.css";
import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";

function DetallePost() {
	let { object } = useParams();
	let image =
		"https://cdn-5f4f6e14c1ac180394b738c9.closte.com/wp-content/uploads/2018/03/01-1170x635.jpg";

	return (
		<div
			className="modal show"
			style={{ display: "block", position: "initial" }}
		>
			<Modal.Dialog>
				<Modal.Body>
					<img src={image} alt="deporte" width={400} />
				</Modal.Body>

				<Modal.Footer>
					<Link to={"/deportes"}>
						<Button variant="secondary">Close</Button>
					</Link>
				</Modal.Footer>
			</Modal.Dialog>
		</div>
	);
}
export default DetallePost;
