import { Router } from "express";
import query from "../db/querys/query.js";
import db from "../db/connection/db.js";

const connectionInfo = {
  host: "localhost",
  user: "root",
  password: "",
  database: "nodeapi",
};
const dbInstancia = new db(connectionInfo);
const queryInstancia = new query(dbInstancia);

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hellow world from Express API",
  });
});

router.get("/users", async (req, res) => {
  try {
    const users = await queryInstancia.getAllUsers();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await queryInstancia.getUserById(id);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/users", async (req, res) => {
  const user = req.body;
  try {
    const result = await queryInstancia.createUser(user);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  try {
    const result = await queryInstancia.updateUser(id, user);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await queryInstancia.deleteUser(id);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
