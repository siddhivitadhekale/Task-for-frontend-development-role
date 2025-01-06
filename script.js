function showsidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

// Get all cards
const cards = document.querySelectorAll(".card");

// Add click event listener to each card
cards.forEach((card) => {
  card.addEventListener("click", () => {
    // Toggle the 'hide-image' class
    card.classList.toggle("hide-image");
  });
});
