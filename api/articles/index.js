const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        await res.status(200).json({ success: true })
    } catch (error) {
        res.status(200).json({ success: false, error })
    }
})

module.exports = router
