particlesJS("particlesJS", {
    "particles": {
        "number": {
            "value": 500,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
        },
        "opacity": {
            "value": 1,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 7,
            "random": true,
            "anim": {
                "enable": false,
            }
        },
        "line_linked": {
            "enable": false,
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "bottom",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 0.5
                }
            },
            "bubble": {
                "distance": 100,
                "size": 4,
                "duration": 0.3,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const getName = urlParams.get('name') === null || urlParams.get('name') === '' ? 'santa' : urlParams.get('name');
document.getElementById("name").append(getName);

const countDownDate = new Date("Dec 25, 2023 12:00:00").getTime();

const setTimer = setInterval(function () {
    var now = new Date().getTime();
    var difference = countDownDate - now;

    if (difference > 0) {
        var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + " days : " + hours + " hours : " + minutes + " minutes : " + seconds + " seconds";
    }
}, 1000);


let cat = document.getElementById("cat"),
    shadowBack = document.getElementsByClassName("shadow-2"),
    shadowMed = document.getElementsByClassName("shadow-1"),
    tlc = new TimelineLite();
tl = new TimelineLite();
tlc.fromTo(cat, 1, { opacity: 1, y: 60 }, { opacity: 1, y: 0, delay: 2, ease: Power4.easeOut });
tl.fromTo(shadowBack, 2, { opacity: 0 }, { opacity: .5, repeat: -1, yoyo: true, delay: .5 })
    .fromTo(shadowMed, 2, { opacity: .25 }, { opacity: .5, repeat: -1, yoyo: true, })


cat.onmouseover = function (e) {
    tlc.reverse();
};
cat.onmouseout = function (e) {
    tlc.play();
};

const openButton = document.getElementById('send');
openButton.onclick = () => {
    document.getElementById('form').style.display = 'flex'
    document.getElementById('overlay').style.display = 'block'
}

const closeButton = document.getElementById('cancel');
closeButton.onclick = () => {
    document.getElementById('form').style.display = 'none'
    document.getElementById('overlay').style.display = 'none'
}

const shareButton = document.getElementById('share');
shareButton.onclick = () => {
    let setname = document.getElementById('nameInput').value;
    let url = `${window.location.href}?name=${setname}`
    navigator.clipboard.writeText(url);
    navigator.share(url);
}
