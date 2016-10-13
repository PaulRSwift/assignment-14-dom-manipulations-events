// GO!

// TASK 1 -- Show/Hide Nav
var navBtnEl = document.querySelector("#hide-nav button")
var navEl = document.querySelector('.nav-menu')

   //console.log(navBtnEl)
navBtnEl.addEventListener('click', function(){

   //(1) Properly select the element
     //console.log([navEl]);
   //   if (navEl.className === ("nav-menu")) {
   //   navEl.className = "nav-menu-hidden"
   //   } else {
   //   navEl.className = "nav-menu"
   //   }
   //console.log(navEl.classList)
     if (navEl.classList.contains("nav-menu") ) {
        navEl.classList.add("nav-menu-hidden" )
        navEl.classList.remove("nav-menu")

     } else {
        navEl.classList.remove("nav-menu-hidden")
        navEl.classList.add("nav-menu")
     }

})


// TASK 2 -- Select an Icon



   var wishOptionEl = document.querySelector(".wish-list")
   //console.log(wishOptionEl);

   var iconEl = function(){

      //console.log(target.className);

   if (target.className === "option selected") {
      target.className = "option "
   } else if (target.className === "option"){
      target.className = "option selected"
   }
   wishOptionEl.addEventListener('click',iconEl)
}

   // if (wishOptionEl.target.className.contains("option") ) {
   //   wishOptionEl.target.className.add("option selected" )
   //   wishOptionEl.target.className.remove("option")
   //
   // } else {
   //   wishOptionEl.target.className.remove("option selected")
   //   wishOptionEl.target.className.add("option")
   // }
   //wishOptionEl.addEventListener('click',iconEl)
//}

// TASK 3 -- Move Item From List to List


// TASK 4 -- Add Guest to List

 var inputEl = document.querySelector("#add-guest .answer-box")
 //console.log(inputEl);

 var respondToKey = function(evt){

    // handle when enter  key is pressed

    if(evt.keyCode === 13){
       //console.log('test', evt.keyCode )
       console.log('input VAL', evt.target.value )
       inputEl(evt.target.value )

    }
}

inputEl.addEventListener('keydown', respondToKey )




// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
