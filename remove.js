var product = {
    brandName :"Apple",
    modelName :"Iphone16",
    price :80000,
    rating :4.8,
};
console.log(product);   

delete product.price;

delete product.rating;
console.log(product);