const { getAllUsers } = require('../modelSequelize')

test('getAllUsers', async () => {
    const userList = await getAllUsers()
    console.log(userList)
    expect(userList.length > 1).toBe(true);
})
