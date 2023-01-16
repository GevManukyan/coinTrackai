let nums = document.querySelectorAll(".coin3 p")
let nums2 = document.querySelectorAll(".dDiv2 p")
function numFunc(){
    for (let i = 0; i < nums.length; i++) {
        const elem = nums[i];
        elem.addEventListener("click",function(e){
            let p = nums[0];
            while(p ){
                if(p.tagName == "P" ){
                    p.style.border = "none"
                    p.style.filter = "blur(0.5px)"
                }
                p = p.nextSibling
            }
            this.style.border  = "1px solid white"
            this.style.filter = "blur(0px)"
        })
    }
}
numFunc()
function num2Func(){
    for (let i = 0; i < nums2.length; i++) {
        const elem = nums2[i];
        elem.addEventListener("click",function(e){
            let p = nums2[0];
            while(p){
                if(p.tagName == "P" ){
                    p.style.border = "none"
                    p.style.filter = "blur(0.2px)"
                    p.style.backgroundColor = "rgba(255, 0, 0, 0)(0, 0, 0)"
                }
                p = p.nextSibling
            }
            this.style.border  = "1px solid #686868"
            this.style.filter = "blur(0px)"
            this.style.backgroundColor = "#1A202C"
        })
    }
}
num2Func()

let notifImg = document.querySelector(".notification img") ;
let notification = document.querySelector(".notification") ;
function notiFunc() {
    notifImg.addEventListener("click",function() {
        setTimeout(() => {
             notification.style.display = "none"   
        }, 100);
    })
}
notiFunc()
let burger = document.querySelector(".burger") ;
let burgerDiv = document.querySelector(".burgerDiv ")
function burgFunc(){
    let x  = true
    burger.addEventListener("click",function(){
        x = !x
        if(x == false){
            burgerDiv.style.display = "flex"
            return
        }
        burgerDiv.style.display = "none"
    })
}
burgFunc()


function modeFunc(){
    let mode
    if(screen.width <= 425){
         mode = document.querySelector(".nightMode2") ;

    }else{
         mode = document.querySelector(".nightMode") ;
    }
    let x = true
    mode.addEventListener("click",function(){
        mode = document.querySelector(".nightMode")
        x = !x
        if(x == false){
            let moon =
            document.body.style.filter = "invert(1)"
            mode.src = "./images/moon.png"
            mode.classList.toggle("moon")
            return
        }
        mode.src = "./images/Group (1).png"
        mode.classList.toggle("moon")
        document.body.style.filter = "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" ;
    })
}
modeFunc()