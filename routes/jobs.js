const express = require("express");
const router = express.Router();
 
const {
    getAllJobs,
    getJob,
    createJob,
    upadateJob,
    deleteJob,
} = require("../controllers/jobs")

router.route("/").post(createJob).get(getAllJobs);
router.route("/:id").get(getJob).delete(deleteJob).patch(upadateJob)

module.exports = router 