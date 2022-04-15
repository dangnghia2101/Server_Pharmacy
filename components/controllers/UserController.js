
// tầng giao tiếp, xử lý data

const userService = require('../services/UserSevice')
const brcryt = require('bcryptjs')

exports.login = async(email, password) => {
    try{
        const user = await userService.login(email)
        // console.log(email, password, user)
        // if(user && user.password == password){
        //     return user
        // }    
        // return null;
        
        const checkPassword = await brcryt.compare(password, user.password)
        if(!checkPassword) return null;
        return { _id: user._id, email: user.email}
    }catch(e){
        console.log("Error login: ", e.message)
        return null;    
    }
}   

exports.register = async(email, password, confirm_password) => {
    console.log( email, confirm_password, password)

    if(password != confirm_password) return null
    let user = await userService.login(email)
    if(user) return null;

    const hash = await brcryt.hash(password, await brcryt.genSalt(10))
    user = await userService.register(email, hash, "ENABLE")
    return {_id: user._id}
}

// Get all users
exports.getUsers = async () => {

    let users = await userService.getUsers();
    users = users.map((item, index) => {
        item = {
            _id: item._id,
            email: item.email,
            password: item.password,
            valueStatus: item.status,
            status: item.status == "ENABLED" ? true:false,
            index: index + 1,
        }
        return item;
    })
    return users;
}

exports.changeStatus = async (id, user) => {
   return await userService.changeStatus(id, user);
}

