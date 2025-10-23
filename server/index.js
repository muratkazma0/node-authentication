const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const EmployeeModel = require("./models/Employee");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error: ", err));

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await EmployeeModel.findOne({ email: email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        res.json("Login successful!");
      } else {
        res.json("Incorrect password.");
      }
    } else {
      res.json("No record found.");
    }
  } catch (err) {
    res.json({ error: err.message });
  }
});

app.post("/signup", async (req, res) => {
  console.log(req.body);

  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const employee = await EmployeeModel.create({
      name,
      email,
      password: hashedPassword,
    });
    res.json(employee);
  } catch (err) {
    res.json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
