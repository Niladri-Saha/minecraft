var canvas=new fabric.Canvas('myCanvas');
block_img_width=30;
block_img_height=30;
player_x=block_img_height;
player_y=block_img_height;
var player_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);    
    });
}
function new_img(get_img){
    fabric.Image.fromURL(get_img,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_img_width);
        block_object.scaleToHeight(block_img_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);    
    });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){ 
    keypressed=e.keyCode;
    console.log(keypressed);
    if (e.shiftKey ==true && keypressed=='80'){
        console.log("P+shift");
        block_img_width=block_img_width+block_img_height;
        block_img_height=block_img_height+block_img_height;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if (e.shiftKey  && keypressed=='77'){
        console.log("M+shift");
        block_img_width=block_img_width-block_img_height;
        block_img_height=block_img_height-block_img_height;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(keypressed=='38'){
       up();
        console.log("up arrow key");
    }
    if(keypressed=='40'){
        down();
        console.log("down arrow key");
    }
    if(keypressed=='37'){
        left();
        console.log("left arrow key");
    }
    if(keypressed=='39'){
        right();
        console.log("right arrow key");
    }
    if(keypressed=='87'){
        new_img('wall.jpg');
        console.log("w");
    }
    if(keypressed=='71'){
        new_img('ground.png');
        console.log("g");
    }
    if(keypressed=='76'){
        new_img('light_green.png');
        console.log("l");
    }
    if(keypressed=='84'){
        new_img('trunk.jpg');
        console.log("t");
    }
    if(keypressed=='82'){
        new_img('roof.jpg');
        console.log("r");
    }
    if(keypressed=='89'){
        new_img('yellow_wall.png');
        console.log("y");
    }
    if(keypressed=='68'){
        new_img('dark_green.png');
        console.log("d");
    }
    if(keypressed=='85'){
        new_img('unique.png');
        console.log("u");
    }
    if(keypressed=='67'){
        new_img('cloud.jpg');
        console.log("c");
    }
}
function up(){
    if(player_y>=0){
        player_y=player_y-block_img_height;
        console.log("When up arrow is pressed, x="+player_x+"| y="+player_y);
        canvas.remove(player_object);
    player_update();
        
    }
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_img_height;
        console.log("When down arrow is pressed x="+player_x+"| y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x>=0){
        player_x=player_x-block_img_width;
        console.log("When left arrow is pressed x="+player_x+"| y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<=850){
        player_x=player_x+block_img_width;
        console.log("When right arrow is pressed x="+player_x+"| y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}