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

// modal funtionality 

// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var openBtn = document.getElementById("openModalBtn");

// Get the button element to close the modal
var closeBtn = document.getElementById("closeModalBtn");

// When the user clicks the button, open the modal
openBtn.onclick = function () {
  modal.showModal();
};

// When the user clicks on the close button, close the modal
closeBtn.onclick = function () {
  modal.close();
};

// When the user clicks anywhere outside of the modal, close it
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.close();
  }
});


