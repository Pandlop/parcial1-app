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
		}
	};

	return (
		<>
			<div className="inter">
				<h1>Idioma:</h1>
				<Button variant="primary" onClick={() => i18n.changeLanguage("en")}>
					English
				</Button>
				<Button variant="secondary" onClick={() => i18n.changeLanguage("es")}>
					Español
				</Button>
			</div>
			<div className="login-card">
				<Card style={{ width: "18rem" }}>
					<Card.Body>
						<Card.Title>Login</Card.Title>
						<Form noValidate validated={validated} onSubmit={handleSubmit}>
							<Row className="mb-3">
								<Form.Group as={Col} md="12" controlId="validationCustom01">
									<Form.Label>{t("Email")}</Form.Label>

									<Form.Control
										required
										type="text"
										placeholder={email}
										defaultValue=""
									/>
									<Form.Control.Feedback type="invalid">
										{t("Por favor ingresa un correo válido.")}
									</Form.Control.Feedback>
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
									<Form.Control.Feedback type="invalid">
										{t("La contraseña debe tener 8 o más caracteres.")}
									</Form.Control.Feedback>
								</Form.Group>
							</Row>
							<Button type="submit" formAction="#">
								Log in
							</Button>
						</Form>
					</Card.Body>
				</Card>
			</div>
		</>
	);
}
export default Login;
