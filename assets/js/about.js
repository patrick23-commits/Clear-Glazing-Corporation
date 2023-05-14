document.addEventListener("DOMContentLoaded", ()=>{
    let stars = document.querySelectorAll(".stars");
    
    setStarsColor()

    function setStarsColor() {
        stars.forEach(element => {
            let random_num = Math.abs(Math.floor(Math.random() * 3)) + 3;
            for(let i = 0; i < random_num; i++) {
                for(let star of element.children[i].children) {
                    star.style.fill = "var(--color)"
                } 
            }
        });
    }
})