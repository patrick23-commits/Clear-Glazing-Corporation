document.addEventListener("DOMContentLoaded", ()=>{
    showEffect()
     
    

    function showEffect() {
        let objective_bg = document.querySelectorAll("#services > div");

        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle("show", entry.isIntersecting)
            })
        }, {
            threshold : .99,
        })
        objective_bg.forEach(img =>{
            observer.observe(img)
        })
    }
})