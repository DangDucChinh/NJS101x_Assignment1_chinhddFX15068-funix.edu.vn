const express = require("express");

const otherInfoController = require("../controllers/other-info");

const router = express.Router();
const isAuth = require('../midlleware/is-auth');
const isAdmin = require('../midlleware/is-admin');


router.get("/staff-info",isAuth ,isAdmin ,   otherInfoController.getStaffInfo);

router.post("/staff-info",isAuth ,isAdmin ,   otherInfoController.postStaffInfo) ; 

router.get("/work-info",isAuth ,isAdmin ,  otherInfoController.getWorkInfo);

router.get("/covid-info",isAuth,isAdmin ,   otherInfoController.getCovidInfo);

router.post("/covid-info/temperature",isAuth ,isAdmin ,   otherInfoController.postBodyTemperature);

router.post("/covid-info/vaccineInfo",isAuth , isAdmin , otherInfoController.postVaccineInfo);

router.post("/covid-info/infectCovidInfo",isAuth ,isAdmin,   otherInfoController.postInfectCovidInfo);

module.exports = router;
