
let totalCostOfItem=(cartObject)=>{
    let totalCost=0
    for(let i=0;i<cartObject.length;i++){
        let item=cartObject[i]
        let itemCost=item.unitPrice*item.quantity
        totalCost+=itemCost
    }
  return totalCost
}

let cartObject=[
    {unitPrice:10,quantity:6},
    {unitPrice:6,quantity:3},
    {unitPrice: 4, quantity: 2},
];cartObject

let cost=totalCostOfItem(cartObject)

console.log(cost);


