const express = require('express');

const Domain = require('./Model/Domain');
const Groups = require('./Model/Groups');
const Notes = require('./Model/Notes');


const router = express.Router()

router.post('/add-domain', (req, res) => {
    const note = { name: req.body.name, url: req.body.url, description: req.body.description}
    const data = new Domain(note)

    try {
        const dataToSave = data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
 })


router.get('/list-domain', async (req, res) => {
    try{
        const data = await Domain.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.delete('/delete-domain/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Domain.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;