
window.onload = function(){
        document.getElementById("acc-1").addEventListener( 'click' , changeClass1 );
        document.getElementById("acc-2").addEventListener( 'click' , changeClass2 );
        document.getElementById("acc-3").addEventListener( 'click' , changeClass3 );
        document.getElementById("mobile-ico").addEventListener( 'click' , openMobileMenu );
        document.getElementById("menu-mobile-list").addEventListener( 'click' , openMobileMenu );
}


function changeClass1(){

    if(document.getElementById("aacc-1").className == "accordion-hidden"){
        document.getElementById("aacc-1").className = "accordion-show";
    }else{
        document.getElementById("aacc-1").className = "accordion-hidden";
    } 
}


function changeClass2(){

    if(document.getElementById("aacc-2").className == "accordion-hidden"){
    	document.getElementById("aacc-2").className = "accordion-show";
    }else{
    	document.getElementById("aacc-2").className = "accordion-hidden";
    } 
}

function changeClass3(){

    if(document.getElementById("aacc-3").className == "accordion-hidden"){
        document.getElementById("aacc-3").className = "accordion-show";
    }else{
        document.getElementById("aacc-3").className = "accordion-hidden";
        } 
}


function openMobileMenu(){
    var x = document.getElementById("menu-mobile-list");
    if (x.className === "menu-list"){
        x.className += " menu-list2"; 
        console.log("Menu list is shown");
    }else
        {
        x.className = "menu-list";
        console.log("Menu list is hidden");
        }
}


