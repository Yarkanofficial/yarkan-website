
document.addEventListener("DOMContentLoaded", function () {

    const buyButton = document.querySelector(".btn");

    buyButton.addEventListener("click", function (e) {
        e.preventDefault();

        alert("YARKAN (YKN) is coming soon! Stay tuned.");
    });

});
// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});

// Hero Animation
window.addEventListener("load",()=>{

    document.querySelector(".hero").classList.add("show");

});

// Buy Button
const buyBtn=document.querySelector(".btn");

if(buyBtn){

buyBtn.addEventListener("click",(e)=>{
e.preventDefault();

alert("YARKAN (YKN) Launching Soon 🚀");

});

}
