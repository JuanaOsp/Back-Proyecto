const express = require("express");
const router = express.Router();
const User = require("../models/User");
const crypto = require("crypto");

router.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching products:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching products" });
  }
});

router.post("/api/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).send("Usuario registrado");
  } catch (error) {
    res.status(500).send("Error en el servidor");
  }
});

router.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send("Usuario o contraseña incorrectos");
    }

    const otp = crypto.randomInt(100000, 999999).toString(); 
    const otpExpires = Date.now() + 1 * 60 * 1000; 

    user.otp = otp;
    user.otpExpires = otpExpires;

    await user.save();

    req.session.userId = user._id;
    res.status(200).json({ message: "OTP generado. Verifica tu OTP", otp });
  } catch (error) {
    res.status(500).send("Error en el servidor");
  }
});

router.post("/api/verify-otp", async (req, res) => {
  try {
    const { otp } = req.body;
    const user = await User.findOne({ otp, otpExpires: { $gt: Date.now() } });

    if (!user) {
      return res.status(401).send("OTP inválido o expirado");
    }
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    res.status(200).send("OTP válido. Acceso permitido.");
  } catch (error) {
    res.status(500).send("Error en el servidor");
  }
});

router.get("/home", (req, res) => {
  if (!req.session.userId) {
    return res.status(401).send("Debes iniciar sesión primero");
  }
  res.status(200).send("Bienvenido a la página de inicio");
});

router.put("/api/users/:id", async (req, res) => {
  try {
    const userP = req.params.id;
    const updatedUserData = {
      username: req.body.username,
      password: req.body.password,
    };
    const updatedUser = await User.findByIdAndUpdate(userP, updatedUserData, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating product:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the product" });
  }
});

module.exports = router;
