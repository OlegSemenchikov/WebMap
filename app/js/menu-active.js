document.addEventListener('DOMContentLoaded', function() {
    var itemsMenu = document.querySelectorAll(".menu__text");

    for (var i = 0; i <itemsMenu.length; i++) {
        itemsMenu[i].addEventListener("click", addClassActive);
    }

    function addClassActive() {
        for (var i = 0; i < itemsMenu.length; i++) {
            if (itemsMenu[i].classList.contains("menu__text_active")) {
                itemsMenu[i].classList.remove("menu__text_active");
            }
        }
        this.classList.add("menu__text_active");
    }
});
