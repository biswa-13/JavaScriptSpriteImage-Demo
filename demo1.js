var c, ctx;
function mergeImg(){
	c=document.getElementById("mycanvas");
	//console.log(c);
	ctx=c.getContext("2d");
	var imageObj1 = new Image();
	var imageObj2 = new Image();
	var imageObj3 = new Image();
	var imageObj4= new Image();
	
	imageObj1.width = imageObj2.width = imageObj3.width = imageObj4.width = "50";
	imageObj1.height = imageObj2.height = imageObj3.height = imageObj4.height = "50";
	imageObj1.src = "resources/images/PDF.JPG"
	imageObj2.src = "resources/images/PPT.JPG";
	imageObj3.src = "resources/images/FILE.JPG";
	imageObj4.src = "resources/images/DOC.JPG";
	console.log(imageObj1);
	console.log(imageObj2);
	console.log(imageObj3);
	console.log(imageObj4);
	ctx.drawImage(imageObj1, 0, 0, 50, 50);
	ctx.drawImage(imageObj2, 40, 0, 50, 50);
	ctx.drawImage(imageObj3,80,0,50,50);
	ctx.drawImage(imageObj4, 120, 0, 50, 50);
	/*imageObj1.onload = function() {
	   ctx.drawImage(imageObj1, 0, 0, 50, 50);
	   imageObj2.onload = function() {
		  ctx.drawImage(imageObj2, 40, 0, 50, 50);
		   imageObj3.onload = function(){
			   ctx.drawImage(imageObj3,80,0,50,50);
			   imageObj4.onload = function(){
				   ctx.drawImage(imageObj4, 120, 0, 50, 50);
				   var img = c.toDataURL("image/png");
				   document.write('<img src="' + img + '" />');
			   };
		   };
		  
	   };
	};*/
	
}
function demergeImg(){
	//console.log(ctx.getImageData(0,0,40,40));
	var img1 = new Image();
	ctx.putImageData = ctx.getImageData(0,0,40,40);
	c.appendChild(ctx);
	console.log(ctx);
	//ctx.drawImage(ctx.getImageData(0,0,40,40));
	//var img1 = ctx.drawImage()
	
}
