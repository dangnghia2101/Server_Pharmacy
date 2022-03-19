/**
 * service: tăng giao tiếp database
 */

/**
 * lấy danh sach sản phẩm
 * 
 */

exports.getProducts = async () => {
    return data;
}

/**
 * lấy thông tin chi tiết một sản phẩm
 */

 exports.getProductById = async (id) => {
  const product =  data.filter(item => item._id == id)[0];
  return product;
 }

var data = [{
    "_id": 524,
    "name": "Wine - White, Pinot Grigio",
    "price": 339,
    "quantity": 32,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
    "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    "category_id": 346
  }, {
    "_id": 94,
    "name": "Tuna - Sushi Grade",
    "price": 856,
    "quantity": 3,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
    "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    "category_id": 460
  }, {
    "_id": 89,
    "name": "Bagels Poppyseed",
    "price": 240,
    "quantity": 8,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
    "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    "category_id": 913
  }, {
    "_id": 171,
    "name": "Orange Roughy 6/8 Oz",
    "price": 876,
    "quantity": 52,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
    "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    "category_id": 92
  }, {
    "_id": 495,
    "name": "Cake - Pancake",
    "price": 920,
    "quantity": 4,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
    "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    "category_id": 259
  }, {
    "_id": 756,
    "name": "Appetizer - Southwestern",
    "price": 649,
    "quantity": 57,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
    "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    "category_id": 362
  }, {
    "_id": 157,
    "name": "Salt - Rock, Course",
    "price": 238,
    "quantity": 50,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
    "description": "In congue. Etiam justo. Etiam pretium iaculis justo.",
    "category_id": 143
  }, {
    "_id": 611,
    "name": "Lamb Rack - Ontario",
    "price": 321,
    "quantity": 56,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
    "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    "category_id": 875
  }, {
    "_id": 105,
    "name": "Wine - White Cab Sauv.on",
    "price": 903,
    "quantity": 83,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
    "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    "category_id": 666
  }, {
    "_id": 786,
    "name": "Cheese - Gouda",
    "price": 866,
    "quantity": 35,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
    "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    "category_id": 29
  }, {
    "_id": 773,
    "name": "Apricots - Halves",
    "price": 808,
    "quantity": 81,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
    "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    "category_id": 51
  }, {
    "_id": 192,
    "name": "Sauce Bbq Smokey",
    "price": 923,
    "quantity": 71,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
    "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "category_id": 442
  }, {
    "_id": 510,
    "name": "Ice - Clear, 300 Lb For Carving",
    "price": 962,
    "quantity": 46,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    "category_id": 802
  }, {
    "_id": 269,
    "name": "Mustard - Individual Pkg",
    "price": 226,
    "quantity": 33,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
    "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    "category_id": 367
  }, {
    "_id": 753,
    "name": "Pancetta",
    "price": 391,
    "quantity": 72,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
    "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "category_id": 277
  }, {
    "_id": 932,
    "name": "Wine - Gato Negro Cabernet",
    "price": 126,
    "quantity": 47,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
    "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    "category_id": 98
  }, {
    "_id": 765,
    "name": "Cheese - Oka",
    "price": 791,
    "quantity": 66,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
    "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    "category_id": 778
  }, {
    "_id": 49,
    "name": "Sage Ground Wiberg",
    "price": 588,
    "quantity": 6,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
    "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    "category_id": 946
  }, {
    "_id": 504,
    "name": "Champagne - Brights, Dry",
    "price": 403,
    "quantity": 40,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
    "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "category_id": 780
  }, {
    "_id": 778,
    "name": "Tomatoes",
    "price": 616,
    "quantity": 98,
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
    "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    "category_id": 335
  }]
  