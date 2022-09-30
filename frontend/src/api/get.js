const baseURL = "http://localhost:5000";

export default async (route) => {
	const res = await (await fetch(`${baseURL}/${route}`)).json();

	console.log(res);

	return res.data;
};
