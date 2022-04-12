let btn = document.getElementsByClassName("btn")
let len = btn.length
//console.log(len)

for(let i=0;i<len;i++){
    btn[i].addEventListener("click",function(){
        this.classList.toggle("active")
        let txt = this.nextElementSibling;
        if(txt.style.display==="block"){
            txt.style.display="none"
        }else{
            txt.style.display="block"
        }
    })
}