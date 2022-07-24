canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

main_width = 300;
main_height = 100;

img_width = 200;
img_height = 200;

var img_image, main_image;

img_x = 200;
img_y = 120;

main_x = 150;
main_y = 20;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploading; // setting a function, onloading this variable
	img_imgTag.src = img_image; // load image

	main_imgTag = new Image();
	main_imgTag.onload = uploading();
	main_imgTag.src = main_image;
}

function uploading() {
	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);

	ctx.drawImage(main_imgTag,main_x,main_y,main_width,main_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	console.log(keyPressed);

	//ALPHABET
	if ((keyPressed >= 97 && keyPressed <= 122) || (keyPressed >= 65 && keyPressed <= 90)) {
		aplhabetkey();
		if(keyPressed == 65 || keyPressed == 97){ //Aa
			img_image = "a.jpeg";
			add();
		}
		else if(keyPressed == 66 || keyPressed == 98){ //Bb
			img_image = "b.jpeg";
			add();
		}
		else if(keyPressed == 67 || keyPressed == 99){ //Cc
			img_image = "c.jpeg";
			add();
		}
		else if(keyPressed == 68 || keyPressed == 100){ //Dd
			img_image = "d.jpeg";
			add();
		}
		else if(keyPressed == 69 || keyPressed == 101){ //Ee
			img_image = "e.jpeg";
			add();
		}
		else if(keyPressed == 70 || keyPressed == 102){ //Ff
			img_image = "f.jpeg";
			add();
		}
		else if(keyPressed == 71 || keyPressed == 103){ //Gg
			img_image = "g.jpeg";
			add();
		}
		else if(keyPressed == 72 || keyPressed == 104){ //Hh
			img_image = "h.jpeg";
			add();
		}
		else if(keyPressed == 73 || keyPressed == 105){ //Ii
			img_image = "i.jpeg";
			add();
		}
		else if(keyPressed == 74 || keyPressed == 106){ //Jj
			img_image = "j.jpeg";
			add();
		}
		else if(keyPressed == 75 || keyPressed == 107){ //Kk
			img_image = "k.jpeg";
			add();
		}
		else if(keyPressed == 76 || keyPressed == 108){ //Ll
			img_image = "l.jpeg";
			add();
		}
		else if(keyPressed == 77 || keyPressed == 109){ //Mm
			img_image = "m.jpeg";
			add();
		}
		else if(keyPressed == 78 || keyPressed == 110){ //Nn
			img_image = "n.jpeg";
			add();
		}
		else if(keyPressed == 79 || keyPressed == 111){ //Oo
			img_image = "o.jpeg";
			add();
		}
		else if(keyPressed == 80 || keyPressed == 112){ //Pp
			img_image = "p.jpeg";
			add();
		}
		else if(keyPressed == 81 || keyPressed == 113){ //Qq
			img_image = "q.jpeg";
			add();
		}
		else if(keyPressed == 82 || keyPressed == 114){ //Rr
			img_image = "r.jpeg";
			add();
		}
		else if(keyPressed == 83 || keyPressed == 115){ //Ss
			img_image = "s.jpeg";
			add();
		}
		else if(keyPressed == 84 || keyPressed == 116){ //Tt
			img_image = "t.jpeg";
			add();
		}
		else if(keyPressed == 85 || keyPressed == 117){ //Uu
			img_image = "u.jpeg";
			add();
		}
		else if(keyPressed == 86 || keyPressed == 118){ //Vv
			img_image = "v.jpeg";
			add();
		}
		else if(keyPressed == 87 || keyPressed == 119){ //Ww
			img_image = "w.jpeg";
			add();
		}
		else if(keyPressed == 88 || keyPressed == 120){ //Xx
			img_image = "x.jpeg";
			add();
		}
		else if(keyPressed == 89 || keyPressed == 121){ //Yy
			img_image = "y.jpeg";
			add();
		}
		else if(keyPressed == 90 || keyPressed == 122){ //Zz
			img_image = "z.jpeg";
			add();
		}
		document.getElementById("d1").innerHTML = "You pressed alphabet key";
	}

	//NUMBER
	else if(keyPressed >= 48 && keyPressed <= 57) {
		numberkey();
		if(keyPressed == 48){ //0
			img_image = "0.jpeg";
			add();
		}
		else if(keyPressed == 49){ //1
			img_image = "1.jpeg";
			add();
		}
		else if(keyPressed == 50){ //2
			img_image = "2.jpeg";
			add();
		}
		else if(keyPressed == 51){ //3
			img_image = "3.jpeg";
			add();
		}
		else if(keyPressed == 52){ //4
			img_image = "4.jpeg";
			add();
		}
		else if(keyPressed == 53){ //5
			img_image = "5.jpeg";
			add();
		}
		else if(keyPressed == 54){ //6
			img_image = "6.png";
			add();
		}
		else if(keyPressed == 55){ //7
			img_image = "7.jpeg";
			add();
		}
		else if(keyPressed == 56){ //8
			img_image = "8.jpeg";
			add();
		}
		else if(keyPressed == 57){ //9
			img_image = "9.png";
			add();
		}
		document.getElementById("d1").innerHTML = "You pressed a number key"
	}

	//ARROW
	else if(keyPressed >= 37 && keyPressed <= 40) {
		arrowkey();
		if(keyPressed == 37){ //left
			img_image = "left.jpeg";
			add();
		}
		else if(keyPressed == 38){ //up
			img_image = "up.png";
			add();
		}
		else if(keyPressed == 39){ //right
			img_image = "right.png";
			add();
		}
		else if(keyPressed == 40){ //down
			img_image = "down.png";
			add();
		}
		document.getElementById("d1").innerHTML = "You pressed an arrow key"
	}

	//SYMBOL OR OTHER 
	else {	
		otherkey();
		document.getElementById("d1").innerHTML = "You pressed symbol or other key";
	}
}

function aplhabetkey() {
	main_image = "alpkey.png";
	add();
}

function numberkey() {
	main_image = "numkey.png";
	add();
}

function arrowkey() {
	main_image = "Arrkey.png";
	add();
}

function otherkey() {
	main_image = "otherkey.png";
	img_image = "other.jpeg";
	add();
}