import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function DeporteCard({ title, dist, time, loc, image, style }) {
	const { t, i18n } = useTranslation();

	return (
		<Card style={style} className="deporte">
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<p>
					{t("Tour around the bay of")} {loc}
				</p>
				<div>
					<span>
						{dist}k - {time}:00
					</span>
				</div>
			</Card.Body>
		</Card>
	);
}
export default DeporteCard;
