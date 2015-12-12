/**
 * @author Andrew
 * Left some slideshow timing code in; ended up not wanting to use
 */
var interval=3500; /*1000=1s*/
var random=0;
var images="images/";
var imageNum=0;


imageArray=new Array();

imageArray[imageNum++]=new imageItem(images+"frog.jpg");
imageArray[imageNum++]=new imageItem(images+"hawaii.jpg");
imageArray[imageNum++]=new imageItem(images+"pig.jpg");
imageArray[imageNum++]=new imageItem(images+"venus.jpg");
imageArray[imageNum++]=new imageItem(images+"earthspace.jpg");

var totalimages=imageArray.length;

function imageItem(image_location){
	this.image_item=new Image();
	this.image_item.src=image_location;
}

function get_imageItemloc(imageObj){
	return(imageObj.image_item.src);
}

function randNum(x,y){
	var range = y-x+1;
	return Math.floor(Math.random()*range)+x;
}

function nextImage(){
	if(random){
		imageNum=randNum(0,totalimages);
	}
	else{
		imageNum = (imageNum+1)%totalimages;
	}
	var new_image=get_imageItemloc(imageArray[imageNum]);
	return(new_image);	
}

function findPrev(){
	if(imageNum-1<0){
		imageNum=totalimages-1;
	}
	else{
		imageNum=(imageNum-1)%totalimages;
	}
	var new_image=get_imageItemloc(imageArray[imageNum]);
	return(new_image);
}

function prevImage(place){
	var new_image=findPrev();
	document[place].src=new_image;
}

function changeImage(place){
	var new_image=nextImage();
	document[place].src=new_image;
	var recur_call="changeImage('"+place+"')";
	timerID=setTimeout(recur_call, interval);
}

