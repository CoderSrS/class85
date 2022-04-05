canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

rover_width= 100
rover_height= 100
rover_x= 10;
rover_y= 10;
background_Image="mars.jpg"
rover_Image="rover.png"

function add(){
    background_new_img= new Image()
    background_new_img.onload= upload_back_new
    background_new_img.src= background_Image

    rover_new_img= new Image()
    rover_new_img.onload= upload_rover_new
    rover_new_img.src= rover_Image

    }

    function upload_back_new(){
ctx.drawImage(background_new_img,0,0, canvas.width, canvas.height)
    }

    function upload_rover_new(){
        ctx.drawImage(rover_new_img,10,10, rover_width,rover_height )
        
        console.log("uploadingBack")
    }

    window.addEventListener("keydown", my_keydown)

    function my_keydown(e){
        keyPressed=e.keyCode
        console.log("keyPressed" +keyPressed)
        if (keyPressed=="38"){
            up()
        }

        if (keyPressed=="40"){
            down()
        }

        if (keyPressed=="37"){
            left()
        }

        if (keyPressed=="39"){
            right()
        }
    }

    function up(e){
        if (rover_y >= 0){
            rover_y= rover_y-5
            upload_back_new()
            upload_rover_new()
        }
    }

    function down(e){
        if (rover_y <= 600){
            rover_y= rover_y+5
            upload_back_new()
            upload_rover_new()
        }
    }


    function right(e){
        if (rover_x <= 800){
            rover_x= rover_x+5
            upload_back_new()
            upload_rover_new()
            console.log("direction")
        }
    }

    function left(e){
        if (rover_x >= 0){
            rover_x= rover_x-5
            upload_back_new()
            upload_rover_new()
        }
    }