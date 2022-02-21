// let box;
// console.log(typeof (box));

// box = 'Hello World!';
// console.log(typeof (box));

// box = 100;
// console.log(typeof (box));

interface Product {
    id: number,
    name: string,
    price: number
};

function getProduct(id: number): Product {
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
    }
}

const showProduct = (name: string, price: number) => {
    console.log(`The product ${name} cost ${price}$.`)
};

const product = getProduct(1);
showProduct(product.name, product.price);