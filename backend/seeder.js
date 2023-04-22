const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config({path:'./config/config.env'});

const Recipe = require('./models/Recipe');

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true
});

const recipes = JSON.parse(
    fs.readFileSync(`${__dirname}/recipes.json`,'utf-8')
);

const importData = async() => {
    try {
        await Recipe.create(recipes);

        console.log('Data Imported...'.green.inverse);
        process.exit();
    }  
    catch (err) {
        console.log(err);
    }
}

const deleteData = async() => {
    try {
        await Bootcamp.deleteMany();
        await Course.deleteMany();
        await User.deleteMany();
        await Review.deleteMany();
        console.log('Data Deleted...'.red.inverse);
        process.exit();
    }
    catch (err) {
        console.log(err);
    }
}

if(process.argv[2] === '-i'){
    importData();
}else if (process.argv[2] === '-d') {
    deleteData();
}
