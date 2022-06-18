const UserModel= require("../models/userModel")

const basicCode= async function(req, res) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    }

const createUser= async function (req, res) {
    try{
       let data= req.body
     if ( object.keys(data).length !=0) {
        let savedData= await UserModel.create(data)
        res.status(201).send({msg:savedData})
        }
        else res.status(400).send({msg: "Bad Request"})
    }
   catch (error){
       console.log("This is the error:" , error.massage)
         res.status(500).send({msg:"Error", error: error.massage})
   }
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode