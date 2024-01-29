const express = require("express")
const inventoryRouter = express.Router()
const Product = require("../models/inventory.js")
const inventory = require("../models/inventory.js")



// Post(Create) One //
inventoryRouter.post("/", (req, res, next) => {
    const newProduct = new Product(req.body)
    newProduct.save((err, savedProduct) => {
        if(err) {
            res.status(500)
            return res.next(err)
        }
        return res.status(201).send(savedProduct)
    })
})

// Get(Read) All //
inventoryRouter.get("/", (req, res, next) => {
    Product.find((err, products) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(products)
    })
})

// Get(Read) One //
inventoryRouter.get("/:productId", (req, res, next) => {
    const productId = req.params.productId
    const fountProduct = products.find(product => product._id === productId)
    if(!fountProduct) {
        const error = new Error(`The item with id: ${productId} could not be found.`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(fountProduct)
})
// Put(Update) One //
inventoryRouter.put("/:productId", (req, res, next) => {
    Product.findOneAndUpdate(
        { _id: req.params.productId },     // find this one to update
        req.body,                          // update the object with this data
        { new: true },                     // send back the updated version please
        (err, updatedProduct) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedProduct)
        }
    )
})

// Delete One //
inventoryRouter.delete("/:productId", (req, res, next) => {
    Product.findOneAndDelete({ _id: req.params.productId}, (err, deletedProduct) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted product ${deletedProduct.title} from the database.`)
    })
})
module.exports = inventoryRouter