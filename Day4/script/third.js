let shoppingList = ['Pen','Pencil','Book','Tshirt','Jeans'];
console.log("Shopping List");
for(let i=0;i<shoppingList.length;i++){
    console.log(shoppingList[i]);
}

let shop_basket = new Array();
shop_basket = shoppingList;
shop_basket.push("Laptop");
shop_basket.push("Shoes");
shop_basket.push("Chair");
shop_basket.push("Table");

console.log("Shop Basket New List");
for(let i=0;i<shop_basket.length;i++){
    console.log(shop_basket[i]);
}