

function mousefollower() {
    window.addEventListener('mousemove', function (detail){
        // console.log(detail.clientX,detail.clientY);
       document.querySelector("#mousefollowercircle").style.transform=`translate( ${detail.clientX}px ,${detail.clientY}px)`;});
};
mousefollower();


let picAdd=document.querySelectorAll(".ele").forEach((e)=>{
e.addEventListener("mousemove",(det)=>{
    
})
})
