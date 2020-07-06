var express = require('express');
var router = express.Router();

var employeesData = [
    {
        id: 1,
        name: "Kurganova Marina",
        position: "Materials Developer",
        imageUrl: "../../../assets/images/person.png",
        description: "Senior teacher with more than 20 years of experience ..."
    },
    {
        id: 2,
        name: "Osmukha Zoia",
        position: "Social Connections Manager",
        imageUrl: "../../../assets/images/person.png",
        description: "Social Connections Manager with more ..."
    },
    {
        id: 3,
        name: "Pysarenko Oleg",
        position: "Technical Manager",
        imageUrl: "../../../assets/images/person.png",
        description: "Technical Manager with  ..."
    },
    {
        id: 4,
        name: "Sapozhnikova Viktoria",
        position: "Schedules Developer",
        imageUrl: "../../../assets/images/person.png",
        description: "Schedules Developer with  ..."
    }
]

var worksData = [
    {
        id: 1,
        title: "Easy2λearn (Android)",
        description: "An android application designed for learning English words. Easy and joyful way to increase kids vocabulary via games and competions",
        imageUrl: "../../../assets/images/app_bg.jpg"
      },
      {
        id: 2,
        title: "Easy2λearn (IOS)",
        description: "An IOS application designed for learning English words. Easy and joyful way to increase kids vocabulary via games and competions",
        imageUrl: "../../../assets/images/app_bg.jpg"
      },
      {
        id: 3,
        title: "Easy2λearn Kids Club",
        description: "Classes for kids 0+. Early development, language courses, educational meetings and dozens of specialists who love what they do!",
        imageUrl: "../../../assets/images/app_bg.jpg"
      },
      {
        id: 4,
        title: "Easy2λearn Materials",
        description: "Educational materials, projects and ideas for teachers and parents. Hundreds of innovations based on the experience of the past",
        imageUrl: "../../../assets/images/app_bg.jpg"
      }
]

/* /api/employees */
router.get('/employees', function(req, res, next) {
    var data = employeesData;
    res.json(data);
  });

router.get('/works', function(req, res, next){
    var data = worksData;
    res.json(worksData);
});  
  
module.exports = router;