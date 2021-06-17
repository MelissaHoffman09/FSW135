const express = require('express');
const inventoryRouter = express.Router();
const Inventory = require('../models/inventory.js');


// Get all
inventoryRouter.get("/", (req, res, next) => {
    Inventory.find((err, items) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

// Get one
inventoryRouter.get("/:inventoryId", (req, res, next) => {
    Inventory.findOne(
        { _id: req.params.inventoryId },
        (err, oneItem) => {
            if(err) {
                res.send(500)
                return next(err)
            }
            return res.status(200).send(oneItem)
        }
    )
})

// Post 
inventoryRouter.post("/", (req, res, next) => {
  const newInventory = new Inventory(req.body)
  newInventory.save((err, savedInventory) => {
      if(err){
          res.status(500)
          return next(err)
      }
      return res.status(201).send(savedInventory)
  })
})

// Update 
inventoryRouter.put("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndUpdate(
        { _id: req.params.inventoryId },
        req.body, 
        { new: true },
        (err, updatedItem) => {
          if(err) {
              res.status(500)
              return next(err)
          }
          return res.status(201).send(updatedItem)
        }
      )
  })

// Delete
inventoryRouter.delete("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndDelete(
        { _id: req.params.inventoryId }, 
        (err, deletedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`${deletedItem.name} has been deleted from the database.`)
    })
})

module.exports = inventoryRouter;