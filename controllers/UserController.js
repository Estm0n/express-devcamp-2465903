const {DataTypes} = require('sequelize')
const UserModel = require('../models/user')
const sequelize = require('../config/seq')
//objeto User:
const User = UserModel(sequelize , DataTypes)

exports.getAllUsers = async (req , res) => {
    const allUsers = await User.findAll()
    console.log()
    res
    .status(200)
    .json({
        "success" : true,
        "data" : allUsers
    })
}

exports.getSingleUser = (req , res) => {
    res
    .status(200)
    .json({
        "success" : true,
        "data" : `Single user`
    })
}

exports.createUser = (req , res) => {
    res
    .status(201)
    .json({
        "success" : true,
        "data" : "create User"
    })
}

exports.updateUser = (req , res) => {
    res
    .status(201)
    .json({
        "success" : true,
        "data" : `update user 
        ${ req.params.id}`
    })
}

exports.deleteUser = (req , res)=>{
    res
    .status(201)
    .json({
        "success" : true,
        "data" : ``
    })
}