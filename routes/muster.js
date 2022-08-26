const express = require("express");

const musterController = require("../controllers/muster");

const router = express.Router();
const isAuth = require('../midlleware/is-auth');
const isAdmin = require('../midlleware/is-admin');


router.get("/muster",isAuth,isAdmin ,   musterController.getMuster);

router.get("/muster/checkin",isAuth,isAdmin ,  musterController.getCheckIn);

router.post("/muster/checkin",isAuth , isAdmin ,   musterController.postCheckIn);

router.post("/muster/checkout",isAuth ,isAdmin ,   musterController.postCheckOut);

router.get("/muster/off",isAuth ,isAdmin ,   musterController.getOff);

router.post("/muster/off", isAuth ,isAdmin ,   musterController.postOff);

module.exports = router;
