function foodgen(){
var prefixFood = ["Cheese","Chicken","Paneer","Mushroom","Chilli","Chocolate","Mayonnaise","Schezwan","Gobi","Aloo","Egg","Hash","Waffles","Baby Corn","Oreo","Tandoori","Ice Cream","Butter","Tawa","Jain","Masala","Mix Veg","Chinese","Pineapple","Kolhapuri","Chef's Special","Shahi","Pan","Murgh","Strawberry"];
var postfixFood = ["Sandwich","Pasta","Pizza","Burger","Fries","Manchurian","Noodles","Jalebi","Biryani","Shake","Momos","Rolls","Candy","Rice","Paratha","Dal","Khakra","Bhel","Shawarma","Tadka","Brownies","Puri","Pav","Tikka","Kabab","Kofta","Halwa","Khichdi","Vada","Soup"];
var pre1 = Math.floor(Math.random() * 30);
var post1 = Math.floor(Math.random() * 30);
var a = prefixFood[pre1];
var b = postfixFood[post1];
var c = a + " " + b ;
document.getElementById("answer").innerHTML= c;
}