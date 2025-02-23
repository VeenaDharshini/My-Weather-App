import axios from "axios";

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.response.use(
	(response) => response,
	(error) => {
		console.error("API Error:", error);
		return Promise.reject(error);
	}
);

export default api;
