// let box;
// console.log(typeof (box));
;
function getProduct(id) {
    return {
        id: id,
        name: "Awesome Gadget ".concat(id),
        price: 99.5
    };
}
var showProduct = function (name, price) {
    console.log("The product ".concat(name, " cost ").concat(price, "$."));
};
var product = getProduct(1);
showProduct(product.name, product.price);
