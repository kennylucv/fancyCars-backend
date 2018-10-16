const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log(req.params);
  console.log("------------" + new Date() + "-----GET--------\n");
});

app.get("/availability", (req, res) => {
  var id = req.query.id;
  res.send(availabilityData[id]);
  console.log(req.query);
  console.log("------------" + new Date() + "-----GET--------\n");
});

app.get("/cars", (req, res) => {
  res.send(carsData);
  console.log("------------" + new Date() + "-----GET--------\n");
});

const availabilityData = [
  "In Dealership",
  "Out of Stock",
  "Unavailable",
  "In Dealership",
  "Out of Stock",
  "Unavailable",
  "In Dealership",
  "Out of Stock",
  "Unavailable",
  "Unavailable"
];

const carsData = [
  {
    id: 0,
    img:
      "https://cdn.images.express.co.uk/img/dynamic/24/590x/McLaren-Senna-car-price-new-2018-890981.jpg",
    name: "My Honda Civic 0",
    make: "Honda",
    model: "Civic",
    year: 2018
  },
  {
    id: 1,
    img:
      "https://cdn.images.express.co.uk/img/dynamic/24/590x/McLaren-Senna-car-price-new-2018-890981.jpg",
    name: "BMW Z4",
    make: "BMW",
    model: "Z4",
    year: 2018
  },
  {
    id: 2,
    img:
      "https://cdn.images.express.co.uk/img/dynamic/24/590x/McLaren-Senna-car-price-new-2018-890981.jpg",
    name: "Mazda 3",
    make: "Mazda",
    model: "3",
    year: 2018
  },
  {
    id: 3,
    img:
      "https://cdn.images.express.co.uk/img/dynamic/24/590x/McLaren-Senna-car-price-new-2018-890981.jpg",
    name: "Mazda 2",
    make: "Mazda",
    model: "3",
    year: 2018
  },
  {
    id: 4,
    img:
      "https://cdn.images.express.co.uk/img/dynamic/24/590x/McLaren-Senna-car-price-new-2018-890981.jpg",
    name: "Mazda 1",
    make: "Mazda",
    model: "3",
    year: 2018
  },
  {
    id: 5,
    img:
      "https://cdn.images.express.co.uk/img/dynamic/24/590x/McLaren-Senna-car-price-new-2018-890981.jpg",
    name: "Mazda 5",
    make: "Mazda",
    model: "3",
    year: 2018
  },
  {
    id: 6,
    img:
      "https://cdn.images.express.co.uk/img/dynamic/24/590x/McLaren-Senna-car-price-new-2018-890981.jpg",
    name: "Mazda 6",
    make: "Mazda",
    model: "3",
    year: 2018
  },
  {
    id: 7,
    img:
      "https://cdn.images.express.co.uk/img/dynamic/24/590x/McLaren-Senna-car-price-new-2018-890981.jpg",
    name: "Mazda 7",
    make: "Mazda",
    model: "3",
    year: 2018
  },
  {
    id: 8,
    img:
      "https://cdn.images.express.co.uk/img/dynamic/24/590x/McLaren-Senna-car-price-new-2018-890981.jpg",
    name: "Mazda 8",
    make: "Mazda",
    model: "3",
    year: 2018
  },
  {
    id: 9,
    img:
      "https://cdn.images.express.co.uk/img/dynamic/24/590x/McLaren-Senna-car-price-new-2018-890981.jpg",
    name: "Mazda 9",
    make: "Mazda",
    model: "3",
    year: 2018
  }
];

app.listen(port, () =>
  console.log(`Fancy Cars backend listening on port ${port}!`)
);
