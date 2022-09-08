const express = require('express')
const router = express.Router()
const { getAllUser, getRandomUser, saveUser, userDataUpdate, bulkPatchData, deleteData } = require('../Controller/userController')



router.get('/all', getAllUser)
router.get('/random', getRandomUser)
router.post('/save', saveUser)
router.patch('/update', userDataUpdate)
router.patch('/update/:id', bulkPatchData)
router.delete('/delete/:id', deleteData)

module.exports = router