const items = document.querySelectorAll("a");

items.forEach(function(item) {
  item.addEventListener("click", function() {
    item.classList.add("active");;
  });
});