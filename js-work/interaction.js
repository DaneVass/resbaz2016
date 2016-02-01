console.log('hello ResBaz2016');

// Interactive recipe

var cat_img = document.getElementById("cat_img")
var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")

// Add an event listener

cat_img.addEventListener("click", meow);

function meow(){
	alert("Meow");
}

// Manipulate HTML element

button1.addEventListener("click", feed);

function eat(){
	alert("The cat is eating.");
}

function feed(){
	cat_img.style.width = (cat_img.offsetWidth + 30.0)+"px";
}

button2.addEventListener("click", diet_cat);

function diet_cat(){
	cat_img.style.width =(cat_img.offsetWidth - 10.0)+"px";
}

//arrays (lists)

 var my_array = [1,3,5];
 console.log(my_array[0]); //like python js uses zero index counting

//objects

var my_cat = {
	name: "fluffy",
	weight: 5.5,
	previous_weights: [4,3,6],
};

console.log(my_cat.name)
console.log(my_cat.previous_weights)

var my_cat2 = {
    weight : 5,
    past_weight_values : [4.5, 5.1, 4.9],
    name : 'Skeletor'
};

var my_cat3 = {
    //weight : 85,
    past_weight_values : [90, 100, 110],
    //name : 'Jabba'
};

my_cat.height = 20.0;

console.log(my_cat.height)

var my_cats = [my_cat,my_cat2,my_cat3];

console.log(my_cats)

//copying arrays in javascript using map function
//inline function to take each array element and return it as 
//an element in the new array
var new_array = my_array.map(function(my_array_element){
	return my_array_element;
}) //map function is buit into every js array inherently

console.log(my_array);
console.log(new_array);
//filter function can be used to create a new array from filtered elements of an array
filtered_array = my_array.filter(function(my_array_element){
	return my_array_element > 1;
})

console.log(filtered_array);

