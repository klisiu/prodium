window.onload = function()
    {
        document.getElementById("acc-1").addEventListener( 'click' , changeClass );
        document.getElementById("acc-2").addEventListener( 'click' , changeClass );
        document.getElementById("acc-3").addEventListener( 'click' , changeClass );
    }


function changeClass1()
    {
        if(document.getElementById("aacc-1").className == "accordion-hidden"){
            document.getElementById("aacc-1").className = "accordion-show";
        }else{
            document.getElementById("aacc-1").className = "accordion-hidden";
        } 
    }


function changeClass2()
    {
        if(document.getElementById("aacc-2").className == "accordion-hidden"){
        	document.getElementById("aacc-2").className = "accordion-show";
        }else{
        	document.getElementById("aacc-2").className = "accordion-hidden";
        } 
    }

function changeClass3()
    {
        if(document.getElementById("aacc-3").className == "accordion-hidden"){
            document.getElementById("aacc-3").className = "accordion-show";
        }else{
            document.getElementById("aacc-3").className = "accordion-hidden";
        } 
    }



/*
function changeClass()
    {
        if(document.getElementById("aacc-2").className == "accordion-hidden"){
            document.getElementById("aacc-2").className = "accordion-show";
        }else{
            document.getElementById("aacc-2").className = "accordion-hidden";
        } 
    }

    window.onload = function()
    {
        document.getElementById("acc-2").addEventListener( 'click' , changeClass );
    }










function wyl (){
	document.getElementById("acc-1").className = "accordion-hidden";
}

<button onclick="changeClass()">My Button</button>


var acc1 = document.GetElementById("acc-1");
var acc2 = document.GetElementById("acc-2");
var acc3 = document.GetElementById("acc-3");


console.log(acc1);
console.log(acc2);
console.log(acc3);


function accbg(acc1){
		this.classList.toggle("accordion-show");
}

*/

/* Akordeony działający w HTML

<script type="text/javascript">
    function changeClass()
    {
        document.getElementById("acc-3").className = "accordion-hidden";
    }

    window.onload = function()
    {
        document.getElementById("acc-2").addEventListener( 'click' , changeClass );
    }
</script>

*/