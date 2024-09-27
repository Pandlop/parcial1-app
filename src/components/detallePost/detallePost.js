import { Link, useLocation } from "react-router-dom";
import "./detallePost.css";
import { Button, Modal } from "react-bootstrap";
import DeporteCard from "../deporteCard/deporteCard";
import { useTranslation } from "react-i18next";

function DetallePost({ style }) {
	const location = useLocation();
	const card = location.state?._;
	const { t, i18n } = useTranslation();

	return (
		<div
			style={{ display: "block", position: "initial" }}
			className="modal show"
		>
			<Modal.Dialog>
				<Modal.Body className="modal-card" style={{ height: "300px" }}>
					<DeporteCard style={style} {...card} />
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
