const navbar = document.querySelector(`.navbar`)
const hamburger = document.querySelector(`.hamburger`)
const navLinks = document.querySelector(`.nav-link`)
const navBarLi = document.querySelector (`.navbar li`)

window.addEventListener(`scroll`, () => {
    if(this.scrollY >= 100){
        navbar.classList.add('scrolled')
    } else{
        navbar.classList.remove('scrolled')
    }
})

    hamburger.addEventListener(`click`, () =>{
        navLinks.classList.toggle(`active`)
        hamburger.classList.toggle(`active`)
    })


    // navBarLi.forEach(li => li.addEventListener(`click`, () =>{
    //     navBarLi.forEach(li => li.classList.remove (`active`))
    //     li.classList.add (`active`)
    // }))

    // types js here

    var typed = new Typed('#heroTitle', {
        strings:[
            'creative agency',
            'Typed js is cool'],
        typeSpeed: 50,
        loop: true,
        loopCount: Infinity,
        backDelay:2000
      });


    //  aos herer//
            AOS.init();