/**
 * service: tăng giao tiếp database
 */

const productModel = require('./model')

/**
 * lấy danh sach sản phẩm
 * 
 */

exports.getProducts = async () => {
  // return data;

  // select * from products
  const products = await productModel.find().populate('category_id')
  return products
}

/**
 * lấy thông tin chi tiết một sản phẩm
 */

exports.getProductById = async (id) => {
  // const product =  data.filter(item => item._id == id)[0];
  // return product;

  const product = await productModel.findById(id).populate('category_id')
  return product;
}

exports.insert = async (product) => {
  // data.push(product);
  const p = new productModel(product);
  await p.save();
}


exports.delete = async (id) => {
  // data = data.filter(item => item._id != id);
  await productModel.findByIdAndDelete(id);
}

/**
 * 
 * spread operator
 * 
 */

exports.update = async (id, product) => {
  // data = data.map(item => {
  //   if (item._id == id) {
  //     item = { ...item, ...product }
  //   }
  //   return item;
  // })

  await productModel.findByIdAndUpdate(id, product);
}

var data = [{
  "_id": 1,
  "name": "Peder",
  "price": 60,
  "quantity": 3,
  "released": "6-20-2021",
  "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
  "description": 1,
  "category_id": {
    "_id": 1,
    "name": "Dayna",
    "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
  }
}, {
  "_id": 2,
  "name": "Reilly",
  "price": 65,
  "quantity": 10,
  "released": "12-31-2021",
  "image": "  ",
  "description": 1,
  "category_id": {
    "_id": 2,
    "name": "Joanie",
    "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
  }
}, {
  "_id": 3,
  "name": "Aldrich",
  "price": 72,
  "quantity": 10,
  "released": "10-17-2021",
  "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
  "description": 0,
  "category_id": {
    "_id": 3,
    "name": "Gus",
    "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
  }
}, {
  "_id": 4,
  "name": "Lindi",
  "price": 48,
  "quantity": 6,
  "released": "3-13-2022",
  "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
  "description": 0,
  "category_id": {
    "_id": 4,
    "name": "Kevon",
    "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
  }
}, {
  "_id": 5,
  "name": "Ricky",
  "price": 63,
  "quantity": 1,
  "released": "2-5-2022",
  "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
  "description": 1,
  "category_id": {
    "_id": 5,
    "name": "Dexter",
    "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
  }
}, {
  "_id": 6,
  "name": "Felice",
  "price": 43,
  "quantity": 3,
  "released": "8-2-2021",
  "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
  "description": 0,
  "category_id": {
    "_id": 6,
    "name": "Reba",
    "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
  }
}, {
  "_id": 7,
  "name": "Arlin",
  "price": 19,
  "quantity": 8,
  "released": "2021-09-21",
  "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
  "description": 1,
  "category_id": {
    "_id": 7,
    "name": "Maggee",
    "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
  }
}]
