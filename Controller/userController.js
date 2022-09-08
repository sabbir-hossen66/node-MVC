let user = require('../fakeData.json')
const fs = require('fs')
var data = fs.readFileSync('fakeData.json');


//@desc userData Randomly calling from fake data 
//@route  get/user/random
//method  private
const getRandomUser = (req, res) => {
    const id = Math.floor(Math.random() * 15) + 1;
    // console.log(id)
    const filter = user.find(us => us.id == id);
    if (filter) {
        res.send(filter)
    }
}


//@desc userData calling from fake data 
//@route  user/all
//method  private
const getAllUser = (req, res) => {
    const query = Number(req.query.limit);
    if (query) {
        res.send(user.slice(0, query))
    } else {
        res.send(user)
    }
    console.log(query)
}



const saveUser = (req, res) => {
    console.log(req.body)
    const { id, gender, name, contact, address, photoUrl } = req.body;
    const filter = user.find(exist => exist.id == id);
    if (!filter) {
        if (id && gender && name && contact && address && photoUrl) {
            var myObject = JSON.parse(data);
            let result = myObject.push(req.body)
            console.log(result);

            res.send({ message: "Data Inserted" })
        } else {
            res.send({ message: "value Messing" })
        }
    } else {
        res.send({ message: "already id exist" })
    }
}

//user update randomly function here ...
const userDataUpdate = (req, res) => {
    const id = Math.floor(Math.random() * 4) + 1;

    const data = req.body;
    const filter = user.find(use => use.id === Number(id));
    filter.name = data.id || filter.id;
    filter.gender = data.gender || filter.gender;
    filter.name = data.name || filter.name;
    filter.contact = data.contact || filter.contact;
    filter.address = data.address || filter.address;
    filter.photoUrl = data.photoUrl || filter.photoUrl;
    res.send(filter)
}
//user update function 
const bulkPatchData = (req, res) => {
    const { id } = req.params
    const data = req.body;
    const filter = user.find(use => use.id === Number(id));
    filter.name = data.id || filter.id;
    filter.gender = data.gender || filter.gender;
    filter.name = data.name || filter.name;
    filter.contact = data.contact || filter.contact;
    filter.address = data.address || filter.address;
    filter.photoUrl = data.photoUrl || filter.photoUrl;
    res.send(filter)

}

//user delete function here ................................

const deleteData = (req, res) => {
    const { id } = req.params;
    if (Number(id)) {
        result = user.filter(use => use.id !== Number(id));
        res.send(result);
    } else {
        res.send({ message: "Id not found" })
    }
}

module.exports = { getAllUser, getRandomUser, saveUser, userDataUpdate, bulkPatchData, deleteData }