const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')

const Show = require('../../models/Show');


router.get('/', (req, res) => {
    Show.find()
        .sort({ date: -1 })
        .then(shows => res.json(shows))
});

router.post('/', auth, (req, res) => {
    const newShow = new Show({
        venue: req.body.venue,
    })
    newShow.save().then(show => res.json(show))
});

router.delete('/:id', auth, (req, res) => {
    Show.findById(req.params.id)
    .then(show => show.remove().then(() => res.json({success:true}))
    )
    .catch(err => res.status(404).json({success: false})) 
});






module.exports = router;