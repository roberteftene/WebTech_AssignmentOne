function removeOrderItem(orderInfo, position) {

    // Validate 'items' to be an 'array' 
    // Validate position to be valid
    if (!Array.isArray(orderInfo.items)) {
        throw 'Items should be an array'
    } else if (position > orderInfo.items.length) {
        throw 'Invalid position'
    } 

    // Validate each object from items array
    orderInfo.items.forEach(element => {
        if(!(element.hasOwnProperty('price') && element.hasOwnProperty('quantity')))
        throw 'Malformed item'
    });

    // Remove the item from the input position
    orderInfo.items.splice(position,1)
    
    //Update the total
    orderInfo.total = 0;
    orderInfo.items.forEach(element => {
        orderInfo.total += element.price * element.quantity;
    })
   
    //Return the updated object
    return orderInfo;
    
}

const app = {
    removeOrderItem
};

module.exports = app;