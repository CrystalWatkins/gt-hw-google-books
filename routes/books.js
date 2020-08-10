const { Book } = require("../models/book");
const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    Book.find()
    .then(books => {
        res.json(books)
    })
})

router.get("/:id", (req,res) => {
    Book.findById(req.params.id)
    .then(book => {
        res.json(book)
    })
})

router.post("/", async(req, res) => {
    let book = new Book ({
        title: req.body.title,
        authors: req.body.authors,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link,
    });
    await book.save();
    res.json(book);
})

router.delete("/:id", (req, res) => {
    Book.findByIdAndRemove(req.params.id)
    .then(book => {
        res.json(book)
    })
})

module.exports = router;