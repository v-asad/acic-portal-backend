const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "acic_portal",
  password: "password",
  port: 5432,
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const getUsers = (req, res) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const createUser = (req, res) => {
  const { name, email } = req.body;

  pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
    [name, email],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/users", getUsers);
app.get("/users/:id", getUserById);
app.post("/users/create", createUser);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
