import jwt from 'jsonwebtoken';
import { User } from "../models/models.js";
import bcryptjs from "bcryptjs";

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar el usuario en la base de datos
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Verificar la contraseña
    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid data" });
    }

    // Generar el token JWT
    jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone
      },
      "utd123",
      {
        expiresIn: "1d",
      },
      (error, token) => {
        if (error) {
          console.log(error);
          res.status(500).json({ error: "Error with token" });
        } else {
          res.json({ token });
        }
      }
    );

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const register = async (req, res) => {
  console.log(req.body);
  const { username, email, password, phone, firstName, lastName, gender } =
    req.body;

  try {
    console.log("Hola");
    const passwordHash = await bcryptjs.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: passwordHash,
      phone,
      firstName,
      lastName,
      gender,
    });

    const saveUser = await newUser.save();
    jwt.sign(
      {
        id: saveUser.username,
        phone: saveUser.phone,
        email: saveUser.email,
      },
      "utd123",
      {
        expiresIn: "1d",
      },
      (error, token) => {
        if (error) {
          console.log(error);
          res.status(500).json({ error: "Error with token" });
        } else {
          res.json({ token });
        }
      }
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
