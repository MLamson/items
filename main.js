

//array.map(), array.reduce(), array.forEach, and array.filter() 

// items.price.forEach(callback(a,b){
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// });

//arr.forEach(callback[, thisArg])
 // var price_value;
 // price_value = items.price.forEach(callback [a,b]);
 // var total_price;

 // items.forEach(function(a) {
 // total_price = items.price;
 //    console.log(a);
 //  });

 // propNames.forEach(function(name) {
 //    var desc = Object.getOwnPropertyDescriptor(o, name);
 //    Object.defineProperty(copy, name, desc);
 //  });

//Question #1
//Show me how to calculate the average price of all items. Please console.log the average.
//The average price is $23.62
 var total_value = 0;
 var final_value = 0;
 items.filter(function(a){
 	total_value += a.price;
	});
 final_value = total_value/items.length;
 console.log(final_value);


 //Question #2
 //Show me how to get an array of items that cost between $14.00 and $18.00 USD
 
 	items.filter(function(item){
 		if(items.price >= 14 && items.price <= 18){
 			return item;
 			console.log(item);
 		}
 	});



















