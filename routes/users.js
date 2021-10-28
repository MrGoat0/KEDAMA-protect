const express = require("express");
const router = express.Router();
const cors = require("cors");

const usersController = require("../controllers/users");
const auth = require("../middlewares/auth");

// endpoints
router.put("/", usersController.updateUser);
router.get("/", auth, usersController.authUser);
router.get("/roles", cors(), auth, usersController.authRole);
router.get("/all", usersController.getAllUsers);
router.get("/search/:email", usersController.getByEmail);
router.get("/sellerInfo/:id", usersController.getByID);
// router.post("/", usersController.createUser);
// router.get("/:id", usersController.getUserId);
// router.put("/:id", usersController.updateUser);
// router.delete("/:id", usersController.deleteUser);

module.exports = router;
