//categoria possui vários produtos => 1:N
class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.products = [];
    }
}

//produto pertence a uma categoria => 1:1
class Products {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class CategoryService {
    constructor() {
        this.categories = [];
        this.nextCategoryId = 0;
    }

    addCategory(name) {
        const id = this.nextCategoryId ++;
        const category = new Category(id, name);
        this.categories.push(category);
    }
}

const categoryList = new CategoryService();

function createCategory() {
    const categoryName = "Doce";

    categoryList.addCategory(categoryName);
    
    console.log(categoryList.categories);
}