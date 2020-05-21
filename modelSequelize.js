const db = require("./models")

async function getAllUsers(whr) {
    const Users = await db.Users.findAll()
    return Users
}

module.exports = { getAllUsers }