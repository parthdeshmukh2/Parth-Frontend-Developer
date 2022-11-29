const express = require("express");
const fetch = require('node-fetch')
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {

    const {page} = req.params

  const response = await fetch("https://api.spacexdata.com/v3/capsules");
  const body = await response.json();
  res.send(body);
});

app.get("/type/:types", async (req, res) => {
  const { types } = req.params;
  const response = await fetch(
    `https://api.spacexdata.com/v3/capsules/?type=${types}`
  );
  const body = await response.json();
  res.send(body);
});
app.get("/:status", async (req, res) => {
  const { status } = req.params;
  const response = await fetch(
    `https://api.spacexdata.com/v3/capsules/?status=${status}`
  );
  const body = await response.json();
  res.send(body);
});
app.get("/:original_launch", async (req, res) => {
  const { original_launch } = req.params;
  const response = await fetch(
    `https://api.spacexdata.com/v3/capsules/?status=${original_launch}`
  );
  const body = await response.json();
  res.send(body);
});

app.listen(8080, () => {
  try {
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
});
