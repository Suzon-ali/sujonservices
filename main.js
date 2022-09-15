

let Home = document.querySelector('.home');
let About = document.querySelector('.About');
let Servies = document.querySelector('.Services');
let Portfolio = document.querySelector('.Portfolio');


Home.addEventListener('click', function () {

    Home.classList.add("nav_active");
    About.classList.remove("nav_active");
    Servies.classList.remove("nav_active");
    Portfolio.classList.remove("nav_active");
})

About.addEventListener('click', function () {

    Home.classList.remove("nav_active");
    About.classList.add("nav_active");
    Servies.classList.remove("nav_active");
    Portfolio.classList.remove("nav_active");
})

Servies.addEventListener('click', function () {

    Home.classList.remove("nav_active");
    About.classList.remove("nav_active");
    Servies.classList.add("nav_active");
    Portfolio.classList.remove("nav_active");
})
Portfolio.addEventListener('click', function () {

    Home.classList.remove("nav_active");
    About.classList.remove("nav_active");
    Servies.classList.remove("nav_active");
    Portfolio.classList.add("nav_active");
})


let Popular = document.querySelector('.Popular');
let Latest = document.querySelector('.Latest');
let Upcoming = document.querySelector('.Upcoming');
let All = document.querySelector('.All');

Popular.addEventListener('click', function () {

    All.classList.remove("nav_active2");
    Latest.classList.remove("nav_active2");
    Upcoming.classList.remove("nav_active2");
    Popular.classList.add("nav_active2");
})
Latest.addEventListener('click', function () {

    Popular.classList.remove("nav_active2");
    All.classList.remove("nav_active2");
    Upcoming.classList.remove("nav_active2");
    Latest.classList.add("nav_active2");
})

Upcoming.addEventListener('click', function () {

    Popular.classList.remove("nav_active2");
    All.classList.remove("nav_active2");
    Upcoming.classList.add("nav_active2");
    Latest.classList.remove("nav_active2");
})

All.addEventListener('click', function () {

    Popular.classList.remove("nav_active2");
    All.classList.add("nav_active2");
    Upcoming.classList.remove("nav_active2");
    Latest.classList.remove("nav_active2");
})


var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};