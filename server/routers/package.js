import express from "express";
import PackAge from "../model/package.js"

const router = express.Router()

router.get("/getAllPackage", (req, res) => {
    PackAge.find()
      .then((products) => {
        res.json(products);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.get("/getPackage/:id", (req, res) => {
    PackAge.findById(req.params.id)
      .then((product) => {
        res.json(product);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.post("/createPackage", async (req, res) => {
    // const PackAge = new Package({
    //   name: req.body.name,
    //   price: req.body.price,
    //   description: req.body.description,
    //   credit: req.body.credit,
    //   user: req.userId,
    // });
    // PackAge.save();
    // res.json(PackAge);
    try {
        const post = req.body
        const createdPost = await PackAge.create(post)
        res.status(201).json(createdPost)
      } catch (error) {
        console.log(error)
      }
  });

  router.put("/updatePackage/:id", (req, res) => {
    PackAge.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      price: req.body.price,
      credit: req.body.credit,
      description: req.body.description,
    })
      .then((product) => {
        res.json(product);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.delete("/deletePackage/:id", (req, res) => {
    PackAge.findByIdAndDelete(req.params.id)
      .then((product) => {
        res.json(product);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  export default router
  