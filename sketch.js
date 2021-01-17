//Create variables here
var dog
var happyDog,dogImage
var database
var FoodS
var Foodstock
function preload()
{
  dogImage=loadImage("images/dogimg.png");
  happydog=loadImage("images/dogimg1.png");
}

function setup() {
  createCanvas(1000,1000);
  database=firebase.database();
  foodstock=database.ref("Food");
  foodstock.on("value",readStock);
  dog= createSprite(450,450);
  dog.addImage(dogImage);
  dog.scale=0.60
}


function draw() {  
background("Blue")
textSize(15);
text("food remaining"+FoodS,200,20)
  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writestock(FoodS);
    dog.addImage(happydog)
  }
 
}
function readStock(data){
  FoodS=data.val();
}
function writestock(x){
  if(x<=0){
    x=0
  }
  else {
    x=x-1
  }
  database.ref('/').update({
    Food: x
  })
}



