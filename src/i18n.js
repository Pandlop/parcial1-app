import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
	en: {
		translation: {
			"Welcome to React": "Welcome to React and react-i18next",
			"The password needs to be at least 8 characters long":
				"The password needs to be at least 8 characters long",
			Email: "Email",
			Password: "Password",
			"Looks good!": "Looks good!",
			Running: "Running",
			Cycling: "Cycling",
			Swimming: "Swimming",
			"Cycling Session": "Cycling Session",
			"Running Session": "Running Session",
			"Swimming Session": "Swimming Session",
			"Tour around the bay of": "Tour around the bay of",
		},
	},
	es: {
		translation: {
			"Welcome to React": "Bienvenidos a React",
			"The password needs to be at least 8 characters long":
				"La contraseña debe tener 8 o más caracteres",
			Email: "Email",
			Password: "Contraseña",
			"Looks good!": "Se ve bien!",
			Running: "Correr",
			Cycling: "Ciclismo",
			Swimming: "Nadar",
			"Cycling Session": "Sesion de ciclismo",
			"Running Session": "Sesion de correr",
			"Swimming Session": "Sesión de nado",
			"Tour around the bay of": "Recorrido alrededor de la bahía de",
		},
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: "es",
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
