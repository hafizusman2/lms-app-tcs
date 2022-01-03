var express = require("express");
var router = express.Router();

/* GET users listing. */
//Show Dashboard
router.get("/", function (req, res, next) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write("<center><h1>Hello Welcome LMS Head Dashboard</h1>");
  res.write(
    'If you want to view classes: <a href="/head/class">Click Here</a><br>'
  );
  res.write(
    'If you want to view materials: <a href="/head/maerials">Click Here</a><br>'
  );
  res.write(
    'If you want to view results: <a href="/head/results">Click Here</a><br>'
  );
  res.write(
    'If you want to view graphs: <a href="/head/graphs">Click Here</a><br>'
  );
  res.write(
    'If you want to view teachers: <a href="/head/teachers">Click Here</a><br>'
  );
  res.write(
    'If you want to view students: <a href="/head/students">Click Here</a><br>'
  );
  // res.send("respond with a resource");
  res.end();
});

module.exports = router;
