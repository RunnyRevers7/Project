var balloon, background;
function preload() {
  backgroundImg = loadImage("images/1.png")
  balloonImage = loadAnimation("images/2.png", "images/3.png", "images/4.png");
}

function setup(){
   database = firebase.database();
   console.log(database);
    createCanvas(500,500);

balloon = createSprite (100,400, 20, 20)
  balloon.addAnimation("balloon", balloonImage);
  balloon.scale = 0.4;


}

function draw(){

    background(backgroundImg);
  
        if(keyDown(LEFT_ARROW)){
            balloon.x = balloon.x - 10;
        }
        else if(keyDown(RIGHT_ARROW)){
            balloon.x = balloon.x + 10;
        }
        else if(keyDown(UP_ARROW)){
            balloon.y = balloon.y - 10;
        }
        else if(keyDown(DOWN_ARROW)){
             balloon.y = balloon.y + 10;
        }
        drawSprites();
    }

    function updateHieght(x,y){
        database.ref('balloon/hieght').set({
            'x': hieght = x+x ,
            'y': hieght = y+y
        }) 
    }

    function readHieght(data){
        hieght = data.val();
        balloon.x = hieght.x;
        balloon.y = hieght.y;
    }

    function showError(){
console.log("Error in writing to the database");
    }


