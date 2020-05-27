const db = require("./models")

async function getAllUsers(whr) {
    const Users = await db.Users.findAll(
        {
            where: {
                id: 1
            },
            include: [db.Friend]
        }
    )
    return Users
}


async function getByPk(whr) {
    const Users = await db.Users.findByPk(2)
    return Users
}

module.exports = { getAllUsers, getByPk }