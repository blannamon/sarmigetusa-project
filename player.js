let playlist = [
    {
        name: "I Feel Myself Sweating",
        image: "images/covers/bazon.jpg",
        audioUrl: "audio/Sarmigetusa - I Feel Myself Sweating.mp3",
        audioUrlWebm: "audio/Sarmigetusa - I Feel Myself Sweating.webm",
        resources: {
            soundcloud: "https://soundcloud.com/555",
            spotify: "https://spotify.com/555",
            bandcamp: "https://bandcamp.com/555"
        }
    },  
    {
        name: "Electro-Techno Bes",
        image: "images/covers/cover1.jpg",
        audioUrl: "audio/Sarmigetusa - Electro-Techno Bes.mp3",
        audioUrlWebm: "audio/Sarmigetusa - Electro-Techno Bes.webm",
        resources: {
            soundcloud: "https://soundcloud.com/333",
            spotify: "https://spotify.com/333",
            bandcamp: "https://bandcamp.com/333"
        }
    },   
    {
        name: "I Guess, My Acid Is Broken",
        image: "images/covers/cover2.jpg",
        audioUrl: "audio/Sarmigetusa - I Guess, My Acid Is Broken.mp3",
        audioUrlWebm: "audio/Sarmigetusa - I Guess, My Acid Is Broken.webm",
        resources: {
            soundcloud: "https://soundcloud.com/123",
            spotify: "https://spotify.com/123",
            bandcamp: "https://bandcamp.com/123"
        }
    },    
    {
        name: "Kak Budto Bi",
        image: "images/covers/bronia.jpg",
        audioUrl: "audio/Sarmigetusa - Kak Budto Bi.mp3",
        audioUrlWebm: "audio/Sarmigetusa - Kak Budto Bi.webm",
        resources: {
            soundcloud: "https://soundcloud.com/222",
            spotify: "https://spotify.com/222",
            bandcamp: "https://bandcamp.com/222"
        }
    },    
    {
        name: "Prayer",
        image: "images/covers/cover3.jpg",
        audioUrl: "audio/Sarmigetusa - Prayer.mp3",
        audioUrlWebm: "audio/Sarmigetusa - Prayer.webm",
        resources: {
            soundcloud: "https://soundcloud.com/432",
            spotify: "https://spotify.com/432",
            bandcamp: "https://bandcamp.com/432"
        }
    },
]





var buttons = document.getElementsByClassName("play-button")
var btnsArr = new Array(...buttons)

// Current music playstate (pause/play)
let playState = false; 

// Current track chosen
let currentTrack = playlist[0];

let findInPlaylist = (songName) => {
    return playlist.filter(song => song.name.toLowerCase() == songName)[0];
}







window.onload = () => {
    let wrapper = document.body.querySelector('.swiper-wrapper')
    for (let {name, image} of playlist){
        let createDiv = (tagName, parent, innerHTML, className) => {
            let el = document.createElement(tagName);
            parent.appendChild(el);
            el.innerHTML = innerHTML;
            if(className){
                el.classList.add(className);
            };
            return el
        }
        createDiv('div', wrapper, name.toUpperCase(), 'swiper-slide')
    }

    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: true,
        slidesPerView: 5,
        spaceBetween: 0,
        centeredSlides: true,
        slideToClickedSlide: true,
        freeMode: true,
        freeModeMomentum: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            slideChangeTransitionEnd: () => {
                // FINDING ACTIVE SONG
                let activeSong = findActiveSong();
                
                // CHANGING COVER
                let cover = document.body.querySelector(".cover")
                cover.style.backgroundImage = `url(${activeSong.image})`
            }
        }
    });
    
    swiper.on('slideChange', (swpr) => {
        if(swpr.clickedSlide){
            let clickedName = swpr.clickedSlide.innerHTML.toLowerCase();
            if(!playState){
                currentTrack = findInPlaylist(clickedName)
                playMusic(clickedName);
            } else {
                playMusic();
                currentTrack = findInPlaylist(clickedName)
                playMusic(clickedName);
            }
        } else {
            // console.log(findActiveSong())
        }
    })

    swiper.on('touchEnd', (swpr) => {
        console.log(swpr.clickedSlide)
    })

    // PLAY BUTTON LOGIC

    btnsArr.forEach(item => {
        item.onclick = () => {
            playMusic()
        };
    })
}


let createHowls = (playlist) => {
    let outputArray = [] 
    playlist.forEach(song => {
        let newHowl = new Howl({
            src: [song.audioUrlWebm, song.audioUrl]
        })
        song.howl = newHowl
        outputArray.push(newHowl)
    })
    return outputArray
}

let sounds = createHowls(playlist) 
// console.log(sounds)                         // [ {}, {}, ... ]
// console.log(playlist)                         // [ {}, {}, ... ]

let findActiveSong = () => {
    let name = document.querySelector(".swiper-slide-active").innerHTML.toLowerCase()
    let active = findInPlaylist(name)
    return active
}







let playHowl = (obj) => {
    let howlId = obj.howl.play();
    obj.howlId = howlId;
}


let playMusic = (active) => {
    if (playState) {
        // PAUSE THAT SHIT
        currentTrack.howl.stop();
        btnsArr.forEach(btn => {
            btn.classList.remove('playing')
        })
        playState = false;
    } else {
        // PLAY SOME MUSIC
        let activeTrack = active ? findInPlaylist(active) : findActiveSong();
        playHowl(activeTrack)
        btnsArr.forEach(btn => {
            btn.classList.add('playing')
        })
        playState = true;

    }
}

// window.onload = () => {
//     playMusic(playState);
// }


// FOR LIVE: loading audio on click 


// var sound = new Howl({
//     src: [playlist[0].audiofile]
// });
    
// sound.play();
// sound.pause();




/*

            PLAYER LOGIC

*/


