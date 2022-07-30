const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const homeRoutes = require("./routes/home");
const musterRoutes = require("./routes/muster");
const otherInfoRoutes = require("./routes/other-info");
const addStafffoRoutes = require("./routes/add-staff");
const errorController = require("./controllers/error");

const mongoose = require("mongoose");
const Staff = require("./models/staff");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  Staff.findOne({ _id: "62e41bde03b4d3ae4889f248" })
    .then((staff) => {
      req.staff = staff;
      next();
    })
    .catch((err) => console.log(err));
});

app.use(homeRoutes);
app.use(musterRoutes);
app.use(otherInfoRoutes);
app.use(addStafffoRoutes);
app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://Huong:zalo12345@cluster0.3me2f.mongodb.net/test'
  )
  .then((result) => {
    Staff.findOne()
      .then((staff) => {
        if (!staff) {
          const staff = new Staff({
            name: "Phạm Văn A",
            doB: new Date(1995, 04, 06),
            salaryScale: 1.5,
            startDate: new Date(2021, 10, 25),
            department: "Nhân sự",
            annualLeave: 12,
            image: "http://localhost:3000",
            workStatus: null,
            workTimes: [],
            totalTimesWork: null,
            leaveInfoList: [],
            bodyTemperature: [],
            vaccineInfo: [],
            infectCovidInfo: [],
          });
          return staff.save();
        }
      })
      .then((a) => {
        app.listen(3000);
      });
  })
  .catch((err) => console.log(err));
