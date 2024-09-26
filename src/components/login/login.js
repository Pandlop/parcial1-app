import { Button, Card, Form, Row, Col } from "react-bootstrap";
import "./login.css";
import { useState } from "react";

function Login() {
	const [validated, setValidated] = useState(false);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [data, setData] = useState({});

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		} else if (password.length) {
			alert("La con");
		} else {
			const userEmail = event.target[0].value;
			const userPassword = event.target[1].value;
			alert(`Email: ${email},\nPassword: ${password}`);
			setData({
				Email: userEmail,
				Password: password,
			});
		}
		setEmail(event.target[0].value);
		setPassword(event.target[1].value);
		setValidated(true);
	};

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Title>Login</Card.Title>
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<Row className="mb-3">
						<Form.Group as={Col} md="12" controlId="validationCustom01">
							<Form.Label>Email</Form.Label>
							<Form.Control
								required
								type="email"
								placeholder={email}
								defaultValue=""
							/>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</Form.Group>
					</Row>
					<Row className="mb-3">
						<Form.Group as={Col} md="12" controlId="validationCustom02">
							<Form.Label>Password</Form.Label>
							<Form.Control
								required
								type="password"
								placeholder={password}
								defaultValue=""
							/>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
