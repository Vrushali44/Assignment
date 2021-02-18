const express = require("express");
const router = express.Router();

let data = [
  { id: 1, title: "Vapurza", order: 1, completed: true, orderDate: new Date() },
  { id: 2, title: "Amrutvel", order: 2, completed: true, orderDate: new Date()},
  { id: 3, title: "Sakhi", order: 3, completed: true, orderDate: new Date()},
  { id: 4, title: "Mahotsav", order: 4, completed: false, orderDate: new Date()},
  { id: 5, title: "Sherlok Homes", order: 5, completed: false, orderDate: new Date()},
];

//GET
router.get("/", (req, res) => {
  res.status(200).json(data);
});

router.get("/:id", (req, res) => {
  let found = data.find((item) => item.id === parseInt(req.params.id));
  if (found) {
    res.status(200).json(found);
  } else {
    res.sendStatus(404);
  }
});

//POST
router.post("/", (req, res) => {
  let itemsIds = data.map((item) => item.id);
  let orderNums = data.map((item) => item.order);

  let newId = itemsIds.length > 0 ? Math.max.apply(Math, itemsIds) + 1 : 1;

  let newOrderNum =
    orderNums.length > 0 ? Math.max.apply(Math, orderNums) + 1 : 1;

  let newItem = {
    id: newId,
    title: req.body.title,
    order: newOrderNum,
    completed: false,
    orderDate: new Date(),
  };

  data.push(newItem);
  res.status(201).json(newItem);
});

//UPDATE
router.put("/:id", (req, res) => {
  let found = data.find((item) => item.id === parseInt(req.params.id));
  if (found) {
    let updated = {
      id: found.id,
      title: req.body.title,
      order: req.body.order,
      completed: req.body.completed,
    };

    let targetIndex = data.indexOf(found);

    data.splice(targetIndex, 1, updated);
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

//DELETE
router.delete("/:id", (req, res) => {
  let found = data.find((item) => item.id === parseInt(req.params.id));

  if (found) {
    let targetIndex = data.indexOf(found);
    data.splice(targetIndex, 1);
  }
  res.sendStatus(204);
});

module.exports = router;
