// This line gets a special tool to find and interact with things on the webpage.
let slider = document.querySelector(".slider");

// This sets how much the webpage should move when we want it to slide.
let scrollAmount = 1280;

// This line finds all the dots (indicators) on the webpage.
let dots = document.querySelectorAll(".dots li");

// This is like a flag that tells us if something is happening or not.
let isAnimating = false;

// This is like a timer that will help us make the webpage move automatically.
let autoScrollInterval;

// This is a function that updates the little dots at the bottom to show which part of the webpage we are on.
function updateIndicators() {
  // This figures out which dot should be active based on where we are on the webpage.
  const activeIndex = Math.floor(slider.scrollLeft / scrollAmount);

  // This makes the correct dot look active and the others not.
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === activeIndex);
  });
}

// This function makes the webpage slide to the right.
function right() {
  // This checks if something else is already happening.
  if (!isAnimating) {
    // This tells that something is happening now.
    isAnimating = true;

    // This moves the webpage to the right.
    slider.scrollLeft += scrollAmount;

    // This checks if we reached the end, and if so, goes back to the beginning.
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 200) {
      slider.scrollLeft = 0;
    }

    // This waits for the movement to finish and then updates the dots.
    requestAnimationFrame(() => {
      isAnimating = false;
      updateIndicators();
    });
  }
}

// This function makes the webpage slide to the left.
function left() {
  // This checks if something else is already happening.
  if (!isAnimating) {
    // This tells that something is happening now.
    isAnimating = true;

    // This moves the webpage to the left.
    slider.scrollLeft -= scrollAmount;

    // This checks if we scrolled to the beginning, and if so, goes to the end.
    if (slider.scrollLeft <= 0) {
      slider.scrollLeft = slider.scrollWidth - slider.clientWidth - 70;
    }

    // This waits for the movement to finish and then updates the dots.
    requestAnimationFrame(() => {
      isAnimating = false;
      updateIndicators();
    });
  }
}

// This listens for when we scroll (slide) the webpage and then updates the dots accordingly.
slider.addEventListener("scroll", updateIndicators);

// This updates the dots when the webpage first loads.
updateIndicators();

// This function starts the automatic sliding of the webpage.
function startAutoScroll() {
  // This sets a timer to make the webpage slide to the right every 3 seconds.
  autoScrollInterval = setInterval(right, 3000);
}

// This function stops the automatic sliding of the webpage.
function stopAutoScroll() {
  // This cancels the timer, stopping the automatic sliding.
  clearInterval(autoScrollInterval);

  // This tells that the automatic sliding is now paused.
  autoScrollInterval = null;
}

// This starts the automatic sliding when the webpage first loads.
startAutoScroll();

// These lines find a button and an icon on the webpage.
const pauseButton = document.getElementById("pauseButton");
const pauseIcon = document.getElementById("pauseIcon");

// This makes the button do something when clicked.
pauseButton.addEventListener("click", function () {
  // This checks if the automatic sliding is happening.
  if (autoScrollInterval) {
    // If it is happening, this stops it.
    stopAutoScroll();

    // This changes the icon to a play icon.
    pauseIcon.classList.remove("fa-pause");
    pauseIcon.classList.add("fa-play");
  } else {
    // If it is not happening, this starts it.
    startAutoScroll();

    // This changes the icon to a pause icon.
    pauseIcon.classList.remove("fa-play");
    pauseIcon.classList.add("fa-pause");
  }
});

// ------Drop down functionality-------//

function dropdown(container) {
  var dropdownContent = container.querySelector("#dropdown1-content");
  dropdownContent.style.display = "block";
}

function hideDropdown(container) {
  var dropdownContent = container.querySelector("#dropdown1-content");
  dropdownContent.style.display = "none";
}

function dropdown2(container2) {
  var dropdownContent2 = container2.querySelector("#dropdown2-content");
  dropdownContent2.style.display = "block";
}

function hideDropdown2(container2) {
  var dropdownContent2 = container2.querySelector("#dropdown2-content");
  dropdownContent2.style.display = "none";
}

function dropdown3(container3) {
  var dropdownContent3 = container3.querySelector("#dropdown3-content");
  dropdownContent3.style.display = "block";
}

function hideDropdown3(container3) {
  var dropdownContent3 = container3.querySelector("#dropdown3-content");
  dropdownContent3.style.display = "none";
}

function dropdown4(container4) {
  var dropdownContent4 = container4.querySelector("#dropdown4-content");
  dropdownContent4.style.display = "block";
}

function hideDropdown4(container4) {
  var dropdownContent4 = container4.querySelector("#dropdown4-content");
  dropdownContent4.style.display = "none";
}
// tabs section functionality

function showTab(tabNumber) {
  console.log("showTab called with tabNumber:", tabNumber);

  // Hide all tabs
  document.querySelectorAll(".content").forEach(function (tabContent) {
    tabContent.classList.remove("active-tab");
  });

  // Show the selected tab
  const selectedTab = document.getElementById("tab" + tabNumber);
  if (selectedTab) {
    selectedTab.classList.add("active-tab");
  } else {
    console.error("Tab not found for tabNumber:", tabNumber);
  }

  // Update button styles
  document.querySelectorAll(".btn-box button").forEach(function (tabButton) {
    tabButton.classList.remove("active");
  });

  const activeTabButton = document.getElementById("tabBtn" + tabNumber);
  if (activeTabButton) {
    activeTabButton.classList.add("active");
  } else {
    console.error("Button not found for tabNumber:", tabNumber);
  }
}

// slider-2 functionality

document.getElementById('next').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').prepend(lists[lists.length - 1]);
}



