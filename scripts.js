//moving image upper banner

var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'halfCirclesewing.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'half_circle.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'halfCirclesewing.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'half_circle.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'halfCirclesewing.jpg';

function nextImage(){
    var img = document.getElementById("mainImage");
    for(var i = 0; i < imgArray.length;i++){
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){
                document.getElementById("mainImage").src = imgArray[0].src;
                break;
            }
            document.getElementById("mainImage").src = imgArray[i+1].src;
            break;
        }
    }
}
function previousImage(){
    var img = document.getElementById("mainImage");
    for(var i = imgArray.length-1; i >=0 ;i--){
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){
                document.getElementById("mainImage").src = imgArray[4].src;
                break;
            }
            document.getElementById("mainImage").src = imgArray[i-1].src;
            break;
        }
    }
}
//dress ankara functions
var imgArray4 = new Array();

imgArray4[0] = new Image();
imgArray4[0].src = 'ankara1.jpg';

imgArray4[1] = new Image();
imgArray4[1].src = 'ankara2.jpg';

imgArray4[2] = new Image();
imgArray4[2].src = 'ankara3.jpg';

imgArray4[3] = new Image();
imgArray4[3].src = 'ankara4.jpg';

imgArray4[4] = new Image();
imgArray4[4].src = 'ankara1.jpg';

function nextImageankara(){
    var img = document.getElementById("mainImage4");
    for(var i = 0; i < imgArray4.length;i++){
        if(imgArray4[i].src == img.src){
            if(i === imgArray4.length){
                document.getElementById("mainImage4").src = imgArray4[0].src;
                break;
            }
            document.getElementById("mainImage4").src = imgArray4[i+1].src;
            break;
        }
    }
}
function previousImageankara(){
    var img = document.getElementById("mainImage4");
    for(var i = imgArray4.length-1; i >=0 ;i--){
        if(imgArray4[i].src == img.src){
            if(i === imgArray4.length){
                document.getElementById("mainImage4").src = imgArray4[4].src;
                break;
            }
            document.getElementById("mainImage4").src = imgArray4[i-1].src;
            break;
        }
    }
}
//colourful ankara dress function
var imgArray7 = new Array();

imgArray7[0] = new Image();
imgArray7[0].src = 'colourfulankara1.jpg';

imgArray7[1] = new Image();
imgArray7[1].src = 'colourfulankara2.jpg';

imgArray7[2] = new Image();
imgArray7[2].src = 'colourfulankara1.jpg';

imgArray7[3] = new Image();
imgArray7[3].src = 'colourfulankara2.jpg';

imgArray7[4] = new Image();
imgArray7[4].src = 'colourfulankara1.jpg';

function nextcolourfulankara(){
    var img = document.getElementById("mainImage7");
    for(var i = 0; i < imgArray7.length;i++){
        if(imgArray7[i].src == img.src){
            if(i === imgArray7.length){
                document.getElementById("mainImage7").src = imgArray7[0].src;
                break;
            }
            document.getElementById("mainImage7").src = imgArray7[i+1].src;
            break;
        }
    }
}
function previouscolourfulankara(){
    var img = document.getElementById("mainImage7");
    for(var i = imgArray7.length-1; i >=0 ;i--){
        if(imgArray7[i].src == img.src){
            if(i === imgArray7.length){
                document.getElementById("mainImage7").src = imgArray7[4].src;
                break;
            }
            document.getElementById("mainImage7").src = imgArray7[i-1].src;
            break;
        }
    }
}

//birthday dress ankara function
var imgArray6 = new Array();

imgArray6[0] = new Image();
imgArray6[0].src = 'birthdaydress1.jpeg';

imgArray6[1] = new Image();
imgArray6[1].src = 'birthdaydress2.jpeg';

imgArray6[2] = new Image();
imgArray6[2].src = 'birthdaydress3.jpeg';

imgArray6[3] = new Image();
imgArray6[3].src = 'birthdaydress2.jpeg';

imgArray6[4] = new Image();
imgArray6[4].src = 'birthdaydress3.jpeg';

function nextbirthdaydress(){
    var img = document.getElementById("mainImage6");
    for(var i = 0; i < imgArray6.length;i++){
        if(imgArray6[i].src == img.src){
            if(i === imgArray6.length){
                document.getElementById("mainImage6").src = imgArray6[0].src;
                break;
            }
            document.getElementById("mainImage6").src = imgArray6[i+1].src;
            break;
        }
    }
}
function previousbirthdaydress(){
    var img = document.getElementById("mainImage6");
    for(var i = imgArray6.length-1; i >=0 ;i--){
        if(imgArray6[i].src == img.src){
            if(i === imgArray6.length){
                document.getElementById("mainImage6").src = imgArray6[4].src;
                break;
            }
            document.getElementById("mainImage6").src = imgArray6[i-1].src;
            break;
        }
    }
}

//dress whitebrownankara function
var imgArray5 = new Array();

imgArray5[0] = new Image();
imgArray5[0].src = 'mumsykings/ankara_whitebrown1.jpeg';

imgArray5[1] = new Image();
imgArray5[1].src = 'mumsykings/ankara_whitebrown2.jpeg';

imgArray5[2] = new Image();
imgArray5[2].src = 'mumsykings/ankara_whitebrown3.jpeg';

imgArray5[3] = new Image();
imgArray5[3].src = 'mumsykings/ankara_whitebrown4.jpeg';

imgArray5[4] = new Image();
imgArray5[4].src = 'mumsykings/ankara_whitebrown1.jpeg';

function nextwhitebrown(){
    var img = document.getElementById("mainImage5");
    for(var i = 0; i < imgArray5.length;i++){
        if(imgArray5[i].src == img.src){
            if(i === imgArray5.length){
                document.getElementById("mainImage5").src = imgArray5[0].src;
                break;
            }
            document.getElementById("mainImage5").src = imgArray5[i+1].src;
            break;
        }
    }
}
function previouswhitebrown(){
    var img = document.getElementById("mainImage5");
    for(var i = imgArray5.length-1; i >=0 ;i--){
        if(imgArray5[i].src == img.src){
            if(i === imgArray5.length){
                document.getElementById("mainImage5").src = imgArray5[4].src;
                break;
            }
            document.getElementById("mainImage5").src = imgArray5[i-1].src;
            break;
        }
    }
}


//dress brown functions
var imgArray1 = new Array();

imgArray1[0] = new Image();
imgArray1[0].src = 'mumsykings/brown1.jpg';

imgArray1[1] = new Image();
imgArray1[1].src = 'mumsykings/brown2.jpg';

imgArray1[2] = new Image();
imgArray1[2].src = 'mumsykings/brown3.jpg';

imgArray1[3] = new Image();
imgArray1[3].src = 'mumsykings/brown4.jpg';

imgArray1[4] = new Image();
imgArray1[4].src = 'mumsykings/brown1.jpg';

function nextImagebrown(){
    var img = document.getElementById("mainImage1");
    for(var i = 0; i < imgArray1.length;i++){
        if(imgArray1[i].src == img.src){
            if(i === imgArray1.length){
                document.getElementById("mainImage1").src = imgArray1[0].src;
                break;
            }
            document.getElementById("mainImage1").src = imgArray1[i+1].src;
            break;
        }
    }
}
function previousImagebrown(){
    var img = document.getElementById("mainImage1");
    for(var i = imgArray1.length-1; i >=0 ;i--){
        if(imgArray1[i].src == img.src){
            if(i === imgArray1.length){
                document.getElementById("mainImage1").src = imgArray1[4].src;
                break;
            }
            document.getElementById("mainImage1").src = imgArray1[i-1].src;
            break;
        }
    }
}

//purple dress functions
var imgArray2 = new Array();

imgArray2[0] = new Image();
imgArray2[0].src = 'mumsykings/purple1.jpg';

imgArray2[1] = new Image();
imgArray2[1].src = 'mumsykings/purple2.jpg';

imgArray2[2] = new Image();
imgArray2[2].src = 'mumsykings/purple3.jpg';

imgArray2[3] = new Image();
imgArray2[3].src = 'mumsykings/purple4.jpg';

imgArray2[4] = new Image();
imgArray2[4].src = 'mumsykings/purple1.jpg';

function nextImagepurple(){
    var img = document.getElementById("mainImage2");
    for(var i = 0; i < imgArray2.length;i++){
        if(imgArray2[i].src == img.src){
            if(i === imgArray2.length){
                document.getElementById("mainImage2").src = imgArray2[0].src;
                break;
            }
            document.getElementById("mainImage2").src = imgArray2[i+1].src;
            break;
        }
    }
}
function previousImagepurple(){
    var img = document.getElementById("mainImage2");
    for(var i = imgArray2.length-1; i >=0 ;i--){
        if(imgArray2[i].src == img.src){
            if(i === imgArray2.length){
                document.getElementById("mainImage2").src = imgArray2[4].src;
                break;
            }
            document.getElementById("mainImage2").src = imgArray2[i-1].src;
            break;
        }
    }
}
//third dress functions
var imgArray3 = new Array();

imgArray3[0] = new Image();
imgArray3[0].src = 'mumsykings/colpinkful1.jpg';

imgArray3[1] = new Image();
imgArray3[1].src = 'mumsykings/colpinkful2.jpg';

imgArray3[2] = new Image();
imgArray3[2].src = 'mumsykings/colpinkful3.jpg';

imgArray3[3] = new Image();
imgArray3[3].src = 'mumsykings/colpinkful4.jpg';

imgArray3[4] = new Image();
imgArray3[4].src = 'mumsykings/colpinkful1.jpg';

function nextImagecolpinkful(){
    var img = document.getElementById("mainImage3");
    for(var i = 0; i < imgArray3.length;i++){
        if(imgArray3[i].src == img.src){
            if(i === imgArray3.length){
                document.getElementById("mainImage3").src = imgArray3[0].src;
                break;
            }
            document.getElementById("mainImage3").src = imgArray3[i+1].src;
            break;
        }
    }
}
function previousImagecolpinkful(){
    var img = document.getElementById("mainImage3");
    for(var i = imgArray3.length-1; i >=0 ;i--){
        if(imgArray3[i].src == img.src){
            if(i === imgArray3.length){
                document.getElementById("mainImage3").src = imgArray3[4].src;
                break;
            }
            document.getElementById("mainImage3").src = imgArray3[i-1].src;
            break;
        }
    }
}
