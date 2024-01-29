const mongoose = require('mongoose')

const AnimalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    profilePicture: String,
    age: {
        type: Number,
        required: true
    },
    species: {
        type: String,
        required: true,
        enum: ['cat', 'dog']
    },
    description: String
})

AnimalSchema.pre('save', function(next) {
    const animal = this
    if (!animal.profilePicture) {
        if (animal.species === 'dog') {
            animal.profilePicture = 'https://i.pinimg.com/736x/54/36/95/54369563e20e94dcab5fc7f40cf7e8d6.jpg'
        } else {
            animal.profilePicture = 'https://www.worldsbestcatlitter.com/wp-content/uploads/2023/03/main-img_orange-tabby-cats_blog.jpg'
        }
    }

    return next()
})

AnimalSchema.pre('findOneAndUpdate', function(next) {
    const animal = this
    if (!animal._update.profilePicture) {
        if (animal._update.species === 'dog') {
            animal._update.profilePicture = 'https://i.pinimg.com/736x/54/36/95/54369563e20e94dcab5fc7f40cf7e8d6.jpg'
        } else {
            animal._update.profilePicture = 'https://www.worldsbestcatlitter.com/wp-content/uploads/2023/03/main-img_orange-tabby-cats_blog.jpg'
        }
    }

    return next()
})

module.exports = mongoose.model('Animal', AnimalSchema)