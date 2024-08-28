function changeImage1() {        
    document.getElementById("imgClickAndChange").src = "leaf1.png";
    document.getElementById("center-text").src = "ip1.png";
    document.getElementById("content1").style.display = "none";
    document.getElementById("content2").style.display = "none";
    document.getElementById("content3").style.display = "none";
    document.getElementById("content4").style.display = "none";
    document.getElementById("center-text2").style.visibility = "visible";

}

function changeImage2() {        
        document.getElementById("imgClickAndChange").src = "leaf2.png";
        document.getElementById("center-text").src = "ip2.png";
        document.getElementById("content1").style.display = "flex";
        document.getElementById("content2").style.display = "none";
        document.getElementById("content3").style.display = "none";
        document.getElementById("content4").style.display = "none";
        document.getElementById("center-text2").style.visibility = "hidden";

}

function changeImage3() {        
    document.getElementById("imgClickAndChange").src = "leaf3.png";
    document.getElementById("center-text").src = "ip3.png";
    document.getElementById("content1").style.display = "none";
    document.getElementById("content2").style.display = "block";
    document.getElementById("content3").style.display = "none";
    document.getElementById("content4").style.display = "none";
    document.getElementById("center-text2").style.visibility = "hidden";
    
}

function changeImage4() {        
    document.getElementById("imgClickAndChange").src = "leaf4.png";
    document.getElementById("center-text").src = "ip4.png";
    document.getElementById("content1").style.display = "none";
    document.getElementById("content2").style.display = "none";
    document.getElementById("content3").style.display = "flex";
    document.getElementById("content4").style.display = "none";
    document.getElementById("center-text2").style.visibility = "hidden";
    
   
}
function changeImage5() {        
    document.getElementById("imgClickAndChange").src = "leaf5.png";
    document.getElementById("center-text").src = "ip5.png";
    document.getElementById("content1").style.display = "none";
    document.getElementById("content2").style.display = "none";
    document.getElementById("content3").style.display = "none";
    document.getElementById("content4").style.display = "flex";
    document.getElementById("center-text2").style.visibility = "hidden";
}

var gallery = document.querySelector('.gallery');
var galleryItems = document.querySelectorAll('.gallery-item');
var numOfItems = gallery.children.length;
var itemWidth = 23; // percent: as set in css

var featured = document.querySelector('.featured-item');

var leftBtn = document.querySelector('.move-btn.left');
var rightBtn = document.querySelector('.move-btn.right');
var leftInterval;
var rightInterval;

var scrollRate = 0.2;
var left;

function selectItem(e) {
	if (e.target.classList.contains('active')) return;
	
	featured.style.backgroundImage = e.target.style.backgroundImage;
	
	for (var i = 0; i < galleryItems.length; i++) {
		if (galleryItems[i].classList.contains('active'))
			galleryItems[i].classList.remove('active');
	}
	
	e.target.classList.add('active');
}

function galleryWrapLeft() {
	var first = gallery.children[0];
	gallery.removeChild(first);
	gallery.style.left = -itemWidth + '%';
	gallery.appendChild(first);
	gallery.style.left = '0%';
}

function galleryWrapRight() {
	var last = gallery.children[gallery.children.length - 1];
	gallery.removeChild(last);
	gallery.insertBefore(last, gallery.children[0]);
	gallery.style.left = '-23%';
}

function moveLeft() {
	left = left || 0;

	leftInterval = setInterval(function() {
		gallery.style.left = left + '%';

		if (left > -itemWidth) {
			left -= scrollRate;
		} else {
			left = 0;
			galleryWrapLeft();
		}
	}, 1);
}

function moveRight() {
	//Make sure there is element to the leftd
	if (left > -itemWidth && left < 0) {
		left = left  - itemWidth;
		
		var last = gallery.children[gallery.children.length - 1];
		gallery.removeChild(last);
		gallery.style.left = left + '%';
		gallery.insertBefore(last, gallery.children[0]);	
	}
	
	left = left || 0;

	leftInterval = setInterval(function() {
		gallery.style.left = left + '%';

		if (left < 0) {
			left += scrollRate;
		} else {
			left = -itemWidth;
			galleryWrapRight();
		}
	}, 1);
}

function stopMovement() {
	clearInterval(leftInterval);
	clearInterval(rightInterval);
}

leftBtn.addEventListener('mouseenter', moveLeft);
leftBtn.addEventListener('mouseleave', stopMovement);
rightBtn.addEventListener('mouseenter', moveRight);
rightBtn.addEventListener('mouseleave', stopMovement);


//Start this baby up
(function init() {
	var images = [
		'https://images.unsplash.com/photo-1599067899479-9956c06f9ca9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
		'https://images.unsplash.com/photo-1542234161-b0394bb94542?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80g',
		'https://images.unsplash.com/photo-1525247862234-30193931fdf7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
		'https://images.unsplash.com/photo-1599067897079-aedd464866d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
		'https://images.unsplash.com/photo-1621014882299-9ec639c125f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
		'https://images.unsplash.com/photo-1588908933351-eeb8cd4c4521?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
		'https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
		'https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
		'https://images.unsplash.com/photo-1518564747095-d2fbe4b452b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
		'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
	];
	
	//Set Initial Featured Image
	featured.style.backgroundImage = 'url(' + images[0] + ')';
	
	//Set Images for Gallery and Add Event Listeners
	for (var i = 0; i < galleryItems.length; i++) {
		galleryItems[i].style.backgroundImage = 'url(' + images[i] + ')';
		galleryItems[i].addEventListener('click', selectItem);
	}
})();
