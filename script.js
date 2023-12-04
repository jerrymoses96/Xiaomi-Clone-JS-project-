// slider-2 functionality

// Function to move to the next slide
function moveToNextSlide() {
  let lists = document.querySelectorAll(".item2");
  document.getElementById("slide").appendChild(lists[0]);
}

// Function to move to the previous slide
function moveToPrevSlide() {
  let lists = document.querySelectorAll(".item2");
  document.getElementById("slide").prepend(lists[lists.length - 1]);
}

// Click event for the "next-2" button
document.getElementById("next-2").onclick = function () {
  moveToNextSlide();
};

// Click event for the "prev-2" button
document.getElementById("prev-2").onclick = function () {
  moveToPrevSlide();
};

// Auto-sliding functionality
let autoSlideInterval = setInterval(function () {
  moveToNextSlide();
}, 4000); // Adjust the interval (in milliseconds) according to your preference

// Stop auto-sliding when the mouse is over the slider
document.getElementById("slide").addEventListener("mouseover", function () {
  clearInterval(autoSlideInterval);
});

// Resume auto-sliding when the mouse leaves the slider
document.getElementById("slide").addEventListener("mouseout", function () {
  autoSlideInterval = setInterval(function () {
    moveToNextSlide();
  }, 4000); // Adjust the interval (in milliseconds) according to your preference
});

