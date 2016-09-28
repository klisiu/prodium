
function changeClass1() {

    var x = document.getElementById("aacc-1");

    if (x.className === "accordion-hidden") {
        x.className = "accordion-show";
    } else {
        x.className = "accordion-hidden";
    } 
}


function changeClass2() {

    var y = document.getElementById("aacc-2");

    if (y.className === "accordion-hidden") {
        y.className = "accordion-show";
    } else {
    	y.className = "accordion-hidden";
    } 
}

function changeClass3() {

    var z = document.getElementById("aacc-3"); 

    if (z.className === "accordion-hidden") {
        z.className = "accordion-show";
    } else {
        z.className = "accordion-hidden";
    } 
}


function openMobileMenu() {
    var x = document.getElementById("menu-mobile-list");
    if (x.className === "menu-list") {
        x.className += " menu-list2"; 
        console.log("Menu list is shown");
    } else {
        x.className = "menu-list";
        console.log("Menu list is hidden");
    }
}


window.onload = function () {
    document.getElementById("acc-1").addEventListener('click', changeClass1);
    document.getElementById("acc-2").addEventListener('click', changeClass2);
    document.getElementById("acc-3").addEventListener('click', changeClass3);
    document.getElementById("mobile-ico").addEventListener('click', openMobileMenu);
    document.getElementById("menu-mobile-list").addEventListener('click', openMobileMenu);
}