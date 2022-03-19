
// tầng giao tiếp, xử lý data

const userService = require('./service')

exports.login = async(email, password) => {
    const user = await userService.login(email)
    console.log(email, password, user)
    if(user && user.password == password){
        return user
    }
    return null;
}