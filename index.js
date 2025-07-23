const body=document.querySelector("body")

// Array of snowflake/star image URLs to be used for the effect
const Images = [
  "https://cdn3.iconfinder.com/data/icons/merry-flat-christmas/513/_11-1024.png",
  "https://cdn3.iconfinder.com/data/icons/christmas-new-year-2040/96/Icon_Snowflake-1024.png"
];

body.addEventListener("mousemove", (event)=>{
    const x = event.clientX; // Get the X (horizontal) position of the mouse
    const y =event.clientY; // Get the Y (vertical) position of the mouse
    const spanEl = document.createElement("span"); // Create a new <span> element to represent the falling image
    // Set the position of the element to where the mouse is
    spanEl.style.left = x +"px"
    spanEl.style.top= y +"px"
    const size = Math.random()*50 +20; // Set a random size for the image between 20px and 70px
    spanEl.style.width= size+"px"
    spanEl.style.height= size+"px"
    spanEl.style.backgroundImage = `url(${currentStarURL})`;  // Set the background image to the currently selected one
    body.appendChild(spanEl); // Append the span element to the body
    // Remove the span element after 3 seconds to prevent clutter
    setTimeout(()=>{
         if (spanEl.parentNode) {
                    spanEl.remove();
                }
            }, 3000);
        });



let currentImageIndex = 0; // Index of the current image being used
let currentStarURL = Images[currentImageIndex];

// Change the image to the next one in the array on each click
body.addEventListener("click", () => {
    // Move to next image
    currentImageIndex = (currentImageIndex + 1) % Images.length;

    // Update current image
    currentStarURL = Images[currentImageIndex];
});
