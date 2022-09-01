// const imgs = document.querySelectorAll(".service-example img");
// const leftArrow = document.querySelector(".paginate.left");
// const rightArrow = document.querySelector(".paginate.right");

// let currentIndex = 0;
// let time = 5000; // default time for auto slideshow

// const defClass = (startPos, index) => {
//     for (let i = startPos; i < imgs.length; i++) {
//         imgs[i].style.display = "none";
//     }
//     imgs[index].style.display = "block";
// };

//     defClass(1, 0);

//     leftArrow.addEventListener("click", function(){
//         currentIndex <= 0 ? currentIndex = imgs.length-1 : currentIndex--;
//         defClass(0, currentIndex);
//     });

//     rightArrow.addEventListener("click", function(){
//         currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
//         defClass(0, currentIndex);
//     });

//     const startAutoSlide = () => {
//         setInterval(() => {
//             currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
//             defClass(0, currentIndex);
//         }, time);
//     };

// startAutoSlide(); 









// ***
// var pr = document.querySelector( '.paginate.left' );
// var pl = document.querySelector( '.paginate.right' );

// var container = document.getElementsByClassName('.service-example');


// pr.onclick = slide.bind( this, -1 );
// pl.onclick = slide.bind( this, 1 );


// ****
// pr.addEventListener('click', function () {
// 	container.w3.slideshow('.service-img', 0).bind(this, -1);
// });
// pl.addEventListener('click', function () {
// 	container.w3.slideshow('.service-img', 0).bind(this, 1);
// });


// var serviceShow1 = w3.slideshow('.service-img', 0);
// var serviceShow2 = w3.slideshow('.service2-img', 0);
// var serviceShow3 = w3.slideshow('.service3-img', 0);
// var productShow1 = w3.slideshow('.product-img', 0);
// var productShow2 = w3.slideshow('.product2-img', 0);

// var index = 0, total = 3;

// slide(0);