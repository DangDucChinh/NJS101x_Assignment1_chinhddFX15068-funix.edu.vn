const Staff = require("../models/staff");
const bcrypt = require('bcryptjs');
exports.getAddStaff = (req, res, next) => {

  if (req.staff.admin) {
    const email = req.staff.email;
    console.log('Đã bấm add-satff');
    res.render("add-staff", {
      pageTitle: "Add Staff",
      path: "/add-staff",
      email: email
    });
  }
};

exports.postAddStaff = (req, res, next) => {
  const email = req.body.email;
  const name = req.body.name;
  const doB = req.body.doB;
  const salaryScale = req.body.salaryScale;
  const startDate = req.body.startDate;
  const department = req.body.department;
  const annualLeave = req.body.annualLeave;
  const image = req.body.image;
  const password = req.body.password;

  const staff = new Staff({
    email: email,
    name: name,
    password: '',
    isAdmin: false, 
    doB: doB,
    salaryScale: salaryScale,
    startDate: startDate,
    department: department,
    annualLeave: annualLeave,
    image: image,
    workTimes : [],

    workStatus: false,
    totalTimesWork: 0,
    leaveInfoList: [] , 
    bodyTemperature: [] , 
    vaccineInfo: [] , 
    infectCovidInfo: [],
  });

  bcrypt.hash(password, 12).then(hashedpass => {

    if (!hashedpass) {
      console.log('\n Lỗi tại controller postAddStaff : ko thể hash dc password\n' + err);
      return res.redirect('/add-staff');
    }

    staff.password = hashedpass ; 
    staff
      .save()
      .then((result) => {
        console.log("Created Staff");
        res.redirect("/staff-info");
      })
      .catch((err) => console.log(err));

  }).catch(err => {
    console.log('\n Lỗi tại controller postAddStaff\n' + err);
  })
};
