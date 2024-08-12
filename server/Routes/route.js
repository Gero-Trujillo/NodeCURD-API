import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send({ message: "I Love Dina :)" });
});

router.get("/home/:name", (req, res) => {
  let name = req.params.name;
  res.send(`<h1>Welcome to Home ${name}</h1>`);
});

router.get("/products/name", (req, res) => {
  let id = req.query.id;
  res.send(`Product id: ${id}`);
});

router.post("/products", (req, res) => {
  const { name, price } = req.body;
  res.send(`Product name: ${name}, Product price: ${price}`);
});

export default router;
