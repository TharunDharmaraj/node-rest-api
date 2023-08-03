const express = require("express");
const app = express();
const port = 3500;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, this is your REST API!");
});


const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

// Endpoint to get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Endpoint to get a specific user by ID
app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Endpoint to add a new user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
