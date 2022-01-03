var express = require("express");
var router = express.Router();
var Class = require("../models/class");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//add marks
router.post("/addmarks/:cid/:sid", function (req, res, next) {
  Class.findOneAndUpdate(req.params.cid, {
    $push: {
      studentMarks: { sid: req.params.sid, marks: req.body.marks },
    },
  })
    .then(
      (myMarks) => {
        console.log("Marks has been Added ", myMarks);

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(myMarks);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

//Delete specific marks
router.delete("/marks", function (req, res, next) {
  // res.send('respond with a resource');
  // Class.findOneAndUpdate(req.params.cid, {
  //   studentMarks: [
  //     {
  //       $pull: {
  //         sid: req.params.sid,
  //         // marks: req.body.marks,
  //         // $in: [req.params.sid],
  //       },
  //     },
  //   ],
  // })
  Class.findOneAndUpdate(req.body.cid, {
    studentMarks: [
      {
        $pull: {
          sid: req.body.sid,
          // marks: req.body.marks,
          // $in: [req.params.sid],
        },
      },
    ],
  })
    .then(
      (deletedMarks) => {
        console.log("Marks has been Deleted ", deletedMarks);

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(deletedMarks);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

module.exports = router;
