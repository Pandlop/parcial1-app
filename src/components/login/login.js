import { Button, Card, Form, Row, Col } from "react-bootstrap";
import "./login.css";
import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";

function Login() {
	const [validated, setValidated] = useState(false);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [data, setData] = useState({});
	const { t, i18n } = useTranslation();

	const handleSubmit = (event) => {
		event.preventDefault();

		if (event.target[1].value.length < 8) {
			alert(t("La contraseña debe tener 8 o más caracteres"));
			return;
		}

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.stopPropagation();
		} else {
			setEmail(event.target[0].value);
			setPassword(event.target[1].value);
			setValidated(true);
			setValidated(true);
		}
	};

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Title>Login</Card.Title>
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<Row className="mb-3">
						<Form.Group as={Col} md="12" controlId="validationCustom01">
							<Form.Label>{t("Email")}</Form.Label>

							<Form.Control
								required
								type="email"
								placeholder={email}
								defaultValue=""
							/>
						</Form.Group>
					</Row>
					<Row className="mb-3">
						<Form.Group as={Col} md="12" controlId="validationCustom02">
							<Form.Label>{t("Password")}</Form.Label>

							<Form.Control
								required
								type="password"
								placeholder={password}
								defaultValue=""
							/>
						</Form.Group>
					</Row>
					<Button type="submit" formAction="#">
						Log in
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
}
export default Login;
