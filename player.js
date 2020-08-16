let playlist = [
    {
        name: "Disco and the table",
        image: "images/covers/cover1.jpg"
    },    
    {
        name: "Bazon",
        image: "images/covers/bazon.jpg"
    },    
    {
        name: "192 Poisons",
        image: "images/covers/cover2.jpg"
    },    
    {
        name: "Postsovetskaia bronia",
        image: "images/covers/bronia.jpg"
    },    
    {
        name: "Voices around me",
        image: "images/covers/cover3.jpg"
    },
]

window.onload = () => {
    let wrapper = document.body.querySelector('.swiper-wrapper')
    for (let {name, image} of playlist){
        create('div', wrapper, name.toUpperCase(), 'swiper-slide')
    }



    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: true,
        slidesPerView: 5,
        spaceBetween: 0,
        centeredSlides: true,
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            slideChangeTransitionEnd: () => {
                let activeSong = document.body.querySelector(".swiper-slide-active").innerHTML
                let cover = document.body.querySelector(".cover")
                cover.style.backgroundImage = `url(${playlist.filter(song => song.name.toLowerCase() == activeSong.toLowerCase())[0].image})`
            }
        }
    });
}