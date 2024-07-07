let navMenu=document.querySelector(".navMenu");
let openMenuButton=document.querySelector(".open-button");
let closeMenuButton=document.querySelector(".close-button");

// navbar responsiveness
openMenuButton.addEventListener("click",()=>{
    navMenu.classList.toggle("open");
    navMenu.classList.toggle("nav-mobile");
    closeMenuButton.classList.toggle("open");
    openMenuButton.classList.toggle("close");
});

closeMenuButton.addEventListener("click",()=>{
    navMenu.classList.toggle("open");
    navMenu.classList.toggle("nav-mobile");
    closeMenuButton.classList.toggle("open");
    openMenuButton.classList.toggle("close");
});
document.addEventListener("click",(e)=>{

    if(window.innerWidth<1000){
    if (!openMenuButton.contains(e.target)) {
        if(openMenuButton.classList.contains("close")){
        navMenu.classList.remove("open");
        navMenu.classList.toggle("nav-mobile");
        closeMenuButton.classList.toggle("open");
        openMenuButton.classList.toggle("close");
       
       }
  }}
});

let slider=(name,len)=>{
    let prev = document.querySelector(`.${name} .carosoul-left` );
    let nxt = document.querySelector(`.${name} .carosoul-right` );
    let vidsec = document.querySelector(`.${name} .videos-section`);
    let current=0;
    console.log("hello");
    nxt.addEventListener("click",(e)=>{
         if(current<len-1){
            current++;
            vidsec.style.transform=`translateX(-375.6px)`;
         }
         else{
            current=0;
            vidsec.style.transform=`scaleX(-1)`;
         }

    });
    prev.addEventListener("click",(e)=>{
         if(current>0){
            current--;
            vidsec.style.transform=`translateX(375.6px)`;
         }
         else{
            current=len-1;
            vidsec.style.transform=`scaleX(1)`;
         }
    });

}



slider("carousel-1",5);




