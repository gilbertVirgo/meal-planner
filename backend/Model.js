// I really just made my own mongo-js. Cry face.

const generateID = require("./generateID");
const fs = require("fs").promises;

module.exports = function Model(fileName) {
	const dataPath = `./data/${fileName}`;

	// Optional array of ids
	this.find = async (ids) => {
		const nodes = JSON.parse(await fs.readFile(dataPath));

		if (!ids) return nodes;

		return nodes.filter((n) => ids.includes(n.id));
	};

	this.findOne = async (id) => {
		const nodes = await this.find(),
			node = nodes.find((r) => r.id === id);

		if (!node) throw new Error(`No node with the id '${id}' exists.`);

		return node;
	};

	this.insertOne = async (node) => {
		const nodes = await this.find(),
			patch = nodes.push({
				...node,
				id: generateID(),
			});

		await fs
			.writeFile(dataPath, JSON.stringify(patch), "utf-8")
			.catch((err) => {
				throw new Error(`Could not create new node. ${err}`);
			});
	};

	this.updateOne = async ({ id, ...props }) => {
		const nodes = await this.find(),
			node = await this.findOne(id);

		Object.keys(props).forEach((key) => (node[key] = props[key]));

		const patch = nodes.map((n) => (n.id === id ? node : n));

		// Replace
		await fs
			.writeFile(dataPath, JSON.stringify(patch), "utf-8")
			.catch((err) => {
				throw new Error(`Could not update node. ${err}`);
			});
	};
};
