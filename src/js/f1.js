
//second
//listener for orientation change
function doOnOrientationChange() {    
  if ((window.orientation === 0) && (window.innerWidth <= 480)) {
     userMenu.insertBefore(podcastSection, form);
     return;
   }    
   main.insertBefore(podcastSection, social);
   return;   
   //jfjfjfj    
}