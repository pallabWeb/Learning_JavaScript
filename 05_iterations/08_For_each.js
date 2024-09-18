const nums = [1, 2, 3]

// const total = nums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc}, currval: ${currval}`);
//     return acc + currval
// }, 0)

const total = nums.reduce((acc, currval) => acc + currval, 0)

console.log(total)


const shoppingCart = [
    {
        itemName: 'Milk',
        price: 5
    },
    {
        itemName: 'Bread',
        price: 10
    },
    {
        itemName: 'Eggs',
        price: 20
    },
    {
        itemName: 'Cheese',
        price: 30
    },
    {
        itemName: 'Butter',
        price: 40
    }
]

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(totalPrice)