// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'product_id',
});

// Categories have many Products
Category.belongsToMany(Product, {
  through: {
    model: Product,
    unique: false
  },
  //I must define an alias when retriving this data
  as: 'all_products_by_category'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },

  as: 'all_products_by_tag'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },

  as: 'all_tags_by_producttag'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
