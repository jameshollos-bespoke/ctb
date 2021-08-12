const bathroomsNavToggle = document.getElementById("bathrooms-toggle");
const bathroomsNav = document.getElementById("bathrooms-nav");
const bathroomsNavItems = document.getElementsByClassName("nav-link");
const basinsNavToggle = document.getElementById("basins-toggle");
const basinsNav = document.getElementById("basins-nav");

//open main nav
bathroomsNavToggle.addEventListener("click", () => {
    bathroomsNav.classList.toggle("active")
    bathroomsNav.classList.contains("active") && basinsNav.classList.contains("visible") ? basinsNav.classList.toggle("visible") : removeNavColors()
});

//open col2 menu
basinsNavToggle.addEventListener("click", () => {

    if(!basinsNav.classList.contains("visible")){
        basinsNav.classList.add("visible");

        for(let i = 0; i < bathroomsNavItems.length; i++){
            if(i !== 1){
                bathroomsNavItems[i].classList.add("text-almostBlack")
            }
        }
    } else {
        basinsNav.classList.remove("visible");
        removeNavColors()
    }
});

removeNavColors = () => {
    for(let i = 0; i < bathroomsNavItems.length; i++){
        bathroomsNavItems[i].classList.remove("text-almostBlack")
        bathroomsNavItems[i].classList.add("text-primary")
    }
}