const items = [
  {
    uuid: 1,
    name: "Awesome Tofu Roast",
    price: 14,
    quantity: 1,
  },
  {
    uuid: 2,
    name: "Vegan Ham Sandwich",
    price: 12,
    quantity: 1,
  },
];

const copiedItems = items;

const val = copiedItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

console.log(items);
console.log(copiedItems);
console.log(val);

console.log(Object.is(items, copiedItems));
console.log(items === copiedItems);
