import { Product, Provider } from '../models/models.js';

//Products
export const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find();
		console.log(products);
		res.send(products);
	} catch (error) {
		console.error(error);
		res.status(500).send("Error getting products");
	}
};

//Providers

export const getAllProviders = async (req, res) => {
	try {
		const providers = await Provider.find();
		console.log(providers);
		res.send(providers);
	} catch (error) {
		console.error(error);
		res.status(500).send("Error getting providers");
	}
};
