const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

for( let c of cart){
   outputClassRow(c)
}
function outputClassRow(thisData){
   document.write('<tr>')
   document.write('<td>' + '<img src="images/'  + thisData.product.filename + '"' + '</td>' )
   document.write('<td>' + thisData.product.title + '</td>')
   document.write('<td>' + thisData.quantity + '</td>')
   document.write('<td>' + thisData.product.price + '</td>')
   document.write('<td>' + calculateTotal(thisData.product.price, thisData.quantity) + '</td>')
   document.write('</tr>')
}
