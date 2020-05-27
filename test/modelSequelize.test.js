const { getAllUsers, getByPk } = require('../modelSequelize')

test('getAllUsers', async () => {
    const userList = await getAllUsers({ include: '' })
    console.log(userList[0])
    console.log('userList[0].Projects', userList[0].Projects)
    console.log('userList[0].Lives', userList[0].Lives)
    expect(userList.length > 0).toBe(true);
})


// test('getByPk', async () => {
//     const user = await getByPk()
//     console.log(user)
//     expect(user.id === 2).toBe(true);
// })
