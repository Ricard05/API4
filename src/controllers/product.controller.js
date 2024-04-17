import { Product, Provider } from "../models/models.js";

export const registerProduct = async (req, res) => {
	const { code, name, description, createdAt, status, idProvider } = req.body;

	try {
		const providerExisted = await Provider.findOne({ idProvider });
		console.log(providerExisted);
		if (!providerExisted) {
			return res.status(404).json({ error: "Provider not found" });
		}

		const newProduct = new Product({
			code,
			name,
			description,
			createdAt,
			status,
			idProvider
		});

		const saveProduct = await newProduct.save();
		res.send(saveProduct);
	} catch (error) {
		res.send(error);
	}
};

export const updateProduct = async (req, res) => {
	const { code } = req.params;
	const { name, description } = req.body;

	try {
		const existingProduct = await Product.findOne({ code });

		if (!existingProduct) {
			return res.status(404).send("Product not found");
		}

		console.log(existingProduct);
		// Actualiza solo el nombre y la descripción
		existingProduct.name = name;
		existingProduct.description = description;
		console.log(existingProduct.name);

		const updatedProduct = await existingProduct.save();

		res.send(updatedProduct);
	} catch (error) {
		console.error(error);
		res.status(500).send("Product could not be updated");
	}
};

export const deleteProduct = async (req, res) => {
	try {
		const { code } = req.params;

		const existingProduct = await Product.findOne({ code });

		if (!existingProduct) {
			return res.status(404).send("Product not found");
		}

		existingProduct.status = false;
		const updatedProduct = await existingProduct.save();
		res.send(updatedProduct);
	} catch (error) {
		res.status(500).send("Product could not be deleted")
	}
}