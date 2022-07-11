/*gallery item filter*/

	const filterButton=document.querySelector("#filter-btns").children;
	const items=document.querySelector(".portfolio-gallery").children;



	for (let i=0; i<filterButton.length; i++) {
		filterButton[i].addEventListener("click",function(){
			for(let j=0; j<filterButton.length; j++){
				filterButton[j].classList.remove("active")
			}
			this.classList.add("active");
			const targer=this.getAttribute("data-targer")

			for(let k=0; k<items.length; k++){
				items[k].style.display="none";
				if(targer==items[k].getAttribute("data-id"))
				{
					items[k].style.display="block";
				}
				if(targer=="all")
				{
					items[k].style.display="block";
				}
			}
			
		})

	}

	/*lightbox*/

	const closeLightbox=document.querySelector(".close-lightbox");
	const lightbox=document.querySelector(".lightbox");
	const lightboxImage=lightbox.querySelector("img");


		closeLightbox.addEventListener("click",function() {
			lightbox.classList.remove("show");
			lightbox.classList.add("hide");
		})
			

	const gallery=document.querySelector(".portfolio-gallery");
	const galleryItem=gallery.querySelectorAll(".item");

	galleryItem.forEach(function(element) {
		element.querySelector(".fa-plus").addEventListener("click",function(){
			lightbox.classList.remove("hide");
			lightbox.classList.add("show");
			lightboxImage.src=element.querySelector("img").getAttribute("src")
		})
	})




/*Testimonials*/


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activee", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activee";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



/*header fixed*/

window.onscroll=function(){
	const docScrollTop=document.documentElement.scrollTop;

	if(window.innerWidth>991){
		if(docScrollTop>100){
			document.querySelector("header").classList.add("fixed")
		}
		else{
			document.querySelector("header").classList.remove("fixed")
		}
	}
}


/*navbar*/

const navbar = document.querySelector(".navbar");
	a = navbar.querySelectorAll("a");
	a.forEach(function(element){
		element.addEventListener("click",function(){
			for(let i=0; i<a.length; i++){
				a[i].classList.remove("active");
			}
			this.classList.add("active");
			document.querySelector(".navbar").classList.toggle("show");
		})
	})

/*ham-burger*/

const hamBurger=document.querySelector(".ham-burger");

hamBurger.addEventListener("click",function(){
	document.querySelector(".navbar").classList.toggle("show");
})