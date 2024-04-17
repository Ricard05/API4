import { Provider, Product } from "../models/models.js";

export const registerProvider = async (req, res) => {
	console.log(req.body);
	const { name, lastname, company, phone, email, idProvider, createdAt } = req.body;

	try {
		const newProvider = new Provider({
			name,
			lastname,
			company,
			phone,
			email,
			idProvider,
			createdAt
		});

		const saveProvider = await newProvider.save();
		res.send(saveProvider);
	} catch (error) {
		res.send(error);
	}
}

export const updateProvider = async (req, res) => {
	const idProvider = req.params.code;
	const { phone, email } = req.body;

	try {
		const existingProvider = await Provider.findOne({ idProvider });

		if (!existingProvider) {
			return res.status(404).send("Provider not found");
		}

		// Actualiza solo el telefono y el correo
		existingProvider.phone = phone;
		existingProvider.email = email;

		const updatedProvider = await existingProvider.save();
		res.send(updatedProvider);
	} catch (error) {
		console.error(error);
		res.status(500).send("Provider could not be updated");
	}
};

export const deleteProvider = async (req, res) => {
	const idProvider = req.params.code;
	console.log(`${idProvider}`);
	try {
		const existingProvider = await Provider.findOne({ idProvider });

		//Comprobe if the provider exist
		if (!existingProvider) {
			return res.status(404).send("Provider not found");
		}

		const products = await Product.find({ idProvider });

		//Comprobe if there are products related to the provider
		if (products.length > 0) {
			console.log(products);
			return res.status(200).send("There are products related to this provider");
		}

		existingProvider.status = false;
		const updatedProvider = await existingProvider.save();
		res.send(updatedProvider);
	} catch (error) {
		res.status(500).send("Provider could not be deleted")
	}
}
