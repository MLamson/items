

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
 items.forEach(function(a){
 	total_value += a.price;
	});
 final_value = total_value/items.length;
 console.log(final_value);

 //Question #1 Second attempt
 var total_all = 0;
	function getAveragePrice(element, index, array) {
  	total_all += element.price;
	}

	items.forEach(getAveragePrice);
 	var average_per = total_all/items.length;
 	average_per = Math.floor(average_per * 100)/100; 
	console.log("The average price is $" + average_per);


 //Question #2
 //Show me how to get an array of items that cost between $14.00 and $18.00 USD
 	var itemRange = items.filter(function(price_range){
 		return (price_range.price > 14 && price_range.price < 18 && price_range.currency_code === 'USD');
 	});
 		console.log("Items that cost between $14.00 USD and $18.00 USD:")
 		itemRange.forEach(function(item){
 		console.log("");
 		console.log(item.title);
 	});


//Question #3
//Show me how find the item with a "GBP" currency code 
//and print its name and price. Please console.log the one you find.

 

 var gbpItem = items.filter(function(isGbp){
 	
 		return isGbp.currency_code === 'GBP';
 	});

 // console.log(gbpItem.currency_code);
		


//Question #4
// Show me how to find which items are made of wood. 
//Please console.log the ones you find.

 var woodWood = items.filter(function(isWood){
 		return isWood.materials.indexOf('wood') > 0;
 		});

 	woodWood.forEach(function(item){
			console.log(item.title);
		});



console.log("#");
//Question #5
//Show me how to find which items are made of eight or more materials. 
//Please console.log the ones you find.
console.log('Question #5')
var totalMats = items.filter(function(isTotal){
 		console.log(isTotal.materials);
 			

 		return isTotal.materials.length >= 8;
 	
 		});

totalMats.forEach(function(item){
	console.log(item.title, item.materials);
});



//Question #6
//Show me how to calculate how many items were made by their sellers

	
 












