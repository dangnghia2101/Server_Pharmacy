/**
 * Lấy danh sách các thể loại danh mục
 * @returns data
 */
 const categoryModel = require('./model')


exports.getCategories = async () => {
    // return data;

    const categories = await categoryModel.find();
    return categories;
}


exports.insert = async (category) => {
  // data.push(product);
  const p = new categoryModel(category);
  console.log(category.name, category.description);
  await p.save();
}


exports.delete = async (id) => {
  // data = data.filter(item => item._id != id);
  await categoryModel.findByIdAndDelete(id);
}

/**
 * 
 * spread operator
 * 
 */

exports.update = async (id, category) => {
  await categoryModel.findByIdAndUpdate(id, category);
}

/**
 * 
 * @param {*mã danh mục} id 
 * @returns danh mục
 */

exports.getCategoryById = async (id) => {
    const category = await categoryModel.findById(id)

    return category;
}
