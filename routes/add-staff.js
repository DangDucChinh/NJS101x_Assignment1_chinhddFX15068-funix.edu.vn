const express = require("express");
const router = express.Router();

const isAuth = require('../midlleware/is-auth');
const isAdmin = require('../midlleware/is-admin');


const addStaffController = require("../controllers/add-staff");
const { body } = require('../midlleware/is-auth') ; 

router.get("/add-staff",isAuth ,isAdmin ,   addStaffController.getAddStaff);

router.post("/add-staff", isAuth, isAdmin ,  addStaffController.postAddStaff);

module.exports = router;
