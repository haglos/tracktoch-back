const express = require("express")
const router = express.Router()
const { verifyAdmin} = require("../utils/utils")
const { deleteCosignment, newCosignment, updateCosignment, getHistories, getHistory, updateHistory, deleteHistory, newHistory,sendEmail } = require("../controller/admin")


let login = require("../controller/admin").login
let signup = require("../controller/admin").signup

let getAdmin = require("../controller/admin").getAdmin
let updateAdmin = require("../controller/admin").updateAdmin

let getCosignments = require("../controller/admin").getCosignments
let getCosignment = require("../controller/admin").getCosignment

//auth routes
router.post('/adminlogin',login)
router.post('/adminsignup',signup)

//Admin Routes
router.get('/admin/:id',verifyAdmin,getAdmin)
router.patch('/admin/:id',verifyAdmin,updateAdmin)


//Cosignment route Routes
router.get('/cosignments',verifyAdmin,getCosignments)
router.get('/cosignments/:id',verifyAdmin,getCosignment)
router.patch('/cosignments/:id',verifyAdmin,updateCosignment)
router.delete('/cosignments/:id',verifyAdmin,deleteCosignment)
router.post('/cosignment',verifyAdmin,newCosignment)

// history route
router.get('/histories/:id',verifyAdmin,getHistories)
router.get('/history/:id',verifyAdmin,getHistory)
router.patch('/histories/:id',verifyAdmin,updateHistory)
router.delete('/history/:id',verifyAdmin,deleteHistory)
router.post('/history',verifyAdmin,newHistory)
router.post('/sendemail',sendEmail)




exports.router = router