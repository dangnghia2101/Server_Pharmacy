

const categoryService = require('./service')

exports.getCategories = async () => {

    let categories = await categoryService.getCategories();
    categories = categories.map((item, index) => {

        item = {
            _id: item._id,
            name: item.name,
            description: item.description,
            index: index + 1,
        }
        return item;
    })
    return categories;
}

exports.getCategoryById = async (id) => {
    return await categoryService.getCategoryById(id);
}

exports.getCategoriesForOneProduct = async (selectedId) => {
    let categories = await categoryService.getCategories();
    categories = categories.map((item, index) => {
        // if(item._id == selectedId) {
        //     item = {...item, selected: true}
        // }else{
        //     item = {...item, selected: false}
        // }
        // return item;

        item = {
            _id: item._id,
            name: item.name,
            description: item.description,
            index: index + 1,
            selected: item._id.toString() == selectedId.toString()
        }
        return item;
    })
    return categories;
}

exports.insert = async (body) => {
    await categoryService.insert(body)
}

exports.delete = async (id) => {
    await categoryService.delete(id);
}

exports.update = async (id, category) => {
    await categoryService.update(id, category)
}

