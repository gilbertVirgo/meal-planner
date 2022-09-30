const baseURL = "http://localhost:5000";

export default async (route, body) => {
	const { data, success } = await (
		await fetch(`${baseURL}/${route}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		})
	).json();

	return data;
};
