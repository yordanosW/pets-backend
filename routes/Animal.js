const router = require('express').Router()
const {
    getAllAnimals,
    getAnimalById,
    createAnimal,
    deleteAnimal,
    updateAnimal
} = require('../controllers/Animal')

// get all Animals
router.get('/all', getAllAnimals)

//get Animal by ID
router.get('/:id', getAnimalById)

// create animal
router.post('/', createAnimal)

// delete animal
router.delete('/:id', deleteAnimal)

// update animal
router.put('/:id', updateAnimal)

module.exports = router