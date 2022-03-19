

// tầng giao tiếp với database

exports.login = async (email) => {
    const user = data.filter(item => item.email == email)[0];
    console.log(email, user);
    return user; 
}



// Đây là giả lập data
var data = [
    { id: 1, email: 'admin@gmail.com', password: '111', name: 'Tuấn Nghĩa'}
];