"use strict";

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true});

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  var janeFonda = new Person({
    name: "Jane Fonda", 
    age: 84, 
    favoriteFoods: ["eggs", "fish", "fresh fruit"]
  });

  janeFonda.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  arrayOfPeople = [
    {
      name: "Jane Fonda", 
      age: 84, 
      favoriteFoods: ["eggs", "fish", "fresh fruit"]
    },
    {
      name: "Jane Doe", 
      age: 24, 
      favoriteFoods: ["bacon", "fish", "fresh fruit"]
    },
    {
      name: "John Fonda", 
      age: 94, 
      favoriteFoods: ["eggs", "meat", "fresh fruit"]
    },
    {
      name: "John Doe", 
      age: 34, 
      favoriteFoods: ["eggs", "fish", "vegetables"]
    }
  ]
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

// app.get('/', (req, res) => {
//   console.log("HomePage Connected")
//   console.log(`${req.method} ${req.url} ${req.path}`)
//   res.sendFile(__dirname + '/views/index.html')
// })

// app.listen(8080, ()=> {
//   console.log("App is live! @ PORT 8080")
// })

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
