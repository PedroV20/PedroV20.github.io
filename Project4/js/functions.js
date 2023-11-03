/* define your functions here */
// <script type ="text/JavaScript" scr="js/data.js"></script>
/*
q = quantity;
c = price;
p = title;
calculateSub(3 * calculateTotal)
calculateTotal(q * c);
 for( let c of cart){
    outputClassRow(c)
 }

*/

function calculateTotal(p, q) {
    return p * q;
}

function calculateSubTotal(cart){
    let SubTotal = 0;
    for (const item of cart){
    const price = item.product.price; 
    const quantity = item.quantity;
    const itemSubTotal = price * quantity;
    SubTotal = itemSubTotal + SubTotal;
    }
    return SubTotal;
}
function calculateTax(tax_rate){
   const SubTotal = calculateSubTotal(cart);
    return SubTotal * tax_rate;
}
function calculateShipping(shipping_threshold){
    const SubTotal = calculateSubTotal(cart);

    if (SubTotal < shipping_threshold) {
        return 40;
    }
    else {
        return 0;
    }
}
function calculateGrandTotal(){

    const SubTotal = calculateSubTotal(cart);
    const Tax = calculateTax(tax_rate);
    const Shipping = calculateShipping(shipping_threshold);

    return SubTotal + Tax + Shipping;
}
