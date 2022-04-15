
const userModel = require('../models/UserModel')

// tầng giao tiếp với database

exports.login = async (email) => {
    // const user = data.filter(item => item.email == email)[0];
    // console.log(email, user);
    // return user; 

    // select id, email, password from users where email = ''
    const user = userModel.findOne({ email: email })
                    .select('id email password status')

    return user;
}

exports.register = async (email, password, status) => {
    const user = new userModel({email, password, status})
    return await user.save();
}

// get all users
exports.getUsers = async () => {
    // return data;

    const uses = await userModel.find();
    return uses;
}

exports.changeStatus = async (id) => {
    const user = await userModel.findById(id);
    let status = user.status == 'ENABLED' ? 'DISABLED' : 'ENABLED' ;
    await userModel.findByIdAndUpdate(id, {status});
    return status;
}

